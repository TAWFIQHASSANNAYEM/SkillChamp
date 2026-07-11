const navbarTemplate = `
<header class="site-header fixed inset-x-0 top-0 z-50 border-b border-[#7b3f98]/12 bg-white/96 backdrop-blur-xl">
  <div class="section-shell flex items-center justify-between py-4">
    <a href="index.html" class="flex min-w-0 items-center gap-3">
      <img
        src="assets/images/SkillChampGraduateLogoColor.png"
        alt="SkillChamp Graduate logo"
        class="h-11 w-auto rounded-xl bg-white p-1"
      />
      <div class="min-w-0">
        <p class="font-display truncate text-lg font-extrabold text-[#2a2134]">SkillChamp 2026</p>
        <p class="truncate text-xs font-semibold uppercase tracking-[0.18em] text-[#b30f74]">
          Graduate Section
        </p>
      </div>
    </a>

    <nav class="hidden items-center gap-2 xl:flex">
      <a data-nav-link href="index.html" class="rounded-full px-4 py-2 text-sm font-bold text-[#5b5268] hover:bg-[#f8d7ea] hover:text-[#b30f74]">Home</a>
      <a data-nav-link href="competition.html" class="rounded-full px-4 py-2 text-sm font-bold text-[#5b5268] hover:bg-[#f8d7ea] hover:text-[#b30f74]">Competition</a>
      <a data-nav-link href="leaderboard.html" class="rounded-full px-4 py-2 text-sm font-bold text-[#5b5268] hover:bg-[#f8d7ea] hover:text-[#b30f74]">Leaderboard</a>
      <a data-nav-link href="announcements.html" class="rounded-full px-4 py-2 text-sm font-bold text-[#5b5268] hover:bg-[#f8d7ea] hover:text-[#b30f74]">Announcements</a>
      <a data-nav-link href="contact.html" class="rounded-full px-4 py-2 text-sm font-bold text-[#5b5268] hover:bg-[#f8d7ea] hover:text-[#b30f74]">Contact</a>
    </nav>

    <div class="flex items-center gap-3">
      <a data-register-link target="_blank" rel="noreferrer" class="hidden btn-primary text-sm lg:inline-flex">
        Register Team
      </a>
      <button id="menuBtn" class="rounded-2xl border border-[#7b3f98]/15 bg-[#fff3fa] p-2.5 text-[#7b3f98] xl:hidden" aria-label="Open menu">
        <i class="fa-solid fa-bars-staggered"></i>
      </button>
    </div>
  </div>

  <div id="mobileMenu" class="hidden border-t border-[#7b3f98]/10 bg-white xl:hidden">
    <div class="section-shell flex flex-col gap-2 py-4">
      <a data-nav-link href="index.html" class="rounded-2xl px-4 py-3 text-sm font-bold text-[#5b5268] hover:bg-[#f8d7ea] hover:text-[#b30f74]">Home</a>
      <a data-nav-link href="competition.html" class="rounded-2xl px-4 py-3 text-sm font-bold text-[#5b5268] hover:bg-[#f8d7ea] hover:text-[#b30f74]">Competition</a>
      <a data-nav-link href="leaderboard.html" class="rounded-2xl px-4 py-3 text-sm font-bold text-[#5b5268] hover:bg-[#f8d7ea] hover:text-[#b30f74]">Leaderboard</a>
      <a data-nav-link href="announcements.html" class="rounded-2xl px-4 py-3 text-sm font-bold text-[#5b5268] hover:bg-[#f8d7ea] hover:text-[#b30f74]">Announcements</a>
      <a data-nav-link href="contact.html" class="rounded-2xl px-4 py-3 text-sm font-bold text-[#5b5268] hover:bg-[#f8d7ea] hover:text-[#b30f74]">Contact</a>
      <a data-register-link target="_blank" rel="noreferrer" class="btn-primary mt-2 text-sm">Register Team</a>
    </div>
  </div>
</header>
`;

const footerTemplate = `
<footer class="site-footer mt-20 bg-[#2a2134] text-[#e8dbea]">
  <div class="section-shell py-16">
    <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1.1fr]">
      <div>
        <div class="flex items-center gap-3">
          <img
            src="assets/images/SkillChampGraduateLogoWhite.png"
            alt="SkillChamp Graduate logo"
            class="h-12 w-auto"
          />
          <div>
            <p class="font-display text-xl font-extrabold text-white">SkillChamp 2026</p>
            <p class="text-sm text-[#c8b7ce]">Graduate Section | Powered by Connectiya</p>
          </div>
        </div>
        <p class="mt-5 max-w-md text-sm leading-7 text-[#c8b7ce]">
          Bangladesh-focused employability competition for university students,
          built around teamwork, SDG-based problem solving, communication, and
          career readiness.
        </p>
      </div>

      <div>
        <h3 class="font-display text-lg font-bold text-white">Quick Links</h3>
        <div class="mt-5 space-y-3 text-sm">
          <a href="index.html" class="footer-link block text-[#c8b7ce]">Home</a>
          <a href="competition.html" class="footer-link block text-[#c8b7ce]">Competition</a>
          <a href="leaderboard.html" class="footer-link block text-[#c8b7ce]">Leaderboard</a>
          <a href="announcements.html" class="footer-link block text-[#c8b7ce]">Announcements</a>
          <a href="contact.html" class="footer-link block text-[#c8b7ce]">Contact</a>
          <a href="privacy.html" class="footer-link block text-[#c8b7ce]">Privacy Policy</a>
          <a href="terms.html" class="footer-link block text-[#c8b7ce]">Terms &amp; Conditions</a>
        </div>
      </div>

      <div>
        <h3 class="font-display text-lg font-bold text-white">Competition</h3>
        <div class="mt-5 space-y-3 text-sm text-[#c8b7ce]">
          <p>3 Members Per Team</p>
          <p>4 Evaluated Segments</p>
          <p>100 Total Marks</p>
          <p>Campus Round Execution Based</p>
        </div>
      </div>

      <div>
        <h3 class="font-display text-lg font-bold text-white">Support</h3>
        <div class="mt-5 space-y-3 text-sm text-[#c8b7ce]">
          <a data-support-email class="footer-link block"></a>
          <a data-alt-email class="footer-link block"></a>
          <a href="https://connectiya.com" target="_blank" rel="noreferrer" class="footer-link block text-[#c8b7ce]">connectiya.com</a>
          <p>Bangladesh</p>
          <p>For organizer support and official communication.</p>
        </div>
      </div>
    </div>

    <div class="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-[#b59fb9] md:flex-row md:items-center md:justify-between">
      <p>
        <span id="currentYear"></span> SkillChamp Graduate Section. Powered by Connectiya.
      </p>
      <p class="text-right">
        Design &amp; Developed by
        <a data-linkedin target="_blank" rel="noreferrer" class="font-semibold text-white hover:text-[#ff4fa3]">
          Tawfiq Hassan Nayem
        </a>
      </p>
    </div>
  </div>
</footer>
`;

function injectComponent(id, template) {
  const element = document.getElementById(id);
  if (!element) return;
  element.innerHTML = template;
}

injectComponent("navbar", navbarTemplate);
injectComponent("footer", footerTemplate);
document.dispatchEvent(new CustomEvent("skillchamp:components-ready"));
