export interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    type: "Full-time" | "Part-time" | "Contract" | "Internship";
    experience: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
    benefits: string[];
}

export const jobs: Job[] = [
    // {
    //     id: "electrical-automation-engineer",
    //     title: "Electrical & Automation Engineer",
    //     department: "Engineering",
    //     location: "Chennai",
    //     type: "Full-time",
    //     experience: "3-6 years",
    //     description: "The Electrical & Automation Engineer will support System Integrators (SIs) by providing technical assistance, application support, and coordination during design, integration, testing, and commissioning of automation solutions across industrial projects.",
    //     responsibilities: [
    //         "Provide technical support to System Integrators during project execution and integration",
    //         "Assist in electrical design, panel engineering, and automation architecture",
    //         "Support configuration and troubleshooting of PLC, SCADA, HMI, drives, and control systems",
    //         "Review electrical drawings, wiring diagrams, and control schematics",
    //         "Coordinate with internal engineering, sales, and project teams",
    //         "Support factory acceptance tests (FAT) and site acceptance tests (SAT)",
    //         "Assist System Integrators during commissioning and troubleshooting",
    //         "Prepare basic technical documentation, manuals, and support notes",
    //         "Act as a technical point of contact between OEM/products and System Integrators"
    //     ],
    //     requirements: [
    //         "Bachelor's degree / Diploma in Electrical, Electronics, or Automation Engineering",
    //         "Hands-on experience with industrial automation systems",
    //         "Working knowledge of PLCs, SCADA, HMI, VFDs, and industrial control panels",
    //         "Understanding of system integration workflows",
    //         "Ability to troubleshoot electrical and automation issues",
    //         "Good communication skills to interact with System Integrators and internal teams",
    //         "Experience working with System Integrators or OEMs preferred",
    //         "Basic knowledge of industrial communication protocols (Modbus, Profibus, Ethernet/IP, etc.) preferred"
    //     ],
    //     benefits: [
    //         "Competitive salary and performance bonuses",
    //         "Health insurance and wellness programs",
    //         "Professional development opportunities",
    //         "Flexible work arrangements"
    //     ]
    // },
    // {
    //     id: "hr-executive",
    //     title: "HR Executive",
    //     department: "Human Resources",
    //     location: "Pune",
    //     type: "Full-time",
    //     experience: "1-3 years",
    //     description: "Looking for an HR Executive to manage daily HR operations, employee coordination, and office HR activities.",
    //     responsibilities: [
    //         "Manage attendance, leave, and HRMS/Excel data",
    //         "Prepare monthly payroll inputs",
    //         "Handle on-boarding, documentation, and employee file management",
    //         "Coordinate interviews and walk-ins",
    //         "Address employee queries and support HR operations",
    //         "Manage exit formalities and asset handover",
    //         "Coordinate with housekeeping, IT, admin, and vendors",
    //         "Assist in employee engagement activities"
    //     ],
    //     requirements: [
    //         "Graduate (preferably in HR/Business)",
    //         "1–3 years of HR operations experience",
    //         "Good Excel & documentation skills",
    //         "Strong communication and people-handling skills"
    //     ],
    //     benefits: [
    //         "Competitive salary package",
    //         "Health and life insurance",
    //         "Learning and development programs",
    //         "Work-life balance initiatives"
    //     ]
    // },
    {
        id: "bdm-staffing",
        title: "BDM - Staffing & Recruitment",
        department: "Business Development",
        location: "Pune",
        type: "Full-time",
        experience: "5-12 years",
        description: "We are looking for an experienced Business Development Manager (BDM) to establish and grow a new staffing & recruitment division within our company. The ideal candidate will be responsible for building client relationships, setting up staffing operations, and driving revenue in domestic and/or international markets.",
        responsibilities: [
            "Identify and target companies that require staffing solutions (IT, Engineering, BFSI, Healthcare, Manufacturing, etc.)",
            "Develop and implement sales strategies to bring in new clients",
            "Build strong relationships with HR heads, hiring managers, and decision-makers",
            "Develop contract staffing, permanent hiring, and RPO (Recruitment Process Outsourcing) models",
            "Meet and exceed monthly/quarterly sales targets",
            "Negotiate and finalize client contracts and service agreements",
            "Track and analyze revenue performance, ensuring consistent business growth",
            "Conduct market research to identify trends, hiring demands, and competitor activities",
            "Develop go-to-market strategies for staffing services in domestic and/or US markets",
            "Represent the company at HR summits, recruitment events, and networking conferences",
            "Develop partnerships with job portals, HR consultants, and industry leaders"
        ],
        requirements: [
            "5+ years of experience in staffing & recruitment sales",
            "Strong B2B sales, lead generation, and client management skills",
            "Excellent negotiation & closing skills for staffing contracts",
            "Experience in IT, Engineering, BFSI, Manufacturing, or Healthcare staffing",
            "Familiarity with ATS (Applicant Tracking Systems) and recruitment tools",
            "Ability to build and scale a new staffing business from scratch"
        ],
        benefits: [
            "Attractive base salary plus commission",
            "Health insurance and retirement benefits",
            "Career advancement opportunities",
            "Travel allowances"
        ]
    },
    {
        id: "business-development-manager",
        title: "Business Development Manager - Engineering Services",
        department: "Business Development",
        location: "Banglore ",
        type: "Full-time",
        experience: "5-8 years",
        description: "Responsible for driving new business opportunities for mechanical engineering and industrial services, including mechanical design, CAD/CAE, product development, and manufacturing support.",
        responsibilities: [
            "Identify and pursue new business opportunities in the engineering services sector",
            "Develop and manage proposals, pitches, and presentations to secure new business",
            "Manage and develop relationships with existing clients, including providing solutions to meet their engineering needs",
            "Identify and engage prospective clients across industries such as Mechanical, Chemical, and Electrical Engineering",
            "Collaborate with cross-functional teams to ensure project success and client satisfaction",
            "Analyze market trends and competitor activity to identify potential growth areas",
            "Identify opportunities for upselling and cross-selling engineering services",
            "Collaborate with internal teams (design, project management, finance) to ensure client satisfaction"
        ],
        requirements: [
            "Bachelor's degree in Engineering, Business, or a related field",
            "Proven experience in business development and relationship management in the engineering services sector",
            "Strong understanding of engineering services and the construction industry",
            "Experience working with Global Capability Centers (GCCs) and exposure to international markets (USA, Canada, Europe) preferred",
            "Excellent communication, negotiation, and interpersonal skills",
            "Ability to analyze market trends and develop strategic business plans",
            "Experience with CRM software and business development tools"
        ],
        benefits: [
            "Competitive salary with performance incentives",
            "Comprehensive health coverage",
            "Leadership development programs",
            "Flexible working options"
        ]
    },
    // {
    //     id: "direct-sales-executive",
    //     title: "Direct Sales Executive",
    //     department: "Sales",
    //     location: "Banglore",
    //     type: "Full-time",
    //     experience: "0-1 years",
    //     description: "We are looking for an enthusiastic Direct Sales Executive (Fresher) to support business development activities for our engineering services and staffing solutions. The role involves identifying potential clients, initiating contact, and supporting the sales cycle under the guidance of senior team members.",
    //     responsibilities: [
    //         "Identify and research potential clients in engineering, manufacturing, EPC, and IT services sectors",
    //         "Initiate contact through cold emails, calls, and LinkedIn outreach",
    //         "Understand basic client requirements related to engineering services / staffing",
    //         "Support preparation of company profiles, proposals, and presentations",
    //         "Maintain lead data, follow-ups, and updates in CRM / Excel",
    //         "Coordinate with internal teams (HR / Engineering / Delivery) for requirement mapping",
    //         "Assist senior sales members during negotiations and closures",
    //         "Track daily sales activities and prepare simple MIS reports",
    //         "Travel locally as required for client meetings and business development activities"
    //     ],
    //     requirements: [
    //         "B.E / B.Tech / Diploma / BSc (Engineering / Science background preferred)",
    //         "Fresher with engineering or science background",
    //         "Interest in B2B sales and business development",
    //         "Comfortable speaking with professionals and decision-makers",
    //         "Self-motivated, target-oriented mindset with strong learning attitude",
    //         "Good communication skills (verbal & written)",
    //         "Basic understanding or interest in engineering services / IT services",
    //         "Willingness to do cold calling, client outreach, and travel as required",
    //         "Basic computer skills (MS Excel, email, internet research)"
    //     ],
    //     benefits: [
    //         "Competitive stipend / starting salary",
    //         "Mentorship from senior sales professionals",
    //         "Opportunity for growth and full-time career development",
    //         "Travel allowance"
    //     ]
    // },
    {
        id: "draftsman-piping-design",
        title: "Draftsman - Piping Design",
        department: "Design",
        location: "Vadodara",
        type: "Full-time",
        experience: "0-1 years",
        description: "We are looking for a Draftsman / Piping Design Trainee to support our design and engineering team. This role is ideal for candidates looking to build expertise in piping layouts, 2D/3D modeling, and technical drawings for industrial and engineering projects.",
        responsibilities: [
            "Assist in creating 2D/3D piping layouts, isometric drawings, and schematics",
            "Support the development of piping and mechanical designs based on project specifications",
            "Work with AutoCAD, SolidWorks, PDMS, SP3D, or similar design software",
            "Review and interpret engineering drawings, P&IDs, and technical documentation",
            "Assist in modifications and revisions as per engineering feedback",
            "Ensure compliance with industry standards and safety regulations",
            "Maintain design records and documentation",
            "Collaborate with engineers and project teams for design reviews",
            "Assist in preparing material take-offs and technical reports"
        ],
        requirements: [
            "BE, Diploma, or ITI in Mechanical Engineering, Civil Engineering, or a related field",
            "Fresher or up to 1 year of experience in Drafting/Piping Design",
            "Basic understanding of piping systems, layouts, and engineering principles",
            "Familiarity with AutoCAD, SolidWorks, PDMS, SP3D, or any relevant CAD software",
            "Strong technical drawing and visualization skills",
            "Ability to interpret engineering drawings and specifications"
        ],
        benefits: [
            "Competitive salary",
            "Health insurance benefits",
            "Skill development training",
            "Career growth opportunities"
        ]
    },
    // {
    //     id: "hr-admin-trainee",
    //     title: "HR Admin Trainee",
    //     department: "Human Resources",
    //     location: "Pune",
    //     type: "Internship",
    //     experience: "0-1 years",
    //     description: "We are seeking an HR Admin Trainee to support the HR and administrative functions of our organization. This role is designed to provide hands-on experience in HR operations, recruitment, employee engagement, and office administration.",
    //     responsibilities: [
    //         "Assist in recruitment (job postings, resume screening, interview coordination)",
    //         "Support the onboarding & induction process for new hires",
    //         "Maintain and update employee records & HR databases",
    //         "Assist in HR policy implementation and documentation",
    //         "Manage attendance & leave records",
    //         "Handle office supplies and vendor coordination",
    //         "Assist in coordinating meetings, HR events, and training sessions",
    //         "Support in organizing employee engagement activities & well-being programs",
    //         "Draft internal HR emails and announcements",
    //         "Address basic employee queries related to HR policies"
    //     ],
    //     requirements: [
    //         "Bachelor's/Master's degree in HR, Business Administration, or a related field",
    //         "Fresher or up to 1 year of experience in HR/Admin",
    //         "Strong organizational & communication skills",
    //         "Proficiency in MS Office (Excel, Word, PowerPoint)",
    //         "Ability to handle multiple tasks efficiently",
    //         "Familiarity with HRMS or ATS tools (preferred, but not mandatory)"
    //     ],
    //     benefits: [
    //         "Competitive stipend",
    //         "Mentorship from senior HR professionals",
    //         "Opportunity for full-time conversion",
    //         "Certificate upon completion"
    //     ]
    // },
    {
        id: "inside-sales-specialist",
        title: "Inside Sales Specialist",
        department: "Sales",
        location: "Pune",
        type: "Full-time",
        experience: "2-5 years",
        description: "We are seeking a dynamic and results-driven Inside Sales Specialist with a background in engineering services sales and proven exposure to international markets. The ideal candidate will be responsible for generating leads, building client relationships, and closing opportunities in global markets through remote communication channels.",
        responsibilities: [
            "Identify and qualify leads in target international markets through email, calls, LinkedIn, and CRM tools",
            "Promote and sell engineering services to prospective clients in industries such as manufacturing, automotive, aerospace, energy, and industrial design",
            "Manage the entire sales cycle from prospecting to closure for assigned territories",
            "Maintain a high level of communication with prospective and existing customers",
            "Collaborate with the technical/pre-sales team to prepare proposals and tailor solutions",
            "Maintain records in the CRM system and prepare regular sales reports",
            "Meet or exceed quarterly and annual sales targets",
            "Stay updated with industry trends, competition, and market developments"
        ],
        requirements: [
            "Bachelor's degree in Engineering or equivalent technical background preferred",
            "2–5 years of experience in inside sales or business development in engineering services",
            "Experience selling to international clients (USA, Europe, Middle East, etc.) is mandatory",
            "Excellent verbal and written communication skills in English",
            "Strong interpersonal, negotiation, and organizational skills",
            "Proficiency in CRM tools (e.g., HubSpot, Salesforce, Zoho)",
            "Self-motivated, with a proactive approach and ability to work independently",
            "Exposure to CAD/CAE/Engineering Design, Product Development, or Manufacturing Services preferred"
        ],
        benefits: [
            "Base salary plus attractive incentives",
            "Health insurance",
            "Sales training and certifications",
            "Fast-track career growth"
        ]
    },
    {
        id: "design-engineer",
        title: "Design Engineer",
        department: "Engineering",
        location: "Vadodara",
        type: "Full-time",
        experience: "2-4 years",
        description: "Validate as-built conditions against engineering plans (P&IDs), identify parts from bubble view, read P&IDs and Process Data Sheets, and support oil and gas industry projects using AVEVA and related tools.",
        responsibilities: [
            "Validate as-built condition against engineering plans (P&IDs)",
            "Utilize Plant 3D software to create detailed 3D models, P&IDs, and isometric drawings for industrial projects including oil and gas, petrochemical, and power plants",
            "Develop accurate P&IDs depicting process flow, equipment, instrumentation, control systems, and piping connections",
            "Generate isometric drawings from 3D models accurately representing piping components, fittings, valves, supports, and connections",
            "Ensure consistency and compatibility between 3D models, P&IDs, and isometric drawings throughout the project lifecycle",
            "Maintain organized project documentation and revision control for all P&IDs, isometric drawings, and related design deliverables",
            "Ensure compliance with governing codes and industry standards (API, ASME, ISO)"
        ],
        requirements: [
            "B.E / Diploma in Mechanical Engineering or equivalent",
            "2–4 years of experience in engineering design",
            "Strong experience in engineering, maintenance, and operation of static mechanical equipment and piping in oil & gas processing facilities",
            "Proficiency in AVEVA, Universal Plant Viewer (UPV), Blue Beam REVU, AutoCAD",
            "Knowledge of P&ID, Piping Isometrics, Isometric Drawings, 3D Modeling, and Piping Layout",
            "Proven understanding of governing codes and industry standards (API, ASME, ISO)"
        ],
        benefits: [
            "Competitive compensation package",
            "Health and wellness benefits",
            "Professional certification support",
            "Innovative work environment"
        ]
    },
    // {
    //     id: "tech-support-specialist",
    //     title: "Tech Support Specialist",
    //     department: "Technology",
    //     location: "Vadodara",
    //     type: "Full-time",
    //     experience: "3+ years",
    //     description: "We are seeking a knowledgeable and detail-oriented Senior Tech Support Specialist to manage and resolve technical issues while ensuring compliance with ISO 27001 standards and data security protocols. The ideal candidate should have expertise in server management, data security, and problem-solving.",
    //     responsibilities: [
    //         "Provide advanced technical support for hardware, software, servers, and network systems",
    //         "Diagnose and resolve complex technical issues promptly while documenting solutions",
    //         "Manage user requests through ticketing systems and ensure timely resolution",
    //         "Maintain, configure, and monitor Windows/Linux servers, including backups and security updates",
    //         "Manage Active Directory, DNS, DHCP, and virtualization platforms (VMware/Hyper-V)",
    //         "Implement and maintain processes in alignment with ISO 27001 standards for information security",
    //         "Monitor and enforce data protection policies, ensuring secure handling of sensitive information",
    //         "Assist with internal audits and ensure compliance with industry best practices",
    //         "Perform regular maintenance of firewalls, VPN, and cloud services",
    //         "Identify root causes of recurring issues and propose permanent solutions",
    //         "Document processes, best practices, and technical resolutions"
    //     ],
    //     requirements: [
    //         "Bachelor's degree in IT, Computer Science, or related field",
    //         "Minimum 3+ years in IT support, server management, and data security",
    //         "Strong understanding of Windows/Linux servers, Active Directory, and virtualization",
    //         "Familiarity with ISO 27001 guidelines and their implementation in an IT environment",
    //         "Experience with data protection protocols and network security",
    //         "Proven ability to analyze and resolve complex technical challenges",
    //         "Strong written and verbal skills to collaborate across teams and document procedures",
    //         "ISO 27001 Lead Implementer/Auditor, Microsoft Certified Azure Administrator, or CompTIA Security+ preferred"
    //     ],
    //     benefits: [
    //         "Competitive salary",
    //         "Health insurance",
    //         "IT certification sponsorship",
    //         "Shift allowances"
    //     ]
    // },
    {
        id: "mechanical-engineer",
        title: "Mechanical Engineer",
        department: "Engineering",
        location: "Vadodara",
        type: "Full-time",
        experience: "3-5 years",
        description: "Join our engineering team to work on mechanical engineering projects in the engineering services industry. You will work on design processes including legacy conversion, new product development, and value engineering.",
        responsibilities: [
            "Work on legacy conversion, ECN/ECR (Engineering Change Notice/Request), NPD (New Product Development), and VAVE (Value Analysis/Value Engineering)",
            "Create detailed mechanical designs using CAD tools",
            "Collaborate with global clients on engineering deliverables",
            "Prepare and manage engineering documentation per design best practices",
            "Work with PLM tools to manage product lifecycle",
            "Ensure designs meet quality, safety, and documentation standards"
        ],
        requirements: [
            "B.E / B.Tech in Mechanical Engineering",
            "3–5 years of experience in the engineering services industry",
            "Proficiency in CAD tools: Solid Edge, SolidWorks, AutoCAD",
            "Good understanding of engineering processes including legacy conversion, ECN/ECR, NPD, and VAVE",
            "Working knowledge of PLM tools such as Teamcenter and Windchill",
            "Strong communication skills",
            "Experience working with global clients preferred",
            "Exposure to documentation standards and design best practices preferred"
        ],
        benefits: [
            "Competitive salary package",
            "Medical and life insurance",
            "Continuous learning opportunities",
            "Collaborative work culture"
        ]
    },
    {
        id: "plant-engineering-manager",
        title: "Plant Engineering Manager",
        department: "Engineering & Design Services",
        location: "Vadodara",
        type: "Full-time",
        experience: "10-20 years",
        description: "We are seeking a seasoned Plant Engineering Manager to lead and coordinate engineering activities across multiple industrial projects for our clients in Oil & Gas, Power, Chemicals, and EPC sectors. The ideal candidate will have deep expertise in plant design across multiple engineering disciplines.",
        responsibilities: [
            "Lead the engineering team across multiple projects for clients in Oil & Gas, Power (CCPP, HRSG, OCPP, TPS), FGD, CoGen, and Chemicals",
            "Manage multidisciplinary teams (Mechanical, Electrical, Civil, Instrumentation) to deliver end-to-end engineering deliverables",
            "Ensure all engineering outputs meet applicable international codes and standards (IS, ASME B31, API, ASTM, NFPA, BS, IBR, HEI, HIS)",
            "Plan and manage engineering schedules, resource allocation, and technical deliverables",
            "Support the Project Manager in preparing proposals, technical documentation, and progress reports",
            "Participate in design reviews, HAZOP studies, and client-facing technical meetings",
            "Serve as a technical point-of-contact between clients and internal teams",
            "Coordinate with EPC contractors such as L&T, GE, Samsung C&T, Alstom, AL Ghanim, and X-Cell Energy",
            "Ensure all design documents and drawings (P&IDs, layouts, BOMs) are reviewed and approved per project requirements",
            "Enforce internal QA/QC standards and engineering best practices",
            "Contribute to value engineering, risk assessment, and feasibility analysis"
        ],
        requirements: [
            "Bachelor's Degree in Mechanical / Electrical / Chemical / Industrial Engineering (Master's preferred)",
            "10–20 years of experience in plant/project engineering, including at least 3–5 years in a leadership or client-facing role",
            "Strong knowledge of plant engineering concepts across mechanical, piping, and electrical disciplines",
            "Sound familiarity with applicable codes: ASME, IS, API, ASTM, IBR, NFPA, BS",
            "Exposure to HAZOP, process safety, and design optimization practices",
            "Experience with EPC contractor interface and multidisciplinary project delivery",
            "Excellent leadership, team management, and client engagement abilities",
            "Proactive problem-solving and ability to multitask across projects and teams"
        ],
        benefits: [
            "Executive-level compensation",
            "Comprehensive health coverage for family",
            "Performance bonuses",
            "Leadership development programs"
        ]
    },
    // {
    //     id: "robotics-engineer",
    //     title: "Robotics Engineer",
    //     department: "Engineering",
    //     location: "Chennai",
    //     type: "Full-time",
    //     experience: "3-7 years",
    //     description: "The Robotics Engineer will be responsible for designing, programming, and supporting pick-and-place robotic solutions integrated with process industry conveyor systems. The role focuses on automation solutions used in manufacturing, packaging, and material handling environments.",
    //     responsibilities: [
    //         "Design and implement pick-and-place robotic applications for conveyor-based systems",
    //         "Program, configure, and troubleshoot industrial robots used in process industries",
    //         "Integrate robots with conveyors, sensors, vision systems, and PLCs",
    //         "Support robot commissioning, testing, and on-site deployment",
    //         "Coordinate with system integrators, electrical, and automation teams",
    //         "Optimize robot cycle time, accuracy, and reliability",
    //         "Support FAT and SAT activities",
    //         "Prepare and maintain robot programs, layouts, and technical documentation",
    //         "Provide technical support and troubleshooting during production runs"
    //     ],
    //     requirements: [
    //         "Degree / Diploma in Robotics, Mechatronics, Electrical, Electronics, or Automation Engineering",
    //         "3–7 years of hands-on experience with pick-and-place robotic applications",
    //         "Experience working with conveyor systems in process or manufacturing industries",
    //         "Knowledge of PLC-robot communication and I/O interfacing",
    //         "Understanding of industrial safety standards and interlocks",
    //         "Experience with industrial robots such as ABB, FANUC, KUKA, YASKAWA, or Universal Robots preferred",
    //         "Exposure to vision-guided robotics and knowledge of end-of-arm tooling (EOAT) preferred"
    //     ],
    //     benefits: [
    //         "Competitive salary",
    //         "Health and wellness benefits",
    //         "Conference and training sponsorship",
    //         "Innovation bonuses"
    //     ]
    // },
    // {
    //     id: "software-engineer",
    //     title: "Software Engineer",
    //     department: "Technology",
    //     location: "Vadodara",
    //     type: "Full-time",
    //     experience: "3+ years",
    //     description: "We're looking for a motivated and versatile Software Engineer to join our fast-paced technology team. Our company develops digital twins and custom web applications to support workflows for oil and gas facilities and beyond. You'll work on both short-term feature rollouts and long-term projects critical to our clients' operations.",
    //     responsibilities: [
    //         "Develop front-end and back-end features for internal and client-facing web applications",
    //         "Collaborate with team members and stakeholders to understand evolving client needs",
    //         "Rapidly prototype solutions and iterate based on user feedback",
    //         "Write clean, maintainable, and well-documented code",
    //         "Troubleshoot issues and deploy fixes across the tech stack",
    //         "Contribute to architecture decisions and best practices"
    //     ],
    //     requirements: [
    //         "Bachelor's degree in Computer Science or related field",
    //         "3+ years of experience in a professional or project-based software development role",
    //         "Proficiency in React and JavaScript/TypeScript",
    //         "Working knowledge of Python, C#, SQL, or bash scripting is a plus",
    //         "Understanding of REST APIs and asynchronous programming",
    //         "Familiarity with Git and modern development workflows",
    //         "Experience working in agile or fast-paced development environments preferred",
    //         "Strong problem-solving skills and a self-starter mentality"
    //     ],
    //     benefits: [
    //         "Competitive salary package",
    //         "Health insurance and wellness benefits",
    //         "Remote work flexibility",
    //         "Learning and development budget"
    //     ]
    // },
    {
        id: "technical-recruiter",
        title: "Technical Recruiter",
        department: "Human Resources",
        location: "Banglore",
        type: "Full-time",
        experience: "2-3 years",
        description: "We are seeking a Technical Recruiter with experience in sourcing and hiring for mechanical, electrical, electronics, or civil domains. The ideal candidate will have strong exposure to identifying, evaluating, and placing candidates in technical roles within engineering-driven industries.",
        responsibilities: [
            "Manage the full recruitment cycle – from understanding requirements to onboarding the candidate",
            "Source, screen, and shortlist candidates through various channels (job portals, networking, referrals, social media)",
            "Conduct technical and competency-based screening for engineering roles",
            "Coordinate with hiring managers to understand job descriptions, required skills, and hiring timelines",
            "Schedule and manage interviews between candidates and internal/external stakeholders",
            "Maintain an active database of engineering professionals for current and future requirements",
            "Ensure smooth onboarding and post-selection follow-up"
        ],
        requirements: [
            "Any Degree (engineering qualification preferred but not mandatory)",
            "2–3 years of experience in engineering role hiring",
            "Strong understanding of engineering job titles, skill sets, and industry requirements",
            "Hands-on experience using job portals (Naukri, LinkedIn, etc.) and Applicant Tracking Systems (ATS)",
            "Excellent communication, negotiation, and interpersonal skills",
            "Ability to work in a fast-paced, target-driven environment",
            "Exposure to EPC, manufacturing, industrial automation, and plant engineering companies preferred"
        ],
        benefits: [
            "Competitive base salary plus incentives",
            "Health insurance benefits",
            "Career growth in talent acquisition",
            "Flexible working arrangements"
        ]
    }
];

export const getDepartments = () => {
    const departments = [...new Set(jobs.map(job => job.department))];
    return departments.sort();
};

export const getLocations = () => {
    const locations = [...new Set(jobs.map(job => job.location))];
    return locations.sort();
};

export const getJobById = (id: string) => {
    return jobs.find(job => job.id === id);
};