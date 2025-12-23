document.addEventListener("DOMContentLoaded", () => {
  // Get modal elements early so they're available everywhere
  const productModal = document.getElementById("product-modal");
  const productModalTitle = document.getElementById("product-modal-title");
  const productModalBody = document.getElementById("product-modal-body");

  const pigments = [
    {
      id: "pb-15-0",
      name: "Pigment Blue 15:0 5051M",
      group: "phthalocyanine",
      imageSrc: "assets/Pigment Blue 15,0.png",
      ciNo: "74160",
      casNo: "147-14-8",
      einecsNo: "205-685-1",
      pigmentClass: "Cu Phthalocyanine Blue",
      application: "Decorative.",
    },
    {
      id: "pb-15-1",
      name: "Pigment Blue 15:1",
      group: "phthalocyanine",
      imageSrc: "assets/Pigment Blue 15,1.png",
      ciNo: "74160",
      casNo: "147-14-8",
      einecsNo: "205-685-1",
      pigmentClass: "Cu Phthalocyanine Blue",
      application: "Industrial, Decorative.",
    },
    {
      id: "pb-15-2",
      name: "Pigment Blue 15:2",
      group: "phthalocyanine",
      imageSrc: "assets/Pigment Blue 15,2.png",
      ciNo: "74160",
      casNo: "147-14-8",
      einecsNo: "205-685-1",
      pigmentClass: "Cu Phthalocyanine Blue",
      application: "Industrial, Decorative, Coil, Powder.",
    },
    {
      id: "pb-15-3",
      name: "Pigment Blue 15:3",
      group: "phthalocyanine",
      imageSrc: "assets/Pigment Blue 15,3.png",
      ciNo: "74160",
      casNo: "147-14-8",
      einecsNo: "205-685-1",
      pigmentClass: "Cu Phthalocyanine Blue",
      application: "Auto-Motive, Industrial, Coil, Powder.",
    },
    {
      id: "pg-7",
      name: "Pigment Green 7",
      group: "phthalocyanine",
      imageSrc: "assets/Pigment Green 7.png",
      ciNo: "74260",
      casNo: "1328-53-6",
      einecsNo: "215-524-7",
      pigmentClass: "Cu Phthalocyanine Green",
      application: "Decorative.",
    },
    {
      id: "pg-36",
      name: "Pigment Green 36",
      group: "phthalocyanine",
      imageSrc: "assets/Pigment Green 36.png",
      ciNo: "74265",
      casNo: "14302-13-7",
      einecsNo: "238-238-4",
      pigmentClass: "Phthalocyanine Pigment",
      application: "Industrial, Coil, Powder.",
    },
    {
      id: "pv-19",
      name: "Pigment Violet 19",
      group: "highPerformance",
      imageSrc: "assets/Pigment Violet 19.png",
      ciNo: "73900",
      casNo: "1047-16-1",
      einecsNo: "213-879-2",
      pigmentClass: "Quinacridone",
      application: "Industrial, Coil, Powder.",
    },
    {
      id: "pv-23",
      name: "Pigment Violet 23",
      group: "highPerformance",
      imageSrc: "assets/Pigment Violet 23.png",
      ciNo: "51319",
      casNo: "6358-30-1",
      einecsNo: "228-767-9",
      pigmentClass: "Dioxazine",
      application: "Decorative.",
    },
    {
      id: "pr-254",
      name: "Pigment Red 254",
      group: "highPerformance",
      imageSrc: "assets/Pigment Red 254.png",
      ciNo: "56110",
      casNo: "84632-65-5",
      einecsNo: "617-603-5",
      pigmentClass: "DPP",
      application: "Auto-Motive, Industrial, Decorative, Coil, Powder,",
    },
    {
      id: "py-139",
      name: "Pigment Yellow 139",
      group: "highPerformance",
      imageSrc: "assets/Pigment Yellow 139.png",
      ciNo: "56298",
      casNo: "36888-99-0",
      einecsNo: "253-256-2",
      pigmentClass: "Isoindoline Yellow",
      application:
        "PVC, Polyolefins, Polystyrene, ABS, Eva/Rubber, PP, NC/PU Ink, Gravure Ink, Industrial Coating, Coil Coating.",
    },
    {
      id: "po-64",
      name: "Pigment Orange 64",
      group: "highPerformance",
      imageSrc: "assets/Pigment Orange 64.png",
      ciNo: "12760",
      casNo: "72102-84-2",
      einecsNo: "276-344-2",
      pigmentClass: "Benzimidazolone",
      application:
        "NC/PU Ink, Auto-Motive Coating, Powder Coating, PVC, Polyolefins, Polystyrene, ABS, Eva/Rubber, PP.",
    },
  ];

  // Render pigment cards into product page grids
  const phthaloGrid = document.getElementById("phthalocyanine-grid");
  const highPerfGrid = document.getElementById("high-performance-grid");

  if (phthaloGrid && highPerfGrid) {
    const createPigmentCard = (pigment) => {
      const card = document.createElement("article");
      card.className = "card pigment-card fade-in-on-scroll";

      const imageWrapper = document.createElement("div");
      imageWrapper.className = "pigment-card-image-wrapper";

      const img = document.createElement("img");
      img.src = pigment.imageSrc;
      img.alt = pigment.name;
      imageWrapper.appendChild(img);

      const body = document.createElement("div");
      body.className = "pigment-card-body";

      const title = document.createElement("h3");
      title.className = "pigment-card-title";
      title.textContent = pigment.name;

      const detailsButton = document.createElement("button");
      detailsButton.type = "button";
      detailsButton.className = "btn btn-outline pigment-details-btn";
      detailsButton.textContent = "View details";
      detailsButton.setAttribute("data-pigment-id", pigment.id);

      body.appendChild(title);
      body.appendChild(detailsButton);

      card.appendChild(imageWrapper);
      card.appendChild(body);

      return card;
    };

    // Function to open modal with pigment data
    const openPigmentModal = (pigment) => {
      if (!productModal || !productModalTitle || !productModalBody) {
        return;
      }

      // Set modal content
      productModalTitle.textContent = pigment.name;
      productModalBody.innerHTML = `
        <div class="pigment-modal-content">
          <div class="pigment-modal-details">
            <ul class="product-list">
              <li><strong>C.I. No:</strong> ${pigment.ciNo}</li>
              <li><strong>CAS No:</strong> ${pigment.casNo}</li>
              <li><strong>EINECS No.:</strong> ${pigment.einecsNo}</li>
              <li><strong>Pigment Class:</strong> ${pigment.pigmentClass}</li>
              <li><strong>Application:</strong> ${pigment.application}</li>
            </ul>
          </div>
          <div class="pigment-modal-image">
            <img src="${pigment.imageSrc}" alt="${pigment.name}" style="object-fit: contain; background: transparent;" />
          </div>
        </div>
      `;
      
      // Ensure modal content container is visible
      const modalContentBox = productModal.querySelector('.product-modal');
      if (modalContentBox) {
        modalContentBox.style.display = "block";
        modalContentBox.style.visibility = "visible";
      }
      
      // Move modal to body to escape any transform containers
      // This ensures position: fixed works relative to viewport, not a transformed parent
      if (productModal.parentElement !== document.body) {
        document.body.appendChild(productModal);
      }
      
      // Open modal - CSS animations will handle the transition
      productModal.style.display = "flex";
      productModal.classList.add("is-open");
      document.body.style.overflow = "hidden";
    };

    // Create cards and attach listeners directly
    pigments.forEach((pigment) => {
      const card = createPigmentCard(pigment);
      const btn = card.querySelector(".pigment-details-btn");
      
      // Attach click listener directly to each button
      if (btn && productModal) {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          openPigmentModal(pigment);
        });
      }
      
      if (pigment.group === "phthalocyanine") {
        phthaloGrid.appendChild(card);
      } else if (pigment.group === "highPerformance") {
        highPerfGrid.appendChild(card);
      }
    });
  }

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

  if (productModal && productModalTitle && productModalBody) {
    const closeModal = () => {
      productModal.classList.remove("is-open");
      // Wait for animation to complete before hiding
      setTimeout(() => {
        if (!productModal.classList.contains("is-open")) {
          productModal.style.display = "";
          document.body.style.overflow = "";
        }
      }, 300);
    };

    const openModal = () => {
      // Prevent body scroll
      document.body.style.overflow = "hidden";
      // Open modal immediately
      productModal.classList.add("is-open");
    };

    if (productCards.length) {
      productCards.forEach((card) => {
        const btn = card.querySelector(".product-details-btn");
        const details = card.querySelector(".product-details-content");
        const heading = card.querySelector("h2");

        if (!btn || !details || !heading) return;

        btn.addEventListener("click", () => {
          productModalTitle.textContent = heading.textContent || "";
          productModalBody.innerHTML = details.innerHTML;
          openModal();
        });
      });
    }


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

  // Web3Forms Configuration
  // 
  // SETUP INSTRUCTIONS (Super Simple!):
  // 1. Go to https://web3forms.com
  // 2. Enter your email: info@dhdnexus.com
  // 3. Click "Get Your Access Key" (no account needed!)
  // 4. Copy the access key you receive
  // 5. Replace "YOUR_ACCESS_KEY" in contact.html (line 60) with your access key
  // That's it! You get 250 free submissions per month.

  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = contactForm.querySelector("#name");
      const email = contactForm.querySelector("#email");
      const message = contactForm.querySelector("#message");
      const accessKeyInput = contactForm.querySelector('input[name="access_key"]');

      // Validate required fields
      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        formStatus.textContent = "Please complete all required fields.";
        formStatus.classList.remove("form-status--success");
        formStatus.classList.add("form-status--error");
        formStatus.style.display = "block";
        return;
      }

      // Check if access key is configured
      if (!accessKeyInput || accessKeyInput.value === "YOUR_ACCESS_KEY") {
        formStatus.textContent =
          "Email service is not configured. Please contact us directly at info@dhdnexus.com";
        formStatus.classList.remove("form-status--success");
        formStatus.classList.add("form-status--error");
        formStatus.style.display = "block";
        return;
      }

      // Show loading state
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
      formStatus.textContent = "Sending your message...";
      formStatus.classList.remove("form-status--error");
      formStatus.classList.add("form-status--success");
      formStatus.style.display = "block";

      try {
        // Prepare form data
        const formData = new FormData(contactForm);
        
        // Add custom email formatting for better readability
        const company = contactForm.querySelector("#company").value.trim();
        const phone = contactForm.querySelector("#phone").value.trim();
        const country = contactForm.querySelector("#country").value.trim();
        
        // Format the message body with all fields
        let formattedMessage = `Name: ${name.value.trim()}\n`;
        formattedMessage += `Email: ${email.value.trim()}\n`;
        if (phone) formattedMessage += `Phone: ${phone}\n`;
        if (company) formattedMessage += `Company: ${company}\n`;
        if (country) formattedMessage += `Country: ${country}\n\n`;
        formattedMessage += `Message:\n${message.value.trim()}`;
        
        formData.set("message", formattedMessage);

        // Send to Web3Forms
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const result = await response.json();

        if (response.ok && result.success) {
          // Success
          formStatus.textContent =
            "Thank you! Your message has been sent successfully. We'll get back to you soon.";
          formStatus.classList.remove("form-status--error");
          formStatus.classList.add("form-status--success");
          contactForm.reset();
        } else {
          throw new Error(result.message || "Failed to send message");
        }
      } catch (error) {
        console.error("Web3Forms Error:", error);
        formStatus.textContent =
          "Sorry, there was an error sending your message. Please try again or email us directly at info@dhdnexus.com";
        formStatus.classList.remove("form-status--success");
        formStatus.classList.add("form-status--error");
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    });
  }
});


