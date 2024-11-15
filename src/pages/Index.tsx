import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DeliveryMethods from "@/components/DeliveryMethods";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import CorporateTraining from "@/components/CorporateTraining";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <DeliveryMethods />
      <FeaturedCourses />
      <WhyChooseUs />
      <CorporateTraining />
    </div>
  );
};

export default Index;