import type { Job } from "../types/job";

/**
 * Get unique values from job data
 */
export function getUniqueLocations(): string[] {
    return [...new Set(jobsData.map(job => job.location))];
}

export function getUniqueCompanies(): string[] {
    return [...new Set(jobsData.map(job => job.company))];
}

/**
 * Filter jobs by criteria
 */
export function filterJobs(filters: {
    location?: string;
    experience?: string;
    status?: string;
}): Job[] {
    return jobsData.filter(job => {
        if (filters.location && job.location !== filters.location) return false;
        if (filters.status && job.status !== filters.status) return false;
        if (filters.experience && !job.experience.includes(filters.experience)) return false;
        return true;
    });
}

export const jobsData: Job[] = [
    {
        id: 1,
        company: "PT. Higo Fitur Indonesia",
        role: "Full Stack Developer",
        status: "Full Time",
        experience: "Junior / Entry-level (1-3 tahun)",
        salary: "Rp 6.500.000 – Rp 8.000.000 / bulan",
        hardSkills: [
            "JavaScript (ES6+)",
            "Node.js",
            "React.js",
            "SQL & Database Design",
            "MVC Pattern",
            "Object-Oriented Programming",
            "TDD (Test Driven Development)",
            "Unit & Integration Testing",
            "Responsive Web Development",
            "Build & Test Automation"
        ],
        softSkills: [
            "Kemampuan komunikasi dan kolaborasi tim",
            "Problem solving dan berpikir analitis",
            "Kedisiplinan dan tanggung jawab",
            "Kreativitas dan inisiatif tinggi",
            "Kemampuan berbagi & presentasi teknis"
        ],
        education: "Sarjana Ilmu Komputer / Teknologi Informasi (S1)",
        certification: "-",
        location: "Jakarta Barat, Jakarta Raya",
        source: "JobStreet",
        logoUrl: "higo-logo.png",
        qrUrl: "higo-qr.png",
        siteUrl: "https://id.jobstreet.com/id/job/87798417?ref=search-standalone&type=standard&origin=showNewTab#sol=5177001fe9ff2943bc883a7fbfe3454566e4fd2e"
    },
    {
        id: 2,
        company: "Semaphore Consulting (Prestia product team)",
        role: "Senior Full Stack PHP Developer",
        status: "Full Time",
        experience: "Senior (3+ tahun)",
        salary: "IDR 16.000.000 - 24.000.000 / bulan",
        hardSkills: [
            "Bahasa Pemrograman: PHP, JavaScript",
            "Framework: Laravel, Slim",
            "Database: MySQL, PostgreSQL",
            "Tools: XDebug, REST API, CI/CD, Azure",
            "Arsitektur: Query Optimization, Scalable Architecture"
        ],
        softSkills: [
            "Kemampuan troubleshooting dan debugging",
            "Kolaborasi lintas tim (Product, QA, DevOps)",
            "Kepemimpinan dan mentoring developer junior",
            "Komunikasi dalam bahasa Inggris secara lisan dan tulisan"
        ],
        education: "Tidak Disebutkan",
        certification: "-",
        location: "Jakarta Selatan, Jakarta Raya",
        source: "JobStreet",
        logoUrl: "prestia-logo.png",
        qrUrl: "prestia-qr.png",
        siteUrl: "https://id.jobstreet.com/id/job/87698780?ref=search-standalone&type=standard&origin=showNewTab#sol=9c20b699b694526d4006bd6ad8857a6cc30f1966"
    },
    {
        id: 3,
        company: "PT. Cyberindo Mega Persada (CBN Cloud)",
        role: "Full Stack Developer",
        status: "Full Time",
        experience: "Junior / Entry-level (1-3 tahun)",
        salary: "IDR 8.000.000 - 9.000.000 / bulan",
        hardSkills: [
            "Frontend: ReactJS, HTML5, CSS3, JavaScript (ES6+)",
            "Backend: Node.js, Express.js",
            "Database: PostgreSQL (desain skema & optimasi query)",
            "API: RESTful API",
            "Tools: Git, Unit & Integration Testing, CI/CD (AWS)"
        ],
        softSkills: [
            "Komunikasi dalam Bahasa Indonesia & Inggris",
            "Kemampuan analitis dan pemecahan masalah",
            "Inisiatif tinggi dan mandiri",
            "Semangat belajar teknologi baru"
        ],
        education: "Tidak Disebutkan",
        certification: "-",
        location: "Jakarta Selatan, Jakarta Raya",
        source: "JobStreet",
        logoUrl: "cbn-logo.jpg",
        qrUrl: "cbn-qr.png",
        siteUrl: "https://id.jobstreet.com/id/job/87581837?ref=search-standalone&type=standard&origin=showNewTab#sol=4d69910399b267fc7acc05bb464e89ee74d2fe01"
    },
    {
        id: 4,
        company: "PT. Japfa Comfeed Indonesia, Tbk",
        role: "Full Stack Developer",
        status: "Full Time",
        experience: "Intern / Fresh Graduate (0-1 tahun)",
        salary: "Tidak disebutkan",
        hardSkills: [
            "Node.js, Vue.js, SQL",
            "Flutter / Android (Java/Kotlin)",
            "RESTful API",
            "Database design & schema",
            "Git version control",
            "Agile methodologies"
        ],
        softSkills: [
            "Problem solving & analytical thinking",
            "Kreativitas dan inisiatif tinggi",
            "Kerjasama tim",
            "Komunikasi yang baik",
            "Attention to detail"
        ],
        education: "Sarjana Ilmu Komputer (S1) / Teknologi Informasi / Bidang terkait",
        certification: "Sertifikasi Web atau Mobile Development (JavaScript, Flutter, Android, SQL) menjadi nilai tambah",
        location: "Surabaya, Jawa Timur",
        source: "JobStreet",
        logoUrl: "japfa-logo.jpg",
        qrUrl: "japfa-qr.png",
        siteUrl: "https://id.jobstreet.com/id/job/87994629?ref=search-standalone&type=standard&origin=showNewTab#sol=c231504a1fa80cf87651b9e52493554c56aba8a7"
    },
    {
        id: 5,
        company: "Jogja Tama",
        role: "Full Stack Developer",
        status: "Part Time",
        experience: "Junior / Entry-level (1-3 tahun)",
        salary: "IDR 2.800.000 - 3.000.000 / bulan",
        hardSkills: [
            "Node.js",
            "PHP",
            "Laravel",
            "JavaScript",
            "React.js"
        ],
        softSkills: [
            "Kemampuan analitis & pemecahan masalah",
            "Komunikasi yang baik",
            "Kerjasama tim",
            "Disiplin & tanggung jawab tinggi"
        ],
        education: "Sarjana (S1)",
        certification: "-",
        location: "Sleman, Daerah Istimewa Yogyakarta (DIY)",
        source: "Glints",
        logoUrl: "jogjatama-logo.webp",
        qrUrl: "jogjatama-qr.png",
        siteUrl: "https://glints.com/id/opportunities/jobs/full-stack-developer/4060348c-1020-4a04-81bc-08d8486e57ae?utm_medium=share&utm_campaign=marketplace"
    },
    {
        id: 6,
        company: "PT. Eksa Digital Agency",
        role: "Full Stack Developer",
        status: "Full Time",
        experience: "Junior / Entry-level (1-3 tahun)",
        salary: "IDR 2.500.000 - 4.000.000 / bulan",
        hardSkills: [
            "React.js atau Blade Laravel (UI/UX Development)",
            "Laravel / Express.js (Backend Development)",
            "MySQL (Schema Design, Indexing, Query Tuning)",
            "RESTful API (JWT/OAuth2, Pagination, Rate Limit)",
            "API Integration (Payment, Shipping, Automation)",
            "Unit & Integration Testing",
            "Version Control (GitHub, Branching, PR, Code Review)"
        ],
        softSkills: [
            "Kemampuan analitis & pemecahan masalah",
            "Komunikasi yang baik dan kolaboratif",
            "Kedisiplinan dan tanggung jawab tinggi",
            "Ketelitian dan perhatian pada detail",
            "Kemauan belajar teknologi baru"
        ],
        education: "Diploma I-III / Sarjana Teknik Informatika (S1) akan diutamakan",
        certification: "-",
        location: "Surabaya, Jawa Timur",
        source: "Glints",
        logoUrl: "eksa-logo.webp",
        qrUrl: "eksa-qr.png",
        siteUrl: "https://glints.com/id/opportunities/jobs/full-stack-developer/f6b3f9b2-2897-4248-bdf8-d4700aaf2f9a?utm_medium=share&utm_campaign=marketplace"
    },
    {
        id: 7,
        company: "Goodeva Technology",
        role: "Full Stack Developer",
        status: "Full Time",
        experience: "Junior / Entry-level (1-3 tahun)",
        salary: "IDR 6.000.000 - 7.000.000 / bulan",
        hardSkills: [
            "React.js, JavaScript (ES6+), HTML, CSS",
            "Redux / Context API",
            "Node.js, Nest.js",
            "RESTful API, JWT, OAuth",
            "Database: MongoDB, MySQL, PostgreSQL",
            "SQL & NoSQL (Schema Design, Query Optimization)",
            "Deployment: AWS, Azure, GCP, CI/CD",
            "Version Control (Git)",
            "Performance & Scalability Optimization",
            "Microservices Architecture"
        ],
        softSkills: [
            "Komunikasi yang baik & kolaborasi lintas fungsi",
            "Problem solving & troubleshooting",
            "Adaptabilitas terhadap teknologi baru",
            "Disiplin dalam testing & dokumentasi",
            "Manajemen waktu dan tanggung jawab"
        ],
        education: "SMA/SMK atau Sarjana Ilmu Komputer / Teknik Informatika / Sistem Informasi (S1)",
        certification: "-",
        location: "Jakarta, Jakarta Raya",
        source: "Glints",
        logoUrl: "goodeva-logo.webp",
        qrUrl: "goodeva-qr.png",
        siteUrl: "https://glints.com/id/opportunities/jobs/full-stack-developer/af0da2b4-e24b-426d-abce-b8ac7a04237c?utm_medium=share&utm_campaign=marketplace"
    },
    {
        id: 8,
        company: "Laku6 (Carousell Group)",
        role: "Junior Fullstack Developer",
        status: "Full Time",
        experience: "Junior / Entry-level (1-3 tahun)",
        salary: "Tidak disebutkan",
        hardSkills: [
            "Pemrograman: Go (backend), JavaScript/TypeScript (frontend)",
            "Frontend Framework: ReactJS, Angular, atau VueJS",
            "Backend: RESTful API, HTTP, Database (SQL / NoSQL)",
            "Version Control: Git & GitHub/GitLab",
            "System Design dasar, data structures, dan algoritma",
            "Monitoring & Deployment: CI/CD dan observability",
            "Collaborative Development & Code Review"
        ],
        softSkills: [
            "Kemampuan analitis & pemecahan masalah yang kuat",
            "Komunikasi efektif dan kolaborasi dalam tim lintas fungsi",
            "Berorientasi pada solusi bisnis, bukan sekadar teknis",
            "Kritis terhadap kebutuhan fitur dan mampu memberi alternatif sederhana",
            "Kemauan belajar tinggi & mampu menerima feedback",
            "Kemampuan berbahasa Inggris untuk komunikasi tim"
        ],
        education: "Sarjana Ilmu Komputer / Teknik Informatika (S1)",
        certification: "-",
        location: "Jakarta Barat, Jakarta Raya",
        source: "LinkedIn",
        logoUrl: "laku6-logo.jpg",
        qrUrl: "laku6-qr.png",
        siteUrl: "https://www.linkedin.com/jobs/view/4301645476/"
    },
    {
        id: 9,
        company: "The Flex",
        role: "Full Stack Software Engineer",
        status: "Full Time",
        experience: "Senior (3+ tahun)",
        salary: "Tidak disebutkan",
        hardSkills: [
            "Node.js & React.js",
            "AWS (serverless architecture)",
            "RESTful API & API-first architecture design",
            "FastAPI / Python (automation & data pipelines, optional)",
            "Cloud Infrastructure & CI/CD deployment",
            "Automation scripting & microservices",
            "Integration with third-party APIs (Airbnb, Stripe, Twilio)",
            "Scalable web application design"
        ],
        softSkills: [
            "Pemikiran sistematis & efisiensi dalam pengembangan",
            "Keingintahuan tinggi terhadap automation dan AI-driven systems",
            "Kemampuan kolaborasi lintas tim (product, data, operations)",
            "Berorientasi hasil, cepat belajar, dan iteratif",
            "Ketekunan dan dorongan untuk menjadi top performer",
            "Growth mindset & kemampuan adaptasi tinggi"
        ],
        education: "Sarjana Ilmu Komputer (S1)",
        certification: "-",
        location: "Denpasar, Bali",
        source: "LinkedIn",
        logoUrl: "flex-logo.jpg",
        qrUrl: "flex-qr.png",
        siteUrl: "https://www.linkedin.com/jobs/view/4317006280/"
    },
    {
        id: 10,
        company: "Weshine (for ESGpedia Singapore Pte Ltd)",
        role: "Full Stack Engineer - Product Growth",
        status: "Full Time",
        experience: "Senior (3+ tahun)",
        salary: "Tidak disebutkan",
        hardSkills: [
            "Frontend: React.js",
            "Backend: Node.js, Python",
            "Database: AWS DynamoDB, MariaDB, MongoDB",
            "A/B Testing dan eksperimen produk",
            "Data Analysis & SQL",
            "Data Visualization Tools",
            "Performance Optimization (load time, API speed)",
            "Automation Scripting & Third-party Tool Integration",
            "Cloud: AWS"
        ],
        softSkills: [
            "Berpikir analitis dan berbasis data",
            "Kreatif dan cepat beradaptasi dalam lingkungan dinamis",
            "Kemampuan kolaborasi lintas tim (marketing, produk, dan engineering)",
            "Kepemilikan proyek end-to-end (ownership tinggi)",
            "Orientasi hasil dan kecepatan eksekusi",
            "Komunikasi efektif dan detail-oriented"
        ],
        education: "Sarjana Ilmu Komputer (S1)",
        certification: "-",
        location: "Jakarta, Jakarta Raya",
        source: "LinkedIn",
        logoUrl: "weshine-logo.jpg",
        qrUrl: "weshine-qr.png",
        siteUrl: "https://www.linkedin.com/jobs/view/4303653325/"
    },
]