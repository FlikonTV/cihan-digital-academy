import Hero from "@/components/Hero";
import FeaturedCourses from "@/components/FeaturedCourses";
import DeliveryMethods from "@/components/DeliveryMethods";
import WhyChooseUs from "@/components/WhyChooseUs";
import CorporateTraining from "@/components/CorporateTraining";
import InstitutionalPartners from "@/components/InstitutionalPartners";
import Footer from "@/components/Footer";
import MenuSection from "@/components/MenuSection";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center opacity-[0.03] animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/95 to-background" />
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          </div>
          <Hero />
        </section>

        {/* Featured Courses Section */}
        <section className="relative bg-gradient-to-b from-white via-muted/30 to-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center opacity-[0.02]" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
          </div>
          <div id="courses">
            <FeaturedCourses />
          </div>
        </section>

        {/* Menu Section */}
        <section className="relative py-16">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center opacity-[0.02]" />
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          </div>
          <MenuSection />
        </section>

        {/* Delivery Methods Section */}
        <section id="delivery" className="relative">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.02]" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent" />
          </div>
          <DeliveryMethods />
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="relative">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center opacity-[0.02]" />
            <div className="absolute inset-0 bg-gradient-to-b from-white to-muted/30" />
          </div>
          <WhyChooseUs />
        </section>

        {/* Partners Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center opacity-[0.02]" />
            <div className="absolute inset-0 bg-gradient-to-br from-white to-muted/30" />
          </div>
          <InstitutionalPartners />
        </section>

        {/* Corporate Training Section */}
        <section id="corporate" className="relative">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1458668383970-8ddd3927deed?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.02]" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
          </div>
          <CorporateTraining />
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default Index;