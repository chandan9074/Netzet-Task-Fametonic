import Layout from "@/layouts";
import HeroSection from "@/sections/Home/HeroSection";
import Image from "next/image";

export default function Home() {
    return (
        <Layout.Primary>
            <HeroSection />
        </Layout.Primary>
    );
}
