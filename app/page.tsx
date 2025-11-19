import CTAAndFooter from "@/components/home/CTAAndFooter";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import WhatsAppButton from "@/components/home/WhatsAppBtn";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <Navbar />
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
      {/* CTA and Footer */}
      <CTAAndFooter />
      <WhatsAppButton phoneNumber="15551234567" message="Hi, I want to learn more!" />
    </main>
  );
}
