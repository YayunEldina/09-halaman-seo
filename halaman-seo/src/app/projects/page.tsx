import type { Metadata } from "next";
import Image, { StaticImageData } from "next/image";
import image1 from "../../../public/images/project1.png";
import image2 from "../../../public/images/project2.png";
import { defaultMetadata } from "@/utils/metadata";

export const metadata: Metadata = {
    title: 'Proyek',
    description: 'Halaman tentang proyek saya.',
    openGraph: {
        images: "https://example.com/default-image.jpg",
        url: "https://example.com",
    }
}

type ProjectItemProps = {
    name: string;
    url: string;
    urlDisplay: string;
    imageSrc: StaticImageData;
};

function ProjectItem({ name, url, urlDisplay, imageSrc }: ProjectItemProps) {
    return (
        <li>
            <a href={url} className="block p-4 rounded-lg shadow-lg bg-white transition hover:shadow-xl">
                <Image className="w-full rounded-md" src={imageSrc} alt={name} />
                <div className="mt-4">
                    <h2 className="text-xl font-semibold text-zinc-800">{name}</h2>
                    <span className="mt-2 inline-block text-blue-500 font-medium">{urlDisplay} →</span>
                </div>
            </a>
        </li>
    );
}

export default function Projects({ metadata }: any) {
    return (
        <div className="mt-16 px-8">
            <header>
                <h1 className="font-bold text-4xl text-zinc-800">Proyek Saya</h1>
                <p className="text-base mt-6 text-zinc-600">Berikut adalah beberapa proyek yang telah saya kerjakan.</p>
            </header>

            <div className="mt-16">
                <h2 className="text-2xl text-zinc-800">Aplikasi</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mt-8">
                    <ProjectItem
                        name="Aplikasi 1"
                        url="https://example.com"
                        urlDisplay="App Store"
                        imageSrc={image1}
                    />
                    <ProjectItem
                        name="Aplikasi 2"
                        url="https://example.com"
                        urlDisplay="Google Play"
                        imageSrc={image2}
                    />
                </ul>
            </div>
        </div>
    );
}
