import { Section } from "@/components/Section";
import { ImageGallery } from "@/components/ImageGallery";

export default function Gallery() {
    return (
        <div className="max-w-[874px] mx-auto">
            <Section title="Gallery">
                <ImageGallery src="/images/gallery" width="100%" />
            </Section>
        </div>
    );
}