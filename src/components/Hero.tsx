import { Link } from "react-router-dom";
import { BookOpen, Award, CheckSquare, ArrowRight, Building2, GraduationCap } from "lucide-react";
import PreAssessmentQuiz from "./quiz/PreAssessmentQuiz";
import HeroBackground from "./HeroBackground";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

const Hero = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Dynamic Background */}
      <HeroBackground />

      <div className="container relative mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Main content section */}
          <div className="text-center space-y-8 relative z-10">
            <div className="inline-block animate-fade-up">
              <h1 className="text-xl md:text-2xl font-semibold text-primary mb-2 bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full border border-primary/20">
                Cihan Digital Academy
              </h1>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Advanced Professional Certification Programs in{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                    Artificial Intelligence
                  </span>
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-400 opacity-30 rounded-full" />
                </span>{" "}
                and{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                    Digital Communications
                  </span>
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent opacity-30 rounded-full" />
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Pioneering Digital Transformation through comprehensive certification tracks designed for the modern professional
              </p>
            </div>

            {/* Action cards with glass morphism */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
              {/* Pre-Assessment Card */}
              <button
                onClick={() => setShowQuiz(true)}
                className="group relative bg-white/5 backdrop-blur-md hover:bg-white/10 border border-white/10 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <CheckSquare className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Pre-Assessment</h3>
                  <p className="text-gray-400">Test your knowledge level</p>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>

              {/* Certification Programs Card */}
              <Link
                to="/project-framework"
                className="group relative bg-white/5 backdrop-blur-md hover:bg-white/10 border border-white/10 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Award className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Certifications</h3>
                  <p className="text-gray-400">Explore our programs</p>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>

              {/* Course Catalog Card */}
              <Link
                to="#courses"
                className="group relative bg-white/5 backdrop-blur-md hover:bg-white/10 border border-white/10 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Course Catalog</h3>
                  <p className="text-gray-400">Browse available courses</p>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </div>

            {/* Features section with enhanced glass morphism */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
              {[
                {
                  icon: <GraduationCap className="w-6 h-6" />,
                  title: "Professional Certification",
                  description: "IIM Africa Accredited"
                },
                {
                  icon: <Building2 className="w-6 h-6" />,
                  title: "Industry-Led Programs",
                  description: "Practical Skills Focus"
                },
                {
                  icon: <Award className="w-6 h-6" />,
                  title: "Global Recognition",
                  description: "International Standards"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{feature.title}</h3>
                      <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Dialog */}
      <Dialog open={showQuiz} onOpenChange={setShowQuiz}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>AI Knowledge Assessment Quiz</DialogTitle>
          </DialogHeader>
          <PreAssessmentQuiz />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Hero;