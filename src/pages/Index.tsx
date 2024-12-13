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
      <main className="min-h-screen bg-background overflow-hidden">
        {/* Enhanced Hero Section with Dynamic Background */}
        <div className="relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.03]" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background/95 to-background" />
          <Hero />
        </div>

        {/* Featured Courses Section with Enhanced Visual Elements */}
        <div className="relative bg-gradient-to-b from-white via-muted/30 to-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
          <div id="courses" className="relative">
            <FeaturedCourses />
          </div>
        </div>

        {/* Menu Section with Decorative Elements */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center opacity-[0.02]" />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
          <MenuSection />
        </div>

        {/* Delivery Methods with Enhanced Visual Design */}
        <div id="delivery" className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl -z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.02]" />
          <DeliveryMethods />
        </div>

        {/* Why Choose Us Section with Visual Enhancement */}
        <div id="why-us" className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white to-muted/30" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.02]" />
          <WhyChooseUs />
        </div>

        {/* Partners Section with Enhanced Design */}
        <div className="relative overflow-hidden bg-gradient-to-b from-white to-muted/30">
          <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center opacity-[0.02]" />
          <InstitutionalPartners />
        </div>

        {/* Corporate Training Section with Visual Elements */}
        <div className="relative bg-white">
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary/5 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-accent/5 to-transparent" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1458668383970-8ddd3927deed?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.02]" />
          <div id="corporate" className="relative">
            <CorporateTraining />
          </div>
        </div>

        {/* Enhanced Footer */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Index;