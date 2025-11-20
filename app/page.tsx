import CTAAndFooter from "@/components/home/CTAAndFooter";
import CtaSection from "@/components/home/CtaSection";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import WhatsAppButton from "@/components/home/WhatsAppBtn";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="w-full border mx-auto">
      <Navbar />
      <div className="w-full px-4">
        {/* Hero */}
        <Hero />
        {/* Featured Categories */}
        <FeaturedCategories />
        {/* Featured Products */}
        <FeaturedProducts />
        {/* How It Works */}
        <HowItWorks />
        {/* Testimonials */}
        <Testimonials />
        {/* Join Our Community Section */}
        <CtaSection />
      </div>
      {/* CTA and Footer */}
      <CTAAndFooter />
      <WhatsAppButton phoneNumber="15551234567" message="Hi, I want to learn more!" />
    </main>
  );
}
