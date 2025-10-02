// ==========================
// Mobile Navigation Toggle
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".site-nav");
  const toggleBtn = document.createElement("button");
  toggleBtn.innerText = "☰ Menu";
  toggleBtn.classList.add("nav-toggle");
  document.querySelector(".site-header .container").prepend(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
  });
});

// ==========================
// Smooth Scroll for Links
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ==========================
// Contact Form Validation
// ==========================
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent default for demo

    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");

    if (!name.value.trim()) {
      alert("Please enter your name.");
      name.focus();
      return;
    }
    if (!email.value.trim() || !email.value.includes("@")) {
      alert("Please enter a valid email address.");
      email.focus();
      return;
    }
    if (!message.value.trim()) {
      alert("Please enter your message.");
      message.focus();
      return;
    }

    // Success
    alert("✅ Thank you for contacting Metal Masta Artistry! We will get back to you soon.");
    form.reset();
  });
}
