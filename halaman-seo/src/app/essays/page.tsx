import type { Metadata } from "next";
import { defaultMetadata } from "@/utils/metadata";

export const metadata: Metadata = {
    title: 'Esai',
    description: 'Halaman tentang esai saya.',
    openGraph: {
        images : "https://example.com/default-image.jpg",
        url : "https://example.com",
    }
};

type EssaiItem = {
    title: string;
    description: string;
    url: string;
};

const articles: EssaiItem[] = [
    {
      title: "Rencana Liburan ke Bromo TI-3B",
      description: "Kelas TI-3B merencanakan perjalanan ke Bromo tahun 2025 untuk mempererat kebersamaan dan refreshing setelah UTS.",
      url: "https://example.com"
    },
    {
      title: "Kolaborasi Proyek PBF TI-3B: Belajar Bekerja dalam Tim",
      description: "Pengalaman unik mahasiswa TI-3B dalam mengerjakan Project Based Learning (PBF), dari proses brainstorming hingga presentasi akhir.",
      url: "https://example.com"
    },
    {
      title: "Kehidupan Mahasiswa TI-3B: Antara Deadline dan Nongkrong",
      description: "Mengulas keseharian mahasiswa TI-3B dalam menyeimbangkan tugas kuliah, organisasi, dan waktu istirahat.",
      url: "https://example.com"
    },
    {
      title: "Membangun Aplikasi 'Absensi Kelas TI-3B' dengan Flutter",
      description: "Proyek sederhana untuk memudahkan absensi kelas menggunakan Flutter, sekaligus menjadi sarana belajar teknologi mobile.",
      url: "https://example.com"
    }
  ];
  

export default function Essays( { metadata }: any) {
    return (
        <div className="mt-16 px-8">
            <header>
                <h1 className="font-bold text-4xl text-zinc-800">Esai</h1>
                <p className="text-base mt-6 text-zinc-600">Berikut adalah beberapa esai yang telah saya tulis.</p>
            </header>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.map((article, index) => (
                    <a key={index} href={article.url} className="block p-6 rounded-lg shadow-lg bg-white transition hover:shadow-xl">
                        <h2 className="text-xl font-semibold text-zinc-800">{article.title}</h2>
                        <p className="mt-2 text-zinc-600">{article.description}</p>
                        <span className="mt-4 inline-block text-blue-500 font-medium">Baca selengkapnya →</span>
                    </a>
                ))}
            </div>
        </div>
    );
}