import Hero from "@/components/Hero";
import FeaturedCourses from "@/components/FeaturedCourses";
import DeliveryMethods from "@/components/DeliveryMethods";
import WhyChooseUs from "@/components/WhyChooseUs";
import CorporateTraining from "@/components/CorporateTraining";
import InstitutionalPartners from "@/components/InstitutionalPartners";
import PreAssessmentQuiz from "@/components/quiz/PreAssessmentQuiz";
import Footer from "@/components/Footer";

const Index = () => {
  return (
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

      {/* Assessment Section with modern design */}
      <div id="assessment" className="relative py-20 bg-gradient-to-b from-white to-muted overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pre-Assessment Quiz
            </h2>
            <p className="text-gray-600">
              Test your knowledge and get personalized course recommendations
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 animate-fade-up">
            <PreAssessmentQuiz />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;