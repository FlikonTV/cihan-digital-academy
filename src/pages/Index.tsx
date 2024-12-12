import Hero from "@/components/Hero";
import FeaturedCourses from "@/components/FeaturedCourses";
import DeliveryMethods from "@/components/DeliveryMethods";
import WhyChooseUs from "@/components/WhyChooseUs";
import CorporateTraining from "@/components/CorporateTraining";
import TabsDFramework from "@/components/TabsDFramework";
import InstitutionalPartners from "@/components/InstitutionalPartners";
import CertificationPrograms from "@/components/CertificationPrograms";
import PreAssessmentQuiz from "@/components/quiz/PreAssessmentQuiz";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <div id="certifications">
        <CertificationPrograms />
      </div>
      <div id="courses">
        <FeaturedCourses />
      </div>
      <div id="delivery">
        <DeliveryMethods />
      </div>
      <div id="why-us">
        <WhyChooseUs />
      </div>
      <InstitutionalPartners />
      <TabsDFramework />
      <CorporateTraining />
      <div id="assessment" className="py-20 bg-gradient-to-b from-white to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pre-Assessment Quiz
            </h2>
            <p className="text-gray-600">
              Test your knowledge and get personalized course recommendations
            </p>
          </div>
          <PreAssessmentQuiz />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Index;