document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img").forEach((img, index) => {
    if (!img.hasAttribute("loading")) {
      img.setAttribute("loading", index < 6 ? "eager" : "lazy");
    }
    if (!img.hasAttribute("decoding")) {
      img.setAttribute("decoding", "async");
    }
    if (!img.hasAttribute("fetchpriority") && index < 3) {
      img.setAttribute("fetchpriority", "high");
    }
  });

  const tabs = Array.from(document.querySelectorAll(".order-tab"));
  const ordersList = document.querySelector(".orders-list");

  if (tabs.length && ordersList) {
    const data = {
      "Govt. Orders": [
        {
          date: "18 May 2024",
          title: "G.O.(Rt) No.868/2024/LSGD",
          badge: "New",
          detail:
            "Supporting women entrepreneurs through sustainable production activities.",
        },
        {
          date: "04 Jan 2024",
          title: "G.O.(Rt) 34/2024/LSGD",
          badge: "New",
          detail: "At-source organic waste management directives.",
        },
        {
          date: "22 Dec 2024",
          title:
            "Amendment to Working Instructions of Waste Management Technical Committee.",
          badge: "",
          detail: "",
        },
      ],
      "Tenders / Quotations": [
        {
          date: "12 Jun 2024",
          title: "Quotation for women-led food processing equipment",
          badge: "Open",
          detail: "Submission deadline is 20 June 2024.",
        },
        {
          date: "02 Jun 2024",
          title: "Tender for community training materials",
          badge: "",
          detail: "Bids invited from approved suppliers.",
        },
      ],
      Notifications: [
        {
          date: "01 Jun 2024",
          title: "Orientation session for new NHG representatives",
          badge: "New",
          detail: "Scheduled for the second week of June.",
        },
        {
          date: "28 May 2024",
          title: "Training calendar for district coordinators",
          badge: "",
          detail: "Updated schedule published online.",
        },
      ],
      Circulars: [
        {
          date: "10 May 2024",
          title: "Circular on monthly reporting formats",
          badge: "",
          detail: "All CDS units to follow the revised format.",
        },
      ],
      Proceedings: [
        {
          date: "19 Apr 2024",
          title: "Proceedings of the district review meeting",
          badge: "Updated",
          detail: "Shared with all implementing partners.",
        },
      ],
    };

    const renderOrders = (category) => {
      const items = data[category] || [];
      ordersList.innerHTML = items
        .map(
          (item) => `
        <div class="order-item">
          <div class="order-date">${item.date}</div>
          <div class="order-title">
            ${item.title}
            ${item.badge ? `<span class="badge bg-warning text-dark">${item.badge}</span>` : ""}
            ${item.detail ? item.detail : ""}
          </div>
          <div class="order-actions">
            <a href="#"><i class="bi bi-download"></i></a>
            <a href="#"><i class="bi bi-eye-fill"></i></a>
          </div>
        </div>
      `,
        )
        .join("");
    };

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((item) => item.classList.remove("active"));
        tab.classList.add("active");
        renderOrders(tab.querySelector("span").textContent.trim());
      });
    });

    renderOrders("Govt. Orders");
  }

  const paginationDots = Array.from(document.querySelectorAll(".dot"));
  if (paginationDots.length) {
    paginationDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        paginationDots.forEach((item) => item.classList.remove("active"));
        dot.classList.add("active");
      });
    });
  }

  const galleryColumns = Array.from(
    document.querySelectorAll(".gallery-slider .row > .col-md-4"),
  );
  if (galleryColumns.length) {
    let galleryIndex = 0;
    const [prevBtn, nextBtn] = document.querySelectorAll(
      ".gallery-slider .slider-nav button",
    );

    const renderGallery = (index) => {
      galleryColumns.forEach((col, i) => {
        col.style.order = (
          (i - index + galleryColumns.length) %
          galleryColumns.length
        ).toString();
      });
    };

    prevBtn?.addEventListener("click", () => {
      galleryIndex =
        (galleryIndex - 1 + galleryColumns.length) % galleryColumns.length;
      renderGallery(galleryIndex);
    });

    nextBtn?.addEventListener("click", () => {
      galleryIndex = (galleryIndex + 1) % galleryColumns.length;
      renderGallery(galleryIndex);
    });

    renderGallery(galleryIndex);
  }

  const newsColumns = Array.from(
    document.querySelectorAll(".news-section .row.g-4 > div"),
  );
  if (newsColumns.length) {
    let newsIndex = 0;
    const [prevBtn, nextBtn] = document.querySelectorAll(
      ".news-section .news-nav button",
    );

    const renderNews = (index) => {
      newsColumns.forEach((col, i) => {
        col.style.order = (
          (i - index + newsColumns.length) %
          newsColumns.length
        ).toString();
      });
    };

    prevBtn?.addEventListener("click", () => {
      newsIndex = (newsIndex - 1 + newsColumns.length) % newsColumns.length;
      renderNews(newsIndex);
    });

    nextBtn?.addEventListener("click", () => {
      newsIndex = (newsIndex + 1) % newsColumns.length;
      renderNews(newsIndex);
    });

    renderNews(newsIndex);
  }

  const testimonialColumns = Array.from(
    document.querySelectorAll(".testimonial-section .row.g-4 > .col-md-6"),
  );
  if (testimonialColumns.length) {
    let testimonialIndex = 0;
    const [prevBtn, nextBtn] = document.querySelectorAll(
      ".testimonial-section .slider-nav button",
    );

    const renderTestimonials = (index) => {
      testimonialColumns.forEach((col, i) => {
        col.style.order = (
          (i - index + testimonialColumns.length) %
          testimonialColumns.length
        ).toString();
      });
    };

    prevBtn?.addEventListener("click", () => {
      testimonialIndex =
        (testimonialIndex - 1 + testimonialColumns.length) %
        testimonialColumns.length;
      renderTestimonials(testimonialIndex);
    });

    nextBtn?.addEventListener("click", () => {
      testimonialIndex = (testimonialIndex + 1) % testimonialColumns.length;
      renderTestimonials(testimonialIndex);
    });

    renderTestimonials(testimonialIndex);
  }

  const publicationImages = Array.from(
    document.querySelectorAll(".publication-card .pub-img"),
  );
  const publicationButtons = Array.from(
    document.querySelectorAll(".publication-card .slider-btns button"),
  );
  const publicationDots = Array.from(document.querySelectorAll(".dot"));

  if (publicationImages.length && publicationButtons.length === 2) {
    const publicationSlides = [
      ["/images/pub-1.png", "/images/pub-1.png", "/images/pub-1.png"],
      ["/images/init-1.png", "/images/init-1.png", "/images/init-1.png"],
      ["/images/init-2.png", "/images/init-2.png", "/images/init-2.png"],
    ];

    let publicationIndex = 0;

    const renderPublicationSlide = (index) => {
      publicationImages.forEach((img, i) => {
        img.src = publicationSlides[index][i] || publicationSlides[0][i];
      });

      publicationDots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    };

    publicationButtons[0]?.addEventListener("click", () => {
      publicationIndex =
        (publicationIndex - 1 + publicationSlides.length) %
        publicationSlides.length;
      renderPublicationSlide(publicationIndex);
    });

    publicationButtons[1]?.addEventListener("click", () => {
      publicationIndex = (publicationIndex + 1) % publicationSlides.length;
      renderPublicationSlide(publicationIndex);
    });

    publicationDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        publicationIndex = index;
        renderPublicationSlide(publicationIndex);
      });
    });

    renderPublicationSlide(publicationIndex);
  }
});
