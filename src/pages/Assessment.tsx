import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreAssessmentQuiz from "@/components/quiz/PreAssessmentQuiz";

const Assessment = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Knowledge Assessment</h1>
              <p className="text-gray-600">
                Test your AI knowledge with our comprehensive assessment quiz. This will help us recommend the most suitable courses for your skill level.
              </p>
            </div>
            <PreAssessmentQuiz />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Assessment;