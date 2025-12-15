document.addEventListener("DOMContentLoaded", () => {
  const pageContent = document.querySelector(".page-transition");
  if (pageContent) {
    requestAnimationFrame(() => {
      pageContent.classList.add("page-transition--visible");
    });
  }

  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  const fadeTargets = document.querySelectorAll(".section, .card, .fade-in-on-scroll");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    fadeTargets.forEach((el) => {
      el.classList.add("fade-in-on-scroll");
      observer.observe(el);
    });
  } else {
    fadeTargets.forEach((el) => el.classList.add("is-visible"));
  }

  const productChips = document.querySelectorAll(".product-filters .chip");
  const productCards = document.querySelectorAll(".product-card");
  if (productChips.length && productCards.length) {
    productChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        const filter = chip.getAttribute("data-filter");
        productChips.forEach((c) => c.classList.remove("chip-active"));
        chip.classList.add("chip-active");

        productCards.forEach((card) => {
          const category = card.getAttribute("data-category");
          if (!filter || filter === "all" || category === filter) {
            card.style.display = "";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  const productModal = document.getElementById("product-modal");
  const productModalTitle = document.getElementById("product-modal-title");
  const productModalBody = document.getElementById("product-modal-body");

  if (productModal && productModalTitle && productModalBody && productCards.length) {
    const closeModal = () => {
      productModal.classList.remove("is-open");
    };

    productCards.forEach((card) => {
      const btn = card.querySelector(".product-details-btn");
      const details = card.querySelector(".product-details-content");
      const heading = card.querySelector("h2");

      if (!btn || !details || !heading) return;

      btn.addEventListener("click", () => {
        productModalTitle.textContent = heading.textContent || "";
        productModalBody.innerHTML = details.innerHTML;
        productModal.classList.add("is-open");
      });
    });

    const closeBtn = productModal.querySelector(".product-modal-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", closeModal);
    }

    productModal.addEventListener("click", (event) => {
      if (event.target === productModal) {
        closeModal();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && productModal.classList.contains("is-open")) {
        closeModal();
      }
    });
  }

  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (e) => {
      const name = contactForm.querySelector("#name");
      const email = contactForm.querySelector("#email");
      const message = contactForm.querySelector("#message");

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        e.preventDefault();
        formStatus.textContent = "Please complete all required fields.";
        formStatus.classList.remove("form-status--success");
        formStatus.classList.add("form-status--error");
        return;
      }

      formStatus.textContent =
        "Opening your email client. If it does not appear, please email us at info@dhdnexus.com.";
      formStatus.classList.remove("form-status--error");
      formStatus.classList.add("form-status--success");
    });
  }
});


