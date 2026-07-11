const leaderboardConfig = {
  id: "1k5U5LA7xqoKIDjx4cl8InX-lHpU8UVKU",
  sheetNames: window.skillChampConfig.leaderboardSheetNames,
};

function parseGVizResponse(text) {
  const match = text.match(/setResponse\(([\s\S]+)\);?$/);
  if (!match) {
    throw new Error("Unexpected Google Sheets response format.");
  }

  return JSON.parse(match[1]);
}

function mapLeaderboardRows(rows) {
  return rows
    .map((row) => {
      const cells = row.c || [];
      const team = cells[1]?.v || "";
      const university = cells[2]?.v || "";
      const totalScore = Number(cells[12]?.v || 0);
      const rankCell = cells[13]?.v ?? cells[13]?.f ?? "";
      const rank = Number(String(rankCell).replace(/[^\d.-]/g, "")) || null;

      if (!team || !university || !rank) return null;

      return {
        rank,
        team: String(team).trim(),
        university: String(university).trim(),
        score: totalScore,
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.rank - b.rank);
}

async function fetchSheetData(sheetName) {
  const query =
    "select * where B is not null and C is not null and N is not null";
  const headerGuesses = [1, 2, 3];

  for (const headerCount of headerGuesses) {
    const url =
      `https://docs.google.com/spreadsheets/d/${leaderboardConfig.id}/gviz/tq?` +
      `sheet=${encodeURIComponent(sheetName)}&tqx=out:json&headers=${headerCount}&tq=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    if (!response.ok) {
      continue;
    }

    const payload = parseGVizResponse(await response.text());
    if (mapLeaderboardRows(payload?.table?.rows || []).length) {
      return payload;
    }
  }

  throw new Error(`Failed to fetch usable data from sheet ${sheetName}`);
}

function rankClass(rank) {
  if (rank === 1) return "rank-pill rank-1";
  if (rank === 2) return "rank-pill rank-2";
  if (rank === 3) return "rank-pill rank-3";
  return "rank-pill rank-default";
}

function renderTopTeams(data) {
  const container = document.getElementById("topTeams");
  if (!container) return;

  const topTeams = data.slice(0, 3);
  if (!topTeams.length) {
    container.innerHTML = `
      <div class="empty-state p-8 text-center text-slate-500">
        Top teams will appear here once the scoreboard sheet has live data.
      </div>
    `;
    return;
  }

  container.innerHTML = topTeams
    .map(
      (team) => `
        <article class="score-card p-6">
          <div class="flex items-center justify-between gap-4">
            <span class="${rankClass(team.rank)}">#${team.rank}</span>
            <span class="text-sm font-semibold text-slate-500">${team.score}/100</span>
          </div>
          <h3 class="mt-5 text-2xl font-extrabold text-slate-900">${team.team}</h3>
          <p class="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">${team.university}</p>
        </article>
      `
    )
    .join("");
}

function renderTable(data) {
  const body = document.getElementById("leaderboardRows");
  const empty = document.getElementById("leaderboardEmpty");
  if (!body || !empty) return;

  if (!data.length) {
    body.innerHTML = "";
    empty.classList.remove("hidden");
    return;
  }

  empty.classList.add("hidden");
  body.innerHTML = data
    .map(
      (team) => `
        <tr>
          <td><span class="${rankClass(team.rank)}">#${team.rank}</span></td>
          <td class="font-extrabold text-slate-900">${team.team}</td>
          <td>${team.university}</td>
          <td class="font-extrabold text-[#b30f74]">${team.score}</td>
        </tr>
      `
    )
    .join("");
}

function updateLastSynced(message) {
  const node = document.getElementById("leaderboardStatus");
  if (node) {
    node.textContent = message;
  }
}

async function loadLeaderboard() {
  try {
    let payload = null;
    for (const sheetName of leaderboardConfig.sheetNames) {
      try {
        payload = await fetchSheetData(sheetName);
        if (payload?.table?.rows?.length) break;
      } catch (error) {
        continue;
      }
    }

    const data = payload?.table?.rows?.length
      ? mapLeaderboardRows(payload.table.rows)
      : window.skillChampConfig.leaderboardFallback;

    renderTopTeams(data);
    renderTable(data);

    if (data.length) {
      updateLastSynced("Live scoreboard connected to Google Sheets.");
    } else {
      updateLastSynced(
        "No team data found yet. If your tab name is different, update sheetNames in assets/js/main.js."
      );
    }
  } catch (error) {
    renderTopTeams(window.skillChampConfig.leaderboardFallback);
    renderTable(window.skillChampConfig.leaderboardFallback);
    updateLastSynced(
      "Live sync could not be loaded right now. The page is ready, and you can keep a manual fallback in assets/js/main.js."
    );
  }
}

document.addEventListener("DOMContentLoaded", loadLeaderboard);
