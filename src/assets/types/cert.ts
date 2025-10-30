export interface UnitKompetensi {
    kode: string;
    judul: string;
    priority: number;
    kategori: string;
    deskripsi: string;
    kuk: string[];
    teknologi: string[];
}

export interface SertifikasiData {
    namaSkema: string;
    kodeSkema: string;
    jenisSkema: string;
    lsp: string;
    lisensiLSP: string;
    rujukanSKKNI: string;
    levelKKNI: string;
    masaBerlaku: string;
    biayaEstimasi: string;
    unitKompetensi: UnitKompetensi[];
    metodePenilaian: string[];
    persyaratan: string[];
}