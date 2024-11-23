import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TabsDFramework from "@/components/TabsDFramework";
import DeliveryMethods from "@/components/DeliveryMethods";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import CorporateTraining from "@/components/CorporateTraining";
import Footer from "@/components/Footer";  // Add this import

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <TabsDFramework />
        <DeliveryMethods />
        <FeaturedCourses />
        <WhyChooseUs />
        <CorporateTraining />
      </div>
      <Footer />
    </div>
  );
};

export default Index;