/* =====================================================================
   Adyapragnya Technologies — single-source header + footer
   ---------------------------------------------------------------------
   This is the ONE place the header/nav/footer live. Every page drops in
   two placeholders and this script injects the shared markup:
       <div data-include="header"></div>   (where the header goes)
       <div data-include="footer"></div>   (where the footer goes)
       <script src="js/includes.js"></script>   (just BEFORE js/jquery...)

   Markup below is the Greva template's own header/footer, with Adyapragnya
   content + logo. No fetch() -> works on double-click (file://) and over
   http. Runs immediately (placeholders already parsed above this script),
   so the template's function.js initialises the injected menu correctly.
   ===================================================================== */
(function () {
    "use strict";

    var HEADER_HTML =
    '<header class="main-header main-header-silver active-sticky-header">' +
      '<div class="header-sticky">' +
        '<nav class="navbar navbar-expand-lg">' +
          '<div class="container-fluid">' +
            '<a class="navbar-brand" href="index-3.html" aria-label="Adyapragnya Technologies home"><img class="company-logo-full" src="images/adyapragnya-logo.png" alt="Adyapragnya"><span class="brand-wordmark">Adyapragnya</span></a>' +
            '<div class="collapse navbar-collapse main-menu">' +
              '<div class="nav-menu-wrapper">' +
                '<ul class="navbar-nav mr-auto" id="menu">' +
                  '<li class="nav-item"><a class="nav-link" href="index-3.html">Home</a></li>' +
                  '<li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li>' +
                  '<li class="nav-item submenu"><a class="nav-link" href="products.html">Products</a>' +
                    '<ul>' +
                      '<li class="nav-item"><a class="nav-link" href="products.html">Our Products</a></li>' +
                      '<li class="nav-item"><a class="nav-link" href="oem-products.html">OEM Products</a></li>' +
                    '</ul>' +
                  '</li>' +
                  '<li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>' +
                  '<li class="nav-item"><a class="nav-link" href="solutions.html">Solutions</a></li>' +
                  '<li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>' +
                '</ul>' +
              '</div>' +
              '<div class="header-button-box">' +
                '<div class="header-btn"><a href="contact.html" class="btn-default btn-highlighted">Contact Us</a></div>' +
                '<div class="header-sidebar-btn">' +
                  '<button class="btn btn-popup" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src="images/header-sidebar-btn.svg" alt=""></button>' +
                  '<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" data-lenis-prevent>' +
                    '<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>' +
                    '<div class="offcanvas-body">' +
                      '<div class="header-contact-box"><div class="icon-box"><img src="images/icon-phone-white.svg" alt=""></div><div class="header-contact-box-content"><h3>phone</h3><p><a href="tel:+918043702595">+91 80437 02595</a></p></div></div>' +
                      '<div class="header-contact-box"><div class="icon-box"><img src="images/icon-mail-white.svg" alt=""></div><div class="header-contact-box-content"><h3>email</h3><p><a href="mailto:sales@adyapragnya.com">sales@adyapragnya.com</a></p></div></div>' +
                      '<div class="header-contact-box"><div class="icon-box"><img src="images/icon-location-white.svg" alt=""></div><div class="header-contact-box-content"><h3>address</h3><p>956, Punam Mahal Rd, Subash Nagar, Kengeri Satellite Town, Bengaluru, Karnataka 560060, India</p></div></div>' +
                      '<div class="header-social-links"><h2>stay connected</h2><ul>' +
                        '<li><a href="https://www.linkedin.com/company/adyapragnya" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a></li>' +
                        '<li><a href="#" aria-label="X (Twitter)"><i class="fa-brands fa-x-twitter"></i></a></li>' +
                        '<li><a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a></li>' +
                        '<li><a href="https://youtube.com/@adyapragnyatechnologies" target="_blank" rel="noopener" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a></li>' +
                      '</ul></div>' +
                    '</div>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>' +
            '<div class="navbar-toggle"></div>' +
          '</div>' +
        '</nav>' +
        '<div class="responsive-menu"></div>' +
      '</div>' +
    '</header>';

    var FOOTER_HTML =
    '<footer class="main-footer bg-section dark-section">' +
      '<div class="container">' +
        '<div class="row align-items-center">' +
          '<div class="col-lg-12">' +
            '<div class="footer-contact-form">' +
              '<h2>Subscribe to Get the Latest Updates from Adyapragnya</h2>' +
              '<p>Stay informed with the latest in Geospatial Intelligence, Enterprise Software, AI, and Digital Transformation.</p>' +
              '<div class="footer-newsletter-form"><form action="#" method="POST"><div class="form-group">' +
                '<input type="email" name="email" class="form-control" placeholder="Enter Email Address*" required>' +
                '<button type="submit" class="newsletter-btn"><img src="images/arrow-primary.svg" alt=""></button>' +
              '</div></form></div>' +
            '</div>' +
          '</div>' +
          '<div class="col-xl-4"><div class="about-footer">' +
            '<div class="footer-brand-lockup">' +
              '<a class="footer-logo" href="index-3.html" aria-label="Adyapragnya Technologies home"><img class="company-logo-full" src="images/adyapragnya-logo.png" alt="Adyapragnya"></a>' +
              '<div class="footer-brand-text"><span class="footer-brand-name">Adyapragnya Technologies Private Limited</span><span class="footer-brand-tag">A Spatial Company</span></div>' +
            '</div>' +
            '<div class="about-footer-content"><p>We deliver Geospatial Intelligence, Enterprise Software, AI, Remote Sensing, Drone, and Digital Transformation solutions that turn data into intelligence and intelligence into action.</p></div>' +
            '<div class="about-footer-info-box">' +
              '<div class="footer-info-list"><ul>' +
                '<li><img src="images/icon-phone-accent.svg" alt=""><span>Phone Number: </span><a href="tel:+918043702595">+91 80437 02595</a></li>' +
                '<li><img src="images/icon-mail-accent.svg" alt=""><span>Email Address: </span><a href="mailto:sales@adyapragnya.com">sales@adyapragnya.com</a></li>' +
              '</ul></div>' +
              '<div class="footer-social-links"><h2>Follow Us:</h2><ul>' +
                '<li><a href="https://www.linkedin.com/company/adyapragnya" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a></li>' +
                '<li><a href="#" aria-label="X (Twitter)"><i class="fa-brands fa-x-twitter"></i></a></li>' +
                '<li><a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a></li>' +
                '<li><a href="https://youtube.com/@adyapragnyatechnologies" target="_blank" rel="noopener" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a></li>' +
              '</ul></div>' +
            '</div>' +
          '</div></div>' +
          '<div class="col-xl-8"><div class="footer-links-box">' +
            '<div class="footer-links"><h2>Company</h2><ul>' +
              '<li><a href="index-3.html">Home</a></li>' +
              '<li><a href="about.html">About Us</a></li>' +
              '<li><a href="services.html">Services</a></li>' +
              '<li><a href="solutions.html">Solutions</a></li>' +
              '<li><a href="contact.html">Contact Us</a></li>' +
            '</ul></div>' +
            '<div class="footer-links"><h2>Products</h2><ul>' +
              '<li><a href="product-craftedge-erp.html">CraftEdge ERP</a></li>' +
              '<li><a href="product-assettrax.html">AssetTrax</a></li>' +
              '<li><a href="product-fieldforce.html">FieldForce Automation</a></li>' +
              '<li><a href="product-geotrix.html">GeoTrix</a></li>' +
              '<li><a href="oem-products.html">OEM Products</a></li>' +
            '</ul></div>' +
            '<div class="footer-links footer-contact-list">' +
              '<div class="footer-contact-item"><h2>Contact Information</h2><p>956, Punam Mahal Rd, Subash Nagar, Kengeri Satellite Town, Bengaluru, Karnataka 560060, India</p></div>' +
              '<div class="footer-working-hour-box"><h2>Working Hours</h2><ul>' +
                '<li><span>Monday - Friday</span><time>10:00 AM - 7:00 PM</time></li>' +
              '</ul></div>' +
              '<div class="footer-visitor-count" aria-label="Website visitor count">' +
                '<span class="footer-visitor-icon" aria-hidden="true"><i class="fa-solid fa-chart-line"></i></span>' +
                '<span class="footer-visitor-copy"><span>Visitor Count</span><strong data-visitor-count>1</strong></span>' +
              '</div>' +
            '</div>' +
            '<div class="footer-copyright-text"><p>Copyright &copy; <span data-current-year>2026</span> Adyapragnya Technologies Private Limited. All Rights Reserved.</p></div>' +
          '</div></div>' +
        '</div>' +
      '</div>' +
    '</footer>';

    function inject() {
        var nodes = document.querySelectorAll("[data-include]");
        for (var i = 0; i < nodes.length; i++) {
            var key = (nodes[i].getAttribute("data-include") || "").toLowerCase();
            if (key.indexOf("header") !== -1) nodes[i].outerHTML = HEADER_HTML;
            else if (key.indexOf("footer") !== -1) nodes[i].outerHTML = FOOTER_HTML;
        }
    }

    function markActiveNav() {
        var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
        if (page === "") page = "index.html";
        var sectionPage = page.indexOf("product-") === 0 ? "products.html" :
            (page.indexOf("service-") === 0 ? "services.html" : page);
        var links = document.querySelectorAll("#menu .nav-link");
        for (var i = 0; i < links.length; i++) {
            var href = (links[i].getAttribute("href") || "").toLowerCase();
            if (!href || href.charAt(0) === "#") continue;
            if (href === page || href === sectionPage) {
                links[i].classList.add("active");
                var submenu = links[i].closest("li.submenu");
                if (submenu) {
                    var parent = submenu.querySelector(":scope > .nav-link");
                    if (parent) parent.classList.add("active");
                }
            }
        }
    }

    function setYear() {
        var el = document.querySelector("[data-current-year]");
        if (el) el.textContent = new Date().getFullYear();
    }

    /* Visitor count.
       The stored total lives in visitors.json ({"count": N}) — the single
       source of truth. A future Python backend will read + increment + write
       that file on each visit. Until then this script reads the JSON base and
       adds a per-session bump (kept in localStorage) so the number moves for
       the visitor. When Python is live, delete the localStorage bump block
       and just render data.count from the endpoint. */
    function setVisitorCount() {
        var deltaKey = "adyapragnya.visitor-delta.v1";
        var sessionKey = "adyapragnya.visitor-counted.v1";

        function render(value) {
            var safeValue = Math.max(1, parseInt(value, 10) || 1);
            var counters = document.querySelectorAll("[data-visitor-count]");
            for (var i = 0; i < counters.length; i++) {
                counters[i].textContent = safeValue.toLocaleString("en-IN");
            }
        }

        // Per-session local bump (placeholder until the Python backend writes
        // visitors.json for real).
        var delta = 0;
        try {
            delta = Math.max(0, parseInt(window.localStorage.getItem(deltaKey), 10) || 0);
            if (window.sessionStorage.getItem(sessionKey) !== "1") {
                delta += 1;
                window.localStorage.setItem(deltaKey, String(delta));
                window.sessionStorage.setItem(sessionKey, "1");
            }
        } catch (error) {
            delta = 1;
        }

        // Read the stored base count from the JSON file.
        if (window.fetch && /^https?:$/.test(location.protocol)) {
            window.fetch("visitors.json", { cache: "no-store" })
                .then(function (res) { return res.ok ? res.json() : Promise.reject(); })
                .then(function (data) {
                    var base = (data && typeof data.count !== "undefined") ? parseInt(data.count, 10) || 0 : 0;
                    render(base + delta);
                })
                .catch(function () { render(delta); });
        } else {
            render(delta);
        }
    }

    function setBrandAssets() {
        var loaderLogo = document.querySelector("#loading-icon img");
        if (loaderLogo) {
            loaderLogo.src = "images/adyapragnya-logo.png";
            loaderLogo.alt = "Adyapragnya Technologies";
        }
        var favicon = document.querySelector('link[rel*="icon"]');
        if (favicon) favicon.href = "images/adyapragnya-logo.png";
    }

    // Global back-to-top button (all pages) with smooth scroll
    function addBackToTop() {
        if (document.querySelector(".scroll-top")) return;
        var btn = document.createElement("button");
        btn.className = "scroll-top";
        btn.type = "button";
        btn.setAttribute("aria-label", "Back to top");
        btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
        document.body.appendChild(btn);
        btn.addEventListener("click", function () {
            if (window.adyapragnyaScroll) {
                document.documentElement.setAttribute("data-scroll-engine", "momentum");
                window.adyapragnyaScroll.scrollTo(0, {
                    duration: 1.15,
                    easing: function (progress) {
                        return progress < 0.5
                            ? 4 * progress * progress * progress
                            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
                    },
                    force: true,
                    lock: true
                });
            } else {
                document.documentElement.setAttribute("data-scroll-engine", "native");
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        });
        var onScroll = function () {
            if (window.pageYOffset > 400) btn.classList.add("is-visible");
            else btn.classList.remove("is-visible");
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
    }

    // Run immediately: this script sits at the end of <body>, after the
    // placeholders, so the DOM we need is already parsed.
    inject();
    setBrandAssets();
    markActiveNav();
    setYear();
    setVisitorCount();
    addBackToTop();
})();

/* =====================================================================
   Client-side content deterrents — NOT real security.
   Discourages casual right-click-save / copy / view-source. Trivially
   bypassed (disable JS, view-source:, curl, browser menu). Real content
   protection must live in the backend (auth, watermarking, DRM, ToS).
   ===================================================================== */
(function () {
    "use strict";
    document.addEventListener("contextmenu", function (e) { e.preventDefault(); });
    document.addEventListener("dragstart", function (e) {
        if (e.target && (e.target.tagName === "IMG" || e.target.tagName === "A")) e.preventDefault();
    });
    document.addEventListener("keydown", function (e) {
        var k = (e.key || "").toLowerCase();
        var block =
            e.key === "F12" ||
            (e.ctrlKey && (k === "u" || k === "s" || k === "p")) ||
            (e.ctrlKey && e.shiftKey && (k === "i" || k === "j" || k === "c"));
        if (block) { e.preventDefault(); return false; }
    });
})();
