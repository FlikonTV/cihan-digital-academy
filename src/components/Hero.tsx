import { Link } from "react-router-dom";
import { BookOpen, Award, CheckSquare, ArrowRight, Building2, GraduationCap } from "lucide-react";
import PreAssessmentQuiz from "./quiz/PreAssessmentQuiz";
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
    <div className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent/5">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Main heading section */}
          <div className="animate-fade-up space-y-6">
            <div className="inline-block animate-scale-in">
              <h1 className="text-2xl font-semibold text-primary mb-2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full border border-primary/20 shadow-glow">
                Cihan Digital Academy
              </h1>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Advanced Professional Certification Programs in{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 relative inline-block">
                Artificial Intelligence
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-600 opacity-30 rounded-full" />
              </span>{" "}
              and{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent relative inline-block">
                Digital Communications
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent opacity-30 rounded-full" />
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-up backdrop-blur-sm bg-white/50 p-4 rounded-xl">
              Pioneering Digital Transformation through comprehensive certification tracks designed for the modern professional
            </p>
          </div>

          {/* Action buttons with glass morphism effect */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto animate-fade-up">
            {/* Pre-Assessment Quiz Button */}
            <button
              onClick={() => setShowQuiz(true)}
              className="group relative bg-white/80 backdrop-blur-sm hover:bg-primary/5 border border-primary/20 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <CheckSquare className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900">Pre-Assessment</h3>
                <p className="text-sm text-gray-600">Test your knowledge</p>
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>

            {/* Certification Courses Button */}
            <Link
              to="/project-framework"
              className="group relative bg-white/80 backdrop-blur-sm hover:bg-primary/5 border border-primary/20 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900">Certifications</h3>
                <p className="text-sm text-gray-600">View all programs</p>
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>

            {/* Explore Courses Button */}
            <a
              href="#courses"
              className="group relative bg-white/80 backdrop-blur-sm hover:bg-primary/5 border border-primary/20 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900">Explore Courses</h3>
                <p className="text-sm text-gray-600">Browse our catalog</p>
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>

            {/* Corporate Training Button */}
            <a
              href="#corporate"
              className="group relative bg-white/80 backdrop-blur-sm hover:bg-primary/5 border border-primary/20 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900">Corporate Training</h3>
                <p className="text-sm text-gray-600">Custom solutions</p>
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>
          </div>

          {/* Institutional Partners Section with glass morphism effect */}
          <div className="mt-16 pt-8 border-t border-gray-100/50 animate-fade-up">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Our Institutional Partners</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Cihan Digital Academy */}
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">Cihan Digital Academy</span>
                </div>
              </div>

              {/* IUIM */}
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">International University of Information Management</span>
                </div>
              </div>

              {/* IIM */}
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Award className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">Institute of Information Management Africa</span>
                </div>
              </div>
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