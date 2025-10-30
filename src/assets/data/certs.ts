import type { SertifikasiData } from "../types/cert";

/**
 * Get top priority units (most important)
 */
export function getTopUnits(count: number = 3) {
    return certificationData.unitKompetensi
        .sort((a, b) => a.priority - b.priority)
        .slice(0, count);
}

/**
 * Get units by category
 */
export function getUnitsByCategory(category: string) {
    return certificationData.unitKompetensi
        .filter(unit => unit.kategori === category);
}

/**
 * Get all unique categories
 */
export function getUniqueCategories(): string[] {
    return [...new Set(certificationData.unitKompetensi.map(u => u.kategori))];
}

export const certificationData: SertifikasiData = {
    namaSkema: "Pengembang Web Pratama (Junior Web Developer)",
    kodeSkema: "SKM/1565",
    jenisSkema: "Okupasi",
    lsp: "LSP Teknologi Digital",
    lisensiLSP: "Terlisensi BNSP (Badan Nasional Sertifikasi Profesi)",
    rujukanSKKNI: "SKKNI Bidang Pengembangan Piranti Lunak - Kepmenaker No. 281 Tahun 2016",
    levelKKNI: "Level 3-4",
    masaBerlaku: "3 Tahun (dapat diperpanjang)",
    biayaEstimasi: "Rp 1.000.000 - Rp 1.500.000",

    unitKompetensi: [
        {
            kode: "J.620100.005.02",
            judul: "Mengimplementasikan User Interface",
            priority: 1,
            kategori: "Frontend Development",
            deskripsi: "Kemampuan merancang dan mengimplementasikan antarmuka pengguna yang interaktif dan responsif",
            kuk: [
                "Elemen HTML telah dibuat sesuai standar markup dan prinsip semantic HTML",
                "Stylesheet CSS diterapkan dengan best practices (responsive design, mobile-first)",
                "Layout halaman diatur menggunakan teknik modern (Flexbox, CSS Grid)",
                "Komponen UI mempertimbangkan user experience dan accessibility",
                "Interaktivitas dasar ditambahkan menggunakan JavaScript"
            ],
            teknologi: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Bootstrap/Tailwind"]
        },
        {
            kode: "J.620100.010.01",
            judul: "Menerapkan Bahasa Pemrograman",
            priority: 2,
            kategori: "Programming Fundamentals",
            deskripsi: "Kemampuan menulis dan mengeksekusi kode program dengan berbagai tipe data",
            kuk: [
                "Sintaks bahasa pemrograman diterapkan sesuai standar (JavaScript, PHP, Python)",
                "Variabel dan tipe data dideklarasikan dengan tepat",
                "Perintah input/output diimplementasikan untuk interaksi",
                "Manipulasi teks, grafik, dan multimedia sesuai requirement",
                "Error handling diterapkan untuk menangani exception"
            ],
            teknologi: ["JavaScript", "PHP", "Python", "DOM Manipulation", "Canvas API"]
        },
        {
            kode: "J.620100.016.01",
            judul: "Menulis Kode Sesuai Guidelines",
            priority: 1,
            kategori: "Code Quality",
            deskripsi: "Kemampuan menulis kode berkualitas tinggi mengikuti standar industri",
            kuk: [
                "Kode mengikuti style guide dan coding standards (ESLint, Prettier, PSR)",
                "Indentasi dan formatting diterapkan konsisten",
                "Prinsip DRY (Don't Repeat Yourself) diterapkan",
                "Code readability dioptimalkan dengan nama descriptive",
                "Best practices keamanan dasar diterapkan (input validation, XSS prevention)"
            ],
            teknologi: ["Coding Standards", "ESLint", "Code Review", "Security Basics"]
        },
    ],

    metodePenilaian: [
        "Asesmen Portofolio - Review project dan kode yang telah dibuat",
        "Uji Tertulis - Multiple choice dan essay tentang konsep pemrograman web",
        "Uji Praktik - Demonstrasi pembuatan aplikasi web sederhana",
        "Wawancara - Penjelasan tentang decision making dalam coding"
    ],

    persyaratan: [
        "Minimal lulusan SMA/SMK sederajat",
        "Memiliki pengalaman atau pelatihan di bidang web programming",
        "Memahami dasar-dasar HTML, CSS, dan JavaScript",
        "Memiliki portofolio project web (diutamakan)"
    ]
}