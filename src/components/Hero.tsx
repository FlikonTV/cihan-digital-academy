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
    <div className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-muted/30 to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1/2 h-1/2 bg-gradient-to-r from-accent/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-1/2 h-1/2 bg-gradient-to-l from-primary/10 to-transparent rounded-full blur-3xl" />
      
      {/* Hero Image - Updated with a more relevant AI/tech image */}
      <div className="absolute inset-0 opacity-15">
        <img
          src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
          alt="Digital Technology Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/90" />
      </div>

      {/* Animated particles overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="container mx-auto px-4 py-12 relative">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Main heading section with enhanced typography */}
          <div className="animate-fade-up space-y-6">
            <div className="inline-block animate-scale-in">
              <h1 className="text-2xl font-semibold text-primary mb-2 bg-primary/5 px-6 py-2 rounded-full border border-primary/20 shadow-glow">
                Cihan Digital Academy
              </h1>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-secondary animate-fade-up" style={{ animationDelay: "100ms" }}>
              Advanced Professional Certification Programs in{" "}
              <span className="text-primary relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-primary/20 after:rounded-full">
                Artificial Intelligence
              </span>{" "}
              and{" "}
              <span className="text-secondary relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-secondary/20 after:rounded-full">
                Digital Communications
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "200ms" }}>
              Pioneering Digital Transformation through comprehensive certification tracks designed for the modern professional
            </p>
          </div>

          {/* Action buttons with enhanced styling */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: "300ms" }}>
            {/* Pre-Assessment Quiz Button */}
            <button
              onClick={() => setShowQuiz(true)}
              className="group relative bg-white hover:bg-primary/5 border border-primary/20 rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
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
              className="group relative bg-white hover:bg-primary/5 border border-primary/20 rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
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
              className="group relative bg-white hover:bg-primary/5 border border-primary/20 rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
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
              className="group relative bg-white hover:bg-primary/5 border border-primary/20 rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900">Corporate Training</h3>
                <p className="text-sm text-gray-600">Custom solutions</p>
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>
          </div>

          {/* Institutional Partners Section with glass morphism effect */}
          <div className="mt-16 pt-8 border-t border-gray-100 animate-fade-up" style={{ animationDelay: "400ms" }}>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Our Institutional Partners</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Cihan Digital Academy */}
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">Cihan Digital Academy</span>
                </div>
              </div>

              {/* IUIM */}
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">International University of Information Management</span>
                </div>
              </div>

              {/* IIM */}
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
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
