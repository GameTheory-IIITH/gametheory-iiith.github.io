import dynamic from "next/dynamic";
import Section from "@/components/Section";
import { loadYamlContent } from "@/lib/yaml-loader";
import { GalleryData } from "@/types/content";
const ImageGallery = dynamic(() => import("@/components/ImageGallery"), { ssr: false });

export default function Gallery() {
    const galleryData = loadYamlContent('gallery.yaml') as GalleryData;

    return (
        <div className="max-w-[874px] mx-auto">
            <Section title={galleryData.title}>
                <ImageGallery images={galleryData.images} width="100%" />
            </Section>
        </div>
    );
}