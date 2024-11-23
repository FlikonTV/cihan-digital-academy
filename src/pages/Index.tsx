import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TabsDFramework from "@/components/TabsDFramework";
import DeliveryMethods from "@/components/DeliveryMethods";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import CorporateTraining from "@/components/CorporateTraining";
import Footer from "@/components/Footer";
import PreAssessmentQuiz from "@/components/quiz/PreAssessmentQuiz";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Assess Your AI Knowledge
              </h2>
              <p className="text-lg text-gray-600">
                Take our quick assessment to discover your AI proficiency level and get personalized course recommendations.
              </p>
            </div>
            <PreAssessmentQuiz />
          </div>
        </section>
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