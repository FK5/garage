import Image from "next/image";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CertificatesSection from "@/components/CertificatesSection";
import ServicesSection from "@/components/ServicesSection";
import WorkProcessSection from "@/components/WorkProcessSection";
import ReviewsSection from "@/components/ReviewsSection";
import FooterSection from "@/components/FooterSection";
import AppointmentSection from "@/components/AppointmentSection";

export default function Home() {


  return (
    <div>
        
      <HeroSection />
      <AboutSection />
      <CertificatesSection />
      <ServicesSection />
      <WorkProcessSection />
      <AppointmentSection />
      <ReviewsSection />
      <FooterSection />

    </div>
  );
}
