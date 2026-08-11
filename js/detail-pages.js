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
            title: "AssetTrax",
            subtitle: "Utility Asset Maintenance Management System",
            intro: ["AssetTrax manages critical infrastructure and utility assets throughout their lifecycle. GIS-based visualization connects each asset's location with its condition, performance, maintenance history, and operational workflows.", "The platform supports proactive planning, minimizes downtime, extends asset life, and improves service reliability."],
            featureLabel: "Key Features",
            features: ["Centralized Asset Registry", "GIS-Based Asset Visualization", "Preventive & Corrective Maintenance", "Work Order Management", "Inspection Management", "Asset Health Monitoring", "Inventory & Spare Parts", "Mobile Workforce Integration", "Maintenance Scheduling", "AMC & Warranty Tracking", "Performance Dashboards", "Reports & Analytics"],
            benefits: ["Maximize asset performance and lifespan", "Reduce maintenance costs", "Improve workforce productivity", "Minimize service disruptions", "Enable data-driven maintenance planning"],
            ideal: ["Water Utilities", "Electricity", "Gas", "Telecom", "Manufacturing", "Infrastructure", "Smart Cities"]
        },
        "asstrax": {
            type: "Product",
            title: "Asstrax",
            subtitle: "Enterprise Land Asset Management System",
            intro: ["Asstrax provides a centralized platform for land assets, property records, leases, ownership information, surveys, and legal documentation.", "GIS parcel visualization helps organizations manage land banks, monitor encroachments, and maintain a reliable digital property registry."],
            featureLabel: "Key Features",
            features: ["Land Bank Management", "GIS Parcel Mapping", "Ownership Records", "Lease & License Management", "Encroachment Monitoring", "Legal Case Tracking", "Survey & Mutation Records", "Document Repository", "Approval Workflows", "Dashboards & Reports"],
            benefits: ["Improve transparency in land management", "Simplify property administration", "Monitor encroachments effectively", "Reduce legal and operational risks", "Maintain a centralized digital registry"],
            ideal: ["Government", "Utilities", "Industrial Estates", "Infrastructure Companies", "Real Estate Developers"]
        },
        "fieldforce": {
            type: "Product",
            title: "FieldForce Automation",
            subtitle: "Spatially Enabled Field Workforce Management Platform",
            intro: ["FieldForce Automation digitizes distributed field operations with GIS-enabled mobile workflows.", "Teams can assign tasks, track workforces, conduct inspections and surveys, manage complaints, and monitor service delivery in real time—even where offline data capture is required."],
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
            title: "Face Recognition Access Control",
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
            title: "Drone & Survey Services",
            subtitle: "High-Resolution Geospatial Data, Captured Efficiently",
            intro: ["We combine professional UAV platforms, survey control, and geospatial processing to capture accurate information for planning, engineering, monitoring, and inspection.", "Each engagement is designed around the required accuracy, terrain, coverage, outputs, and operating environment."],
            featureLabel: "Service Capabilities",
            features: ["Topographic Survey", "Corridor & Route Survey", "Construction Progress Monitoring", "Mine Survey", "Stockpile Volume Analysis", "Infrastructure Inspection", "Utility Corridor Survey", "Solar & Wind Farm Survey", "Agricultural & Forest Survey", "Disaster Assessment", "Thermal Drone Inspection", "Aerial Photography & Videography", "DGPS & Ground Control", "Total Station Survey", "As-Built & Boundary Survey"],
            benefits: ["Capture large areas faster", "Improve measurement consistency", "Reduce exposure in difficult terrain", "Create repeatable progress evidence", "Deliver GIS and engineering-ready outputs"],
            ideal: ["Infrastructure", "Mining", "Utilities", "Renewable Energy", "Construction", "Agriculture", "Government"]
        },
        "remote-sensing": {
            type: "Service",
            title: "Remote Sensing & Satellite Analytics",
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

    function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, function (character) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[character];
        });
    }

    function list(items, renderer) {
        return items.map(renderer).join("");
    }

    function render() {
        var mount = document.getElementById("detail-page");
        if (!mount) return;

        var id = mount.getAttribute("data-detail-id");
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
