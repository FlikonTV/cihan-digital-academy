import Hero from "@/components/Hero";
import FeaturedCourses from "@/components/FeaturedCourses";
import DeliveryMethods from "@/components/DeliveryMethods";
import WhyChooseUs from "@/components/WhyChooseUs";
import CorporateTraining from "@/components/CorporateTraining";
import TabsDFramework from "@/components/TabsDFramework";
import InstitutionalPartners from "@/components/InstitutionalPartners";
import CertificationPrograms from "@/components/CertificationPrograms";
import PreAssessmentQuiz from "@/components/quiz/PreAssessmentQuiz";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <FeaturedCourses />
      <CertificationPrograms />
      <DeliveryMethods />
      <WhyChooseUs />
      <InstitutionalPartners />
      <TabsDFramework />
      <CorporateTraining />
      <PreAssessmentQuiz />
    </main>
  );
};

export default Index;