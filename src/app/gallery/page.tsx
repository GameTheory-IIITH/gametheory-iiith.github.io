import dynamic from "next/dynamic";
import Section from "@/components/Section";
const ImageGallery = dynamic(() => import("@/components/ImageGallery"), { ssr: false });

export default function Gallery() {
    return (
        <div className="max-w-[874px] mx-auto">
            <Section title="Gallery">
                <ImageGallery src="/images/gallery" width="100%" />
            </Section>
        </div>
    );
}