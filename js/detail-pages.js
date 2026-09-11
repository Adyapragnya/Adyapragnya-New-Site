(function () {
    "use strict";

    var DETAILS = {
        "craftedge-erp": {
            type: "Product",
            title: "CraftEdge ERP",
            subtitle: "Enterprise Resource Planning for Manufacturing & Engineering Industries",
            intro: [
                "CraftEdge ERP is a comprehensive, modular platform designed to digitize and automate every stage of business operations for manufacturing, engineering, railway suppliers, EPC contractors, fabrication industries, and industrial enterprises.",
                "Configurable workflows, multi-level approvals, real-time dashboards, and connected departments give decision-makers clear operational visibility and help teams work with greater speed and control."
            ],
            featureLabel: "Key Modules",
            features: ["Marketing Management", "CRM & Customer Management", "Tender Management", "Sales & Quotation Management", "Purchase & Vendor Management", "RFQ Management", "Inventory & Stores Management", "Production Planning & Control", "Quality Control", "Asset & Preventive Maintenance", "Finance Integration", "MIS, Reports & Analytics", "Workflow & Approval Management", "Document Management"],
            benefits: ["Streamline operations through integrated workflows", "Improve visibility across departments", "Reduce operational costs through automation", "Accelerate decisions with executive dashboards", "Support growth with scalable architecture"],
            ideal: ["Manufacturing", "Engineering", "Railway Suppliers", "EPC", "Fabrication", "Industrial Enterprises"]
        },
        "assettrax": {
            type: "Product",
            title: "Adyapragnya Asset Management System",
            subtitle: "Utility Asset Maintenance Management System",
            intro: ["Adyapragnya Asset Management System manages critical infrastructure and utility assets throughout their lifecycle. GIS-based visualization connects each asset's location with its condition, performance, maintenance history, and operational workflows.", "The platform supports proactive planning, minimizes downtime, extends asset life, and improves service reliability."],
            featureLabel: "Key Features",
            features: ["Centralized Asset Registry", "GIS-Based Asset Visualization", "Preventive & Corrective Maintenance", "Work Order Management", "Inspection Management", "Asset Health Monitoring", "Inventory & Spare Parts", "Mobile Workforce Integration", "Maintenance Scheduling", "AMC & Warranty Tracking", "Performance Dashboards", "Reports & Analytics"],
            benefits: ["Maximize asset performance and lifespan", "Reduce maintenance costs", "Improve workforce productivity", "Minimize service disruptions", "Enable data-driven maintenance planning"],
            ideal: ["Water Utilities", "Electricity", "Gas", "Telecom", "Manufacturing", "Infrastructure", "Smart Cities"]
        },
        "asstrax": {
            type: "Product",
            title: "Adyapragnya Land Asset Management System",
            subtitle: "Enterprise Land Asset Management System",
            intro: ["Adyapragnya Land Asset Management System provides a centralized platform for land assets, property records, leases, ownership information, surveys, and legal documentation.", "GIS parcel visualization helps organizations manage land banks, monitor encroachments, and maintain a reliable digital property registry."],
            featureLabel: "Key Features",
            features: ["Land Bank Management", "GIS Parcel Mapping", "Ownership Records", "Lease & License Management", "Encroachment Monitoring", "Legal Case Tracking", "Survey & Mutation Records", "Document Repository", "Approval Workflows", "Dashboards & Reports"],
            benefits: ["Improve transparency in land management", "Simplify property administration", "Monitor encroachments effectively", "Reduce legal and operational risks", "Maintain a centralized digital registry"],
            ideal: ["Government", "Utilities", "Industrial Estates", "Infrastructure Companies", "Real Estate Developers"]
        },
        "fieldforce": {
            type: "Product",
            title: "FieldForce Automation",
            subtitle: "Spatially Enabled Field Workforce Management Platform",
            intro: ["FieldForce Automation digitizes distributed field operations with GIS-enabled mobile workflows.", "Teams can assign tasks, track workforces, conduct inspections and surveys, manage complaints, and monitor service delivery in real time&mdash;even where offline data capture is required."],
            featureLabel: "Key Features",
            features: ["Service Request Management", "Work Order Management", "Field Inspection", "Geo-Tagged Data Collection", "GPS Workforce Tracking", "Attendance Management", "Route Optimization", "Customer Visit Tracking", "Offline Data Capture", "Photo & Document Upload", "Real-Time Dashboards", "Mobile Applications"],
            benefits: ["Improve field workforce productivity", "Reduce response time", "Enhance customer service", "Eliminate paper-based processes", "Enable real-time operational monitoring"],
            ideal: ["Utilities", "Telecom", "Municipal Bodies", "Facility Management", "Service Organizations"]
        },
        "geotrix": {
            type: "Product",
            title: "GeoTrix",
            subtitle: "AI-Powered Satellite Image Analytics Platform",
            intro: ["GeoTrix transforms satellite imagery into actionable intelligence using AI, machine learning, and advanced geospatial analytics.", "Organizations can monitor environmental change, infrastructure development, natural resources, agriculture, and urban growth with greater speed and consistency."],
            featureLabel: "Key Applications",
            features: ["Urban Sprawl Monitoring", "Surface Water Analysis", "Coastline Erosion Monitoring", "Land Use & Land Cover Classification", "Automated Change Detection", "Infrastructure Monitoring", "Environmental Monitoring", "Forest Cover Assessment", "Mining Activity Monitoring", "Crop Health Analysis", "Disaster Impact Assessment", "Carbon Monitoring", "Time-Series Analysis"],
            benefits: ["AI-driven image interpretation", "Faster, evidence-based decisions", "Multi-temporal analysis", "Automated change detection", "Improved planning and monitoring"],
            ideal: ["Government Agencies", "Urban Planning", "Environment", "Agriculture", "Mining", "Infrastructure", "Utilities"]
        },
        "carencal": {
            type: "Product",
            title: "CareNCal",
            subtitle: "Multi-Speciality Clinic Management System",
            intro: ["CareNCal simplifies clinical and administrative operations for healthcare providers through one secure, intuitive platform.", "It connects patient records, appointments, consultations, billing, pharmacy, inventory, analytics, and telemedicine to improve both staff productivity and patient experience."],
            featureLabel: "Key Features",
            features: ["Patient Registration & Records", "Appointment Scheduling", "Doctor Consultation Management", "Pharmacy Management", "Billing & Invoicing", "Inventory Management", "Reports & Analytics", "Telemedicine"],
            benefits: ["Improve patient experience", "Streamline clinic operations", "Reduce administrative workload", "Enhance billing accuracy", "Enable virtual consultations", "Increase operational efficiency"],
            ideal: ["Multi-Speciality Clinics", "Medical Centers", "Polyclinics", "Diagnostic Practices", "Healthcare Practices"]
        },
        "face-recognition": {
            type: "Product",
            title: "Face Analytics (FaceAi)",
            subtitle: "Intelligent AI-Based Access Management & Attendance",
            intro: ["This AI-powered platform delivers secure, touchless entry management for enterprises, institutions, and commercial facilities.", "Face-based identity verification simplifies employee attendance, visitor management, authorization, and multi-location access monitoring from a centralized dashboard."],
            featureLabel: "Key Features",
            features: ["AI-Based Face Recognition", "Touchless Access Control", "Employee Attendance", "Visitor Registration & Tracking", "Access Authorization", "Multi-Location Support", "Real-Time Alerts", "Attendance Reports", "HR & ERP Integration", "Centralized Dashboard"],
            benefits: ["Strengthen organizational security", "Eliminate manual attendance tracking", "Improve operational efficiency", "Enhance visitor management", "Support enterprise-scale deployments"],
            ideal: ["Corporate Offices", "Manufacturing Facilities", "Educational Institutions", "Hospitals", "Government", "Commercial Buildings"]
        },
        "gis": {
            type: "Service",
            title: "Geographic Information Systems",
            subtitle: "Enterprise GIS Services for Planning, Assets and Decisions",
            intro: ["We design, implement, and modernize geospatial systems that connect location intelligence with enterprise operations.", "Our GIS services cover strategy, data architecture, applications, portals, migration, integration, and long-term spatial database management."],
            featureLabel: "Service Capabilities",
            features: ["Enterprise GIS Implementation", "GIS Consulting & Strategy", "GIS Database Design", "Web GIS Development", "Mobile GIS Applications", "GIS Portal Development", "Data Migration & Conversion", "Spatial Database Management", "Enterprise System Integration", "Utility Network Mapping", "Parcel & Land Information Systems", "Asset Mapping", "Address & Geocoding", "Indoor GIS", "GIS Dashboards"],
            benefits: ["Create a reliable spatial system of record", "Connect maps with operational workflows", "Improve asset and infrastructure visibility", "Standardize geospatial data governance", "Support faster, location-aware decisions"],
            ideal: ["Government", "Utilities", "Infrastructure", "Urban Planning", "Land Administration", "Enterprise Operations"]
        },
        "drone-survey": {
            type: "Service",
            title: "GIS Data Services",
            subtitle: "High-Resolution Geospatial Data, Captured Efficiently",
            intro: ["We combine professional UAV platforms, survey control, and geospatial processing to capture accurate information for planning, engineering, monitoring, and inspection.", "Each engagement is designed around the required accuracy, terrain, coverage, outputs, and operating environment."],
            featureLabel: "Service Capabilities",
            features: ["Topographic Survey", "Corridor & Route Survey", "Construction Progress Monitoring", "Mine Survey", "Stockpile Volume Analysis", "Infrastructure Inspection", "Utility Corridor Survey", "Solar & Wind Farm Survey", "Agricultural & Forest Survey", "Disaster Assessment", "Thermal Drone Inspection", "Aerial Photography & Videography", "DGPS & Ground Control", "Total Station Survey", "As-Built & Boundary Survey"],
            benefits: ["Capture large areas faster", "Improve measurement consistency", "Reduce exposure in difficult terrain", "Create repeatable progress evidence", "Deliver GIS and engineering-ready outputs"],
            ideal: ["Infrastructure", "Mining", "Utilities", "Renewable Energy", "Construction", "Agriculture", "Government"]
        },
        "remote-sensing": {
            type: "Service",
            title: "Remote Sensing & Analytics",
            subtitle: "Turn Earth Observation Data into Actionable Intelligence",
            intro: ["We process and analyze satellite imagery to reveal land, water, vegetation, infrastructure, and environmental change over time.", "Our workflows combine geospatial science, multi-temporal analysis, and AI-based interpretation for dependable monitoring at scale."],
            featureLabel: "Service Capabilities",
            features: ["Satellite Image Processing", "Image Classification", "Land Use & Land Cover Mapping", "Urban Growth Analysis", "Surface Water Monitoring", "Coastline Change Detection", "Change Detection Analysis", "Environmental Monitoring", "Forest Cover Assessment", "Crop Health Monitoring", "Carbon Monitoring", "Disaster Impact Assessment", "Terrain Analysis", "DEM & DSM Generation", "AI-Based Image Interpretation"],
            benefits: ["Monitor large and remote areas", "Compare conditions across time", "Prioritize field verification", "Create consistent evidence for planning", "Automate repeatable image-analysis workflows"],
            ideal: ["Environment", "Agriculture", "Urban Planning", "Infrastructure", "Forestry", "Disaster Management", "Government"]
        },
        "enterprise-software": {
            type: "Service",
            title: "Enterprise Software Development",
            subtitle: "Secure Applications Built Around Your Business Processes",
            intro: ["We engineer enterprise software that digitizes workflows, connects departments, and makes operational data useful.", "From architecture and UX to APIs, deployment, and support, solutions are designed for maintainability, integration, and long-term growth."],
            featureLabel: "Service Capabilities",
            features: ["Enterprise Web Applications", "Custom Software Development", "ERP & CRM Development", "Workflow Automation", "Business Process Automation", "Portal Development", "API Development & Integration", "Dashboard Development", "SaaS Product Development", "Legacy Application Modernization", "Quality Engineering & Support"],
            benefits: ["Replace fragmented manual workflows", "Integrate business-critical systems", "Improve operational visibility", "Scale through modular architecture", "Build secure, maintainable platforms"],
            ideal: ["Manufacturing", "Utilities", "Engineering", "Government", "Healthcare", "Service Enterprises"]
        },
        "ai-geoai": {
            type: "Service",
            title: "AI, GeoAI & Data Analytics",
            subtitle: "Intelligent Automation and Decision Support from Complex Data",
            intro: ["We combine artificial intelligence, spatial analytics, and data engineering to automate interpretation and expose patterns that traditional workflows miss.", "Solutions are grounded in measurable business or operational outcomes, with dashboards and integrations that make predictions usable."],
            featureLabel: "Service Capabilities",
            features: ["Artificial Intelligence Solutions", "GeoAI Applications", "Machine Learning", "Computer Vision", "Predictive Analytics", "Image Analytics", "Video Analytics", "Business Intelligence Dashboards", "Data Engineering", "Decision Support Systems"],
            benefits: ["Automate high-volume analysis", "Improve detection accuracy and consistency", "Connect spatial and business data", "Surface risks and trends earlier", "Operationalize insights through dashboards and APIs"],
            ideal: ["Government", "Utilities", "Infrastructure", "Manufacturing", "Environment", "Security", "Enterprise Analytics"]
        },
        "cloud-managed": {
            type: "Service",
            title: "Cloud, Mobile & Managed Services",
            subtitle: "Modern Platforms Supported Across Their Full Lifecycle",
            intro: ["We help organizations modernize applications, deliver field-ready mobile experiences, and operate critical technology with confidence.", "Services span cloud architecture, DevOps, enterprise mobility, GIS consulting, support, maintenance, monitoring, and technical resource augmentation."],
            featureLabel: "Service Capabilities",
            features: ["Cloud Migration", "AWS, Azure & Google Cloud", "Cloud Application Development", "DevOps Implementation", "Docker & Kubernetes", "CI/CD Automation", "Cloud Security", "Backup & Disaster Recovery", "Android, iOS & Cross-Platform Apps", "Offline Field Applications", "GIS Consulting & Advisory", "Managed GIS Support", "System Monitoring & Optimization", "Training & Technical Support"],
            benefits: ["Modernize with controlled delivery risk", "Improve deployment speed and reliability", "Enable productive mobile field teams", "Maintain performance after launch", "Access specialist skills when required"],
            ideal: ["Enterprises", "Utilities", "Government", "Field Operations", "Digital Product Teams", "GIS Programs"]
        }
    };

    var OEMS = {
        "planet": {
            title: "Planet",
            subtitle: "The Entire Earth, Imaged Every Single Day",
            logo: "images/partner-planet.png",
            website: "https://www.planet.com",
            websiteLabel: "planet.com",
            headerBg: "images/sat-vinkeveen-netherlands.jpg",
            intro: [
                "Planet flies the largest constellation of Earth-imaging satellites ever built &mdash; scanning the entire landmass of the planet, every single day. What was once a rare, expensive snapshot is now a living, always-on record of how the world is changing: block by block, field by field, coastline by coastline.",
                "That changes the question you can ask. Instead of &ldquo;what did this place look like last year?&rdquo; you can ask &ldquo;what changed here since yesterday?&rdquo; &mdash; and get an answer that is already in orbit, captured, calibrated, and ready to analyse. No waiting weeks for a cloud-free pass. No blind spots between site visits.",
                "As Planet's partner in the region, Adyapragnya turns that firehose of imagery into decisions. We wire PlanetScope, SkySat and Tanager data straight into your GIS, dashboards and AI pipelines, and stand behind it with local licensing, onboarding, and support you can actually pick up the phone and reach."
            ],
            featureLabel: "Platforms & Products",
            features: ["PlanetScope — Daily Global Imagery", "SkySat — High-Resolution Tasking", "Tanager — Hyperspectral Intelligence", "Planet Basemaps", "Planetary Variables", "Analysis-Ready Data", "Planet Insights Platform", "Automated Change Detection", "Forest Carbon Monitoring", "Roads & Buildings Feeds"],
            benefits: ["Watch any site on Earth change day by day &mdash; not quarter by quarter", "Catch problems early with a consistent, comparable time-series", "Task a fresh high-resolution image of a specific location on demand", "Retire costly, risky site visits with dependable remote monitoring", "Detect trace-gas and methane signatures invisible to standard imagery", "Feed clean, analysis-ready data straight into AI and GIS workflows"],
            ideal: ["Agriculture", "Forestry & Carbon", "Government", "Defense & Intelligence", "Energy & Utilities", "Environmental Monitoring", "Insurance", "Infrastructure"],
            gallery: [
                { base: "sat-tokyo-airport", caption: "Haneda Airport, Tokyo &mdash; PlanetScope quarterly mosaic (2025 Q3)" },
                { base: "sat-vinkeveen-netherlands", caption: "Vinkeveen, Netherlands &mdash; super-resolution monthly visual (2025)" },
                { base: "sat-longtian-china", caption: "Longtian Airbase, China &mdash; SkySat high-resolution tasking" },
                { base: "sat-muhazi-rwanda", caption: "Lake Muhazi, Rwanda &mdash; PlanetScope quarterly mosaic (2024 Q2)" },
                { base: "sat-skye-scotland", caption: "Isle of Skye, Scotland &mdash; global monthly mosaic (2025-05)" },
                { base: "sat-methane-sandiego", caption: "San Diego County, California &mdash; Tanager methane plume detection" },
                { base: "sat-methane-kootenay", caption: "East Kootenay, BC, Canada &mdash; Tanager methane plume detection" }
            ]
        },
        "greenhyla": {
            title: "GreenHyla",
            subtitle: "Know Where Every Vessel Is — In Real Time",
            logo: "images/partner-hyla.png",
            website: "https://www.greenhyla.com",
            websiteLabel: "greenhyla.com",
            intro: [
                "The ocean is the world's busiest blind spot &mdash; thousands of vessels moving cargo, crews and risk across open water every hour. GreenHyla turns that chaos into a single, live operational picture: where every ship is, where it has been, and where it is headed.",
                "Adyapragnya fuses GreenHyla's maritime feeds with your enterprise GIS and analytics, so operators, port authorities and logistics teams can plan voyages, flag anomalies and manage risk with intelligence grounded in real position &mdash; not guesswork."
            ],
            featureLabel: "Capabilities",
            features: ["Live Vessel Tracking", "AIS Data Integration", "Fleet Performance Analytics", "Port Activity Monitoring", "Voyage & Route Intelligence", "Maritime Risk Assessment", "Historical Track Analysis", "Zone & Geofence Alerts"],
            benefits: ["See every vessel's live position, history and heading at a glance", "Get alerted the moment a ship enters a zone or behaves abnormally", "Benchmark fleet and port performance on real movement data", "Plan voyages and berths with clearer, evidence-based risk intelligence", "Bring maritime awareness straight into your GIS and dashboards"],
            ideal: ["Ports & Terminals", "Shipping & Logistics", "Maritime Authorities", "Coastal Surveillance", "Offshore Operations"]
        },
        "capknow": {
            title: "CAPKNOW",
            subtitle: "GeoPMS — See Your Whole Programme on One Live Map",
            logo: "images/partner-capknow.png",
            website: "https://capknow.com",
            websiteLabel: "capknow.com",
            intro: [
                "On large programmes, the gap between the status report and the ground is where budgets quietly bleed. CAPKNOW's GeoPMS closes it &mdash; putting physical progress, financial status and geo-tagged field evidence on one live, map-driven dashboard that every stakeholder can trust.",
                "Adyapragnya rolls out GeoPMS across programmes and infrastructure portfolios, so project teams see reality as it happens and leadership gets decision-ready intelligence backed by verifiable, location-stamped proof &mdash; not optimistic spreadsheets."
            ],
            featureLabel: "Capabilities",
            features: ["GIS Project Dashboards", "Geo-Tagged Progress Capture", "Milestone & Schedule Tracking", "Field Inspection Workflows", "Physical vs Financial Progress", "Photo & Document Evidence", "Executive MIS Reporting", "Multi-Project Portfolio View"],
            benefits: ["See true project health &mdash; physical and financial &mdash; in one live view", "Verify progress with geo-tagged, photo-backed field inspections", "Replace disputed status meetings with evidence everyone can see", "Give leadership decision-ready intelligence, not stale spreadsheets", "Govern dozens of projects with one consistent, auditable system"],
            ideal: ["Government Programmes", "Infrastructure", "Urban Development", "Utilities", "EPC & Construction"]
        },
        "hexagon": {
            title: "Hexagon Geospatial",
            subtitle: "The Engine Behind Enterprise-Grade Geospatial",
            logo: "images/partner-hexagon.png",
            website: "https://hexagon.com",
            websiteLabel: "hexagon.com",
            headerBg: "images/sat-skye-scotland.jpg",
            intro: [
                "When the imagery is massive and the accuracy is non-negotiable, Hexagon is the engine behind the map. Its geospatial portfolio powers some of the most demanding remote sensing, photogrammetry and enterprise mapping workflows on earth &mdash; from raw pixels to polished, decision-grade products.",
                "Adyapragnya deploys, integrates and tunes the full Hexagon stack around the way your teams actually work &mdash; backed by implementation, training and long-term support, so world-class software becomes everyday capability."
            ],
            featureLabel: "Products",
            features: ["ERDAS IMAGINE", "GeoMedia", "Luciad Portfolio", "M.App Enterprise", "GeoMedia Smart Client", "ERDAS Apollo", "Photogrammetry Suite", "Spatial Modeler"],
            benefits: ["Process and analyse huge imagery volumes with ERDAS IMAGINE", "Build precise enterprise maps and models in GeoMedia", "Deliver fast, rich geospatial experiences with the Luciad portfolio", "Automate repetitive raster and remote-sensing workflows", "Publish and serve geospatial data at scale with ERDAS Apollo"],
            ideal: ["Government", "Defense & Intelligence", "Utilities", "Mapping Agencies", "Environment", "Infrastructure"]
        },
        "foreintel": {
            title: "Foreintel Solutions",
            subtitle: "Survey the Unreachable — From the Air",
            logo: "images/partner-foreintel.png",
            website: "https://www.foreintel.tech",
            websiteLabel: "foreintel.tech",
            intro: [
                "Some sites are too large, too steep or too dangerous to survey on foot &mdash; and that is exactly where drones earn their keep. Foreintel builds professional-grade UAV platforms engineered for survey, mapping, inspection and monitoring in the environments that defeat conventional methods.",
                "Adyapragnya matches the right airframe and payload to your accuracy, terrain and coverage, then carries the mission through end to end &mdash; from flight planning and capture to survey-grade, GIS-ready deliverables."
            ],
            featureLabel: "Platforms & Payloads",
            features: ["Fixed-Wing UAVs", "Multirotor Platforms", "VTOL Systems", "Survey & Mapping Payloads", "Thermal & Multispectral Sensors", "LiDAR Payloads", "Ground Control Stations", "Mission Planning Software"],
            benefits: ["Cover large or hazardous sites in a fraction of the time and risk", "Pick the ideal fixed-wing, multirotor or VTOL platform per mission", "Add thermal, multispectral or LiDAR payloads for specialist surveys", "Capture repeatable, centimetre-grade data on demand", "Turn flights into survey-grade, GIS-ready deliverables"],
            ideal: ["Survey & Mapping", "Mining", "Infrastructure", "Agriculture", "Renewable Energy", "Disaster Response"]
        }
    };

    function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, function (character) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[character];
        });
    }

    function list(items, renderer) {
        return items.map(renderer).join("");
    }

    function renderOem(mount, oem) {
        var bgUrl = oem.headerBg || "images/oem-product-bg.webp";

        var galleryHtml = "";
        if (oem.gallery && oem.gallery.length) {
            galleryHtml =
                '<div class="detail-block">' +
                    '<div class="detail-block-heading"><h2>Imagery Gallery</h2><p>Real Earth observation captured by Planet. Click any frame to enlarge.</p></div>' +
                    '<div class="oem-gallery">' +
                    list(oem.gallery, function (shot, i) {
                        return '<a class="oem-gallery-item" href="images/' + shot.base + '.jpg" data-index="' + i + '">' +
                                    '<img loading="lazy" src="images/' + shot.base + '-thumb.jpg" alt="' + escapeHtml(shot.caption.replace(/&mdash;/g, "-")) + '">' +
                                    '<span class="oem-gallery-caption">' + shot.caption + '</span>' +
                                    '<span class="oem-gallery-zoom" aria-hidden="true"><i class="fa-solid fa-expand"></i></span>' +
                                '</a>';
                    }) +
                    '</div>' +
                    '<p class="oem-gallery-credit">Imagery &copy; Planet</p>' +
                '</div>';
        }

        mount.innerHTML =
            '<div class="page-header dark-section oem-detail-header parallaxie" style="background-image: url(\'' + bgUrl + '\');">' +
                '<div class="container"><div class="row"><div class="col-lg-12"><div class="page-header-box">' +
                    '<h1>' + escapeHtml(oem.title) + '</h1>' +
                    '<nav><ol class="breadcrumb">' +
                        '<li class="breadcrumb-item"><a href="index.html">Home</a></li>' +
                        '<li class="breadcrumb-item"><a href="partner-products.html">Partner Products</a></li>' +
                        '<li class="breadcrumb-item active" aria-current="page">' + escapeHtml(oem.title) + '</li>' +
                    '</ol></nav>' +
                '</div></div></div></div>' +
            '</div>' +
            '<section class="detail-overview-section">' +
                '<div class="container"><div class="row">' +
                    '<div class="col-lg-4"><aside class="detail-sidebar oem-detail-sidebar">' +
                        '<div class="oem-detail-logo"><img src="' + oem.logo + '" alt="' + escapeHtml(oem.title) + ' logo"></div>' +
                        '<span class="detail-type">Partner Product</span>' +
                        '<h2>' + escapeHtml(oem.title) + '</h2>' +
                        '<p>' + oem.subtitle + '</p>' +
                        '<div class="detail-sidebar-actions">' +
                            '<a href="contact.html" class="btn-default btn-highlighted">Enquire Now</a>' +
                            '<a href="' + oem.website + '" target="_blank" rel="noopener" class="oem-website-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> Visit ' + escapeHtml(oem.websiteLabel) + '</a>' +
                            '<a class="detail-back-link" href="partner-products.html"><i class="fa-solid fa-arrow-left"></i> Back to Partner Products</a>' +
                        '</div>' +
                    '</aside></div>' +
                    '<div class="col-lg-8"><div class="detail-main">' +
                        '<div class="section-title"><span class="section-sub-title">Overview</span><h2>' + oem.subtitle + '</h2></div>' +
                        '<div class="detail-copy">' + list(oem.intro, function (p) { return '<p>' + p + '</p>'; }) + '</div>' +
                        galleryHtml +
                        '<div class="detail-block"><div class="detail-block-heading"><h2>' + escapeHtml(oem.featureLabel) + '</h2><p>Delivered, integrated, and supported by Adyapragnya.</p></div>' +
                            '<div class="detail-feature-grid">' + list(oem.features, function (f) { return '<div class="detail-feature-item"><i class="fa-solid fa-check-double"></i><span>' + escapeHtml(f) + '</span></div>'; }) + '</div>' +
                        '</div>' +
                        '<div class="detail-block detail-benefit-panel"><h2>What You Gain</h2><ul class="detail-benefit-list">' +
                            list(oem.benefits, function (b) { return '<li>' + b + '</li>'; }) +
                        '</ul></div>' +
                        '<div class="detail-block"><div class="detail-block-heading"><h2>Ideal For</h2><p>Trusted across sectors that depend on reliable geospatial intelligence.</p></div><div class="detail-audience">' +
                            list(oem.ideal, function (a) { return '<span>' + escapeHtml(a) + '</span>'; }) +
                        '</div></div>' +
                        '<div class="detail-cta"><div><h2>Interested in ' + escapeHtml(oem.title) + '?</h2><p>Tell us your requirement and we will map the right licensing and implementation path.</p></div><a href="contact.html" class="btn-default">Get In Touch</a></div>' +
                    '</div></div>' +
                '</div></div>' +
            '</section>';

        if (oem.gallery && oem.gallery.length) {
            setupOemLightbox(oem.gallery);
        }
    }

    function setupOemLightbox(gallery) {
        var current = 0;

        var overlay = document.createElement("div");
        overlay.className = "oem-lightbox";
        overlay.setAttribute("aria-hidden", "true");
        overlay.innerHTML =
            '<button class="oem-lightbox-close" type="button" aria-label="Close">&times;</button>' +
            '<button class="oem-lightbox-nav oem-lightbox-prev" type="button" aria-label="Previous image"><i class="fa-solid fa-chevron-left"></i></button>' +
            '<button class="oem-lightbox-nav oem-lightbox-next" type="button" aria-label="Next image"><i class="fa-solid fa-chevron-right"></i></button>' +
            '<figure class="oem-lightbox-figure">' +
                '<img class="oem-lightbox-img" src="" alt="">' +
                '<figcaption class="oem-lightbox-caption"></figcaption>' +
            '</figure>' +
            '<div class="oem-lightbox-counter"></div>' +
            '<div class="oem-lightbox-credit">Imagery &copy; Planet</div>';
        document.body.appendChild(overlay);

        var imgEl = overlay.querySelector(".oem-lightbox-img");
        var capEl = overlay.querySelector(".oem-lightbox-caption");
        var countEl = overlay.querySelector(".oem-lightbox-counter");

        function show(index) {
            current = (index + gallery.length) % gallery.length;
            var shot = gallery[current];
            imgEl.src = "images/" + shot.base + ".jpg";
            imgEl.alt = shot.caption.replace(/&mdash;/g, "-");
            capEl.innerHTML = shot.caption;
            countEl.textContent = (current + 1) + " / " + gallery.length;
        }
        function open(index) {
            show(index);
            overlay.classList.add("is-open");
            overlay.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";
        }
        function close() {
            overlay.classList.remove("is-open");
            overlay.setAttribute("aria-hidden", "true");
            document.body.style.overflow = "";
        }

        var items = document.querySelectorAll(".oem-gallery-item");
        for (var i = 0; i < items.length; i++) {
            (function (el) {
                el.addEventListener("click", function (e) {
                    e.preventDefault();
                    open(parseInt(el.getAttribute("data-index"), 10) || 0);
                });
            })(items[i]);
        }

        overlay.querySelector(".oem-lightbox-close").addEventListener("click", close);
        overlay.querySelector(".oem-lightbox-prev").addEventListener("click", function () { show(current - 1); });
        overlay.querySelector(".oem-lightbox-next").addEventListener("click", function () { show(current + 1); });
        overlay.addEventListener("click", function (e) { if (e.target === overlay) close(); });
        document.addEventListener("keydown", function (e) {
            if (!overlay.classList.contains("is-open")) return;
            if (e.key === "Escape") close();
            else if (e.key === "ArrowLeft") show(current - 1);
            else if (e.key === "ArrowRight") show(current + 1);
        });
    }

    function render() {
        var mount = document.getElementById("detail-page");
        if (!mount) return;

        var id = mount.getAttribute("data-detail-id");

        if (OEMS[id]) {
            renderOem(mount, OEMS[id]);
            return;
        }

        var detail = DETAILS[id];
        if (!detail) {
            mount.innerHTML = '<div class="container" style="padding:120px 0"><h1>Page not found</h1><p><a href="index.html">Return home</a></p></div>';
            return;
        }

        var listingUrl = detail.type === "Product" ? "products.html" : "services.html";
        var listingLabel = detail.type === "Product" ? "Products" : "Services";

        var defaultBg = detail.type === "Product" ? "images/all-products-bg.png" : "images/all-services-bg.png";
        var bgUrl = detail.headerBg || defaultBg;
        var headerStyle = ' style="background-image: url(\'' + bgUrl + '\');"';

        mount.innerHTML =
            '<div class="page-header dark-section parallaxie"' + headerStyle + '>' +
                '<div class="container"><div class="row"><div class="col-lg-12"><div class="page-header-box">' +
                    '<h1>' + escapeHtml(detail.title) + '</h1>' +
                    '<nav><ol class="breadcrumb">' +
                        '<li class="breadcrumb-item"><a href="index.html">Home</a></li>' +
                        '<li class="breadcrumb-item"><a href="' + listingUrl + '">' + listingLabel + '</a></li>' +
                        '<li class="breadcrumb-item active" aria-current="page">' + escapeHtml(detail.title) + '</li>' +
                    '</ol></nav>' +
                '</div></div></div></div>' +
            '</div>' +
            '<section class="detail-overview-section">' +
                '<div class="container"><div class="row">' +
                    '<div class="col-lg-4"><aside class="detail-sidebar">' +
                        '<span class="detail-type">' + escapeHtml(detail.type) + '</span>' +
                        '<h2>' + escapeHtml(detail.title) + '</h2>' +
                        '<p>' + escapeHtml(detail.subtitle) + '</p>' +
                        '<div class="detail-sidebar-actions">' +
                            '<a href="contact.html" class="btn-default btn-highlighted">Discuss Your Requirement</a>' +
                            '<a class="detail-back-link" href="' + listingUrl + '"><i class="fa-solid fa-arrow-left"></i> Back to ' + listingLabel + '</a>' +
                        '</div>' +
                    '</aside></div>' +
                    '<div class="col-lg-8"><div class="detail-main">' +
                        '<div class="section-title"><span class="section-sub-title">Overview</span><h2>' + escapeHtml(detail.subtitle) + '</h2></div>' +
                        '<div class="detail-copy">' + list(detail.intro, function (paragraph) { return '<p>' + escapeHtml(paragraph) + '</p>'; }) + '</div>' +
                        '<div class="detail-block"><div class="detail-block-heading"><h2>' + escapeHtml(detail.featureLabel) + '</h2><p>Capabilities can be configured around your operational requirements.</p></div>' +
                            '<div class="detail-feature-grid">' + list(detail.features, function (feature) { return '<div class="detail-feature-item"><i class="fa-solid fa-check-double"></i><span>' + escapeHtml(feature) + '</span></div>'; }) + '</div>' +
                        '</div>' +
                        '<div class="detail-block detail-benefit-panel"><h2>Business Benefits</h2><ul class="detail-benefit-list">' +
                            list(detail.benefits, function (benefit) { return '<li>' + escapeHtml(benefit) + '</li>'; }) +
                        '</ul></div>' +
                        '<div class="detail-block"><div class="detail-block-heading"><h2>Ideal For</h2><p>Designed for organizations that need dependable, scalable technology outcomes.</p></div><div class="detail-audience">' +
                            list(detail.ideal, function (audience) { return '<span>' + escapeHtml(audience) + '</span>'; }) +
                        '</div></div>' +
                        '<div class="detail-cta"><div><h2>Ready to explore ' + escapeHtml(detail.title) + '?</h2><p>Tell us about your objectives and we will map the right implementation path.</p></div><a href="contact.html" class="btn-default">Get In Touch</a></div>' +
                    '</div></div>' +
                '</div></div>' +
            '</section>';
    }

    render();
})();
