import dynamic from "next/dynamic";

const Section = dynamic(() => import("@/components/Section"), {
    ssr: false,
});

const ImageGallery = dynamic(() => import("@/components/ImageGallery"), {
    ssr: false,
});

export default function Gallery() {
    return (
        <div className="max-w-[874px] mx-auto">
            <Section title="Gallery">
                <ImageGallery src="/images/gallery" width="100%" />
            </Section>
        </div>
    );
}