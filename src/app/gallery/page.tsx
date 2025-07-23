import { loadYamlContent } from "@/lib/yaml-loader";
import { GalleryData } from "@/types/content";
import Section from "@/components/Section";
import ClientGallery from "./ClientGallery";

export default function Gallery() {
    const galleryData = loadYamlContent('gallery.yaml') as GalleryData;

    return (
        <div className="max-w-[874px] mx-auto">
            <Section title={galleryData.title}>
                <ClientGallery 
                    images={galleryData.images}
                    initialLoad={10}
                    loadMoreCount={10}
                />
            </Section>
        </div>
    );
}