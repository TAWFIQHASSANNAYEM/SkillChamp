window.skillChampConfig = {
  registrationUrl: "#",
  leaderboardSheetUrl:
    "https://docs.google.com/spreadsheets/d/1k5U5LA7xqoKIDjx4cl8InX-lHpU8UVKU/edit?usp=sharing&ouid=104346149072651719390&rtpof=true&sd=true",
  supportEmail: "connectiya@gmail.com",
  alternateEmail: "biz.dev@connectiya.com",
  developerName: "Tawfiq Hassan Nayem",
  developerLinkedIn: "https://www.linkedin.com/in/tawfiqhassannayem/",
  leaderboardSheetNames: ["Sheet2", "SCOREBOARD", "Scoreboard", "Leaderboard"],
  leaderboardFallback: [],
};

function applySharedConfig() {
  const { registrationUrl, supportEmail, alternateEmail, developerLinkedIn } =
    window.skillChampConfig;

  document.querySelectorAll("[data-register-link]").forEach((link) => {
    link.setAttribute("href", registrationUrl || "#");
    if (!registrationUrl || registrationUrl === "#") {
      link.setAttribute("aria-disabled", "true");
      link.classList.add("opacity-80");
    }
  });

  document.querySelectorAll("[data-support-email]").forEach((link) => {
    link.textContent = supportEmail;
    link.setAttribute("href", `mailto:${supportEmail}`);
  });

  document.querySelectorAll("[data-alt-email]").forEach((link) => {
    link.textContent = alternateEmail;
    link.setAttribute("href", `mailto:${alternateEmail}`);
  });

  document.querySelectorAll("[data-linkedin]").forEach((link) => {
    link.setAttribute("href", developerLinkedIn);
  });

  const yearNode = document.getElementById("currentYear");
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }
}

function markActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    const isActive = link.getAttribute("href") === currentPage;
    link.classList.toggle("nav-link-active", isActive);
  });
}

function setupMobileMenu() {
  const button = document.getElementById("menuBtn");
  const menu = document.getElementById("mobileMenu");
  if (!button || !menu || button.dataset.bound === "true") return;

  button.dataset.bound = "true";

  button.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
}

function initializeSite() {
  applySharedConfig();
  markActiveNavLink();
  setupMobileMenu();
}

document.addEventListener("DOMContentLoaded", initializeSite);
document.addEventListener("skillchamp:components-ready", initializeSite);
