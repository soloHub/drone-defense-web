function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth" });
}

const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      alert("Please complete all required fields.");
      return;
    }
    alert("Thank you — your message has been received!");
    form.reset();
  });
}

const mobileToggle = document.getElementById("mobileToggle");
const nav = document.querySelector("nav.primary");
if (mobileToggle && nav) {
  mobileToggle.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  });
}

document.getElementById("demoBtn")?.addEventListener("click", () => scrollToSection("contact"));
