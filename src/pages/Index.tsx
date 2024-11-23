import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TabsDFramework from "@/components/TabsDFramework";
import DeliveryMethods from "@/components/DeliveryMethods";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import CorporateTraining from "@/components/CorporateTraining";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TabsDFramework />
      <DeliveryMethods />
      <FeaturedCourses />
      <WhyChooseUs />
      <CorporateTraining />
    </div>
  );
};

export default Index;