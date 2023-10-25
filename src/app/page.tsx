import Image from "next/image";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CertificatesSection from "@/components/CertificatesSection";
import SectionCard from "@/components/SectionCard";
import ServicesSection from "@/components/ServicesSection";
import WorkProcessSection from "@/components/WorkProcessSection";
import ReviewsSection from "@/components/ReviewsSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {

    const carouselImages = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        // Add more image URLs as needed
      ];

  return (
    <div>
        
      <HeroSection />
      <AboutSection />
      <CertificatesSection />
      <ServicesSection />
      <WorkProcessSection />
      <ReviewsSection />
      <FooterSection />

    </div>
  );
}
