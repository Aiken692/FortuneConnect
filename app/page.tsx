import HeroSection from "@/components/Hero/Hero Section";
import NavigationHeader from "@/components/Nav/NavigationHeader";
import FeatureSection from "@/components/Features/FeatureSection";
import TestimonialsSection from "@/components/Testimonials/TestimonialsSection";
import FooterSection from "@/components/Footer/FooterSection";
import Head from "next/head";

export default function Home() {
  return (
    <div>
  
      <Head>
        <title>FortuneConnect - Home</title>
        <meta name="description" content="Connecting businesses with opportunities" />
      </Head>
      
      <NavigationHeader />

      <main>
        <HeroSection />

        <FeatureSection/>

        <TestimonialsSection/>

      </main>

      <FooterSection/>
    
    </div>
  );
}
