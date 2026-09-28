const I18N = {
en: {
  "nav.services": "Services",
  "nav.products": "Products",
  "nav.gallery": "Gallery",
  "nav.why": "Why us",
  "nav.faq": "FAQ",
  "nav.reviews": "Reviews",
  "nav.contact": "Contact",
  "nav.call": "817 609-4156",
  "hero.kicker": "Arlington, Texas · Licensed electricians",
  "hero.title": "Safe, reliable<br>electrical work.",
  "hero.sub": "5.0-star rated (Birdeye): panel upgrades, lighting, wiring and troubleshooting — clean work, upfront pricing, done to code.",
  "hero.cta1": "Book now",
  "hero.cta2": "See services",
  "stats.hoursNum": "Mon – Fri",
  "stats.hours": "Open weekdays 9 – 6",
  "stats.makesNum": "5.0",
  "stats.makes": "Birdeye rating",
  "stats.diagNum": "Licensed",
  "stats.diag": "electricians you can trust",
  "stats.quoteNum": "Upfront",
  "stats.quote": "clear pricing before work",
  "services.kicker": "What we do",
  "services.title": "Residential electrical, done right",
  "services.s1t": "Panel upgrades",
  "services.s1d": "Modern breaker panels installed — more capacity, more safety.",
  "services.s2t": "Lighting installation",
  "services.s2d": "Recessed, landscape and interior lighting designed and installed.",
  "services.s3t": "Outlets & switches",
  "services.s3d": "New outlets, GFCI protection and dimmer switches installed safely.",
  "services.s4t": "Ceiling fans",
  "services.s4d": "Fan installation with proper bracing — balanced, quiet, secure.",
  "services.s5t": "Wiring & rewiring",
  "services.s5d": "Whole-home rewiring and new circuits done to code.",
  "services.s6t": "Troubleshooting",
  "services.s6d": "Flickering lights, dead outlets, tripping breakers — we find the fault fast.",
  "walkin.w1t": "Safety first",
  "walkin.w1d": "Every job inspected and tested",
  "walkin.w2t": "Licensed & insured",
  "walkin.w2d": "Work done to code",
  "walkin.w3t": "Upfront pricing",
  "walkin.w3d": "No surprises on the bill",
  "makes.kicker": "Major brands",
  "makes.title": "We install & service major brands",
  "makes.sub": "From panels to smart lighting — we work with the brands electricians trust most.",
  "why.kicker": "Why choose us",
  "why.title": "Electrical work you can trust",
  "why.intro": "Electricity is not a place to cut corners. Licensed pros, careful work, honest pricing — and we treat your home with respect.",
  "why.l1t": "Licensed electricians",
  "why.l1d": "Qualified pros who know the code — and follow it.",
  "why.l2t": "Safety first",
  "why.l2d": "Every installation is tested and inspected before we leave.",
  "why.l3t": "Upfront pricing",
  "why.l3d": "You approve the price before any work begins.",
  "why.l4t": "Tidy, respectful work",
  "why.l4d": "Drop cloths, clean boots, and a spotless finish.",
  "products.kicker": "We install",
  "products.title": "Quality equipment we trust",
  "products.sub": "The same quality equipment we install every day — ask us what's right for your home.",
  "products.p1t": "Breaker panels",
  "products.p1d": "Modern panels from top brands — safer, more capacity.",
  "products.p2t": "Smart thermostats",
  "products.p2d": "Save energy with a professionally installed smart thermostat.",
  "products.p3t": "EV chargers",
  "products.p3d": "Home EV charging installed safely and to code.",
  "products.note": "Call us to ask about equipment options for your home.",
  "products.cta": "Call to ask",
  "gallery.kicker": "On the job",
  "gallery.title": "Neat, professional work",
  "gallery.c1": "Modern panel installation, wired to code",
  "gallery.c2": "Outdoor service work in Arlington",
  "gallery.c3": "Clean, careful outlet wiring",
  "reviews.kicker": "Word on the street",
  "reviews.title": "Rated 5.0 by Arlington homeowners",
  "reviews.more": "<strong>5.0 rating · Birdeye reviews</strong> &mdash; see what customers say",
  "faq.kicker": "Good to know",
  "faq.title": "Frequently asked questions",
  "faq.q1": "Are you licensed and insured?",
  "faq.a1": "Yes — our electricians are licensed and every job is done to code and tested before we leave.",
  "faq.q2": "Do you give free estimates?",
  "faq.a2": "Call us and describe the job — we'll give you a clear, upfront price before any work starts.",
  "faq.q3": "How fast can you come out?",
  "faq.a3": "Call (817) 609-4156 and we'll schedule you at the earliest available slot.",
  "faq.q4": "What are your hours?",
  "faq.a4": "Monday to Friday, 9:00 AM to 6:00 PM.",
  "contact.kicker": "Come see us",
  "contact.title": "Book your visit",
  "contact.addr": "Address",
  "contact.phone": "Phone",
  "contact.hours": "Hours",
  "contact.hoursVal": "Mon – Fri: 9:00 AM – 6:00 PM<br>Sat – Sun: closed",
  "contact.cta": "Call now to book",
  "promo.kicker": "Peace of mind",
  "promo.title": "Home electrical safety check",
  "promo.text": "A thorough inspection of your panel, wiring and outlets — so you know your home and family are protected.",
  "promo.cta": "Schedule your check",
  "footer.tag": "Licensed electrical service · Arlington, Texas"
}
};

let lang = "en";

function applyLang(l) {
  lang = l;
  localStorage.setItem("demo-lang", l);
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N[l][key];
    if (val !== undefined) el.innerHTML = val;
  });
}

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

applyLang(lang);
