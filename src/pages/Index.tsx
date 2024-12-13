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
        {/* Hero Section */}
        <Hero />

        {/* Featured Courses Section with gradient background */}
        <div className="relative bg-gradient-to-b from-white via-muted/30 to-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          <div id="courses" className="relative">
            <FeaturedCourses />
          </div>
        </div>

        {/* Menu Section */}
        <MenuSection />

        {/* Delivery Methods with decorative elements */}
        <div id="delivery" className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl -z-10" />
          <DeliveryMethods />
        </div>

        {/* Why Choose Us Section */}
        <div id="why-us" className="relative">
          <WhyChooseUs />
        </div>

        {/* Partners Section with subtle animation */}
        <div className="relative overflow-hidden bg-gradient-to-b from-white to-muted/30">
          <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
          <InstitutionalPartners />
        </div>

        {/* Corporate Training Section */}
        <div className="relative bg-white">
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary/5 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-accent/5 to-transparent" />
          <div id="corporate" className="relative">
            <CorporateTraining />
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default Index;