import { Link } from "react-router-dom";
import { BookOpen, Award, CheckSquare, ArrowRight, Globe, BookCheck, Laptop } from "lucide-react";
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
      {/* Enhanced Background with Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background">
        <div className="absolute inset-0 bg-[url('/neural-network-bg.svg')] opacity-10 bg-repeat animate-pulse" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>
      
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1/2 h-1/2 bg-gradient-to-r from-primary/20 via-accent/10 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-1/2 h-1/2 bg-gradient-to-l from-secondary/20 via-primary/10 to-transparent rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Content with Enhanced Typography */}
          <div className="animate-fade-up space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent font-display">
              Empower Your Future with AI and Digital Excellence
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-light">
              Advance your career with globally recognized certifications. Partnered with International University of Information Management (IUIM) and Institute of Information Management (IIM), our programs deliver innovation, expertise, and real-world impact in AI and Digital Technology.
            </p>

            {/* Enhanced Partner Logos with Better Visual Balance */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
              {['Cihan Digital Academy', 'International University of Information Management (IUIM)', 'Institute of Information Management (IIM)'].map((partner, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-glow border border-white/10 hover:border-primary/20 transition-all duration-300 group"
                >
                  <p className="font-semibold text-primary group-hover:text-secondary transition-colors duration-300">{partner}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Action Buttons with Better Visual Hierarchy */}
          <div className="grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "200ms" }}>
            {/* Pre-Assessment Button with Enhanced Interaction */}
            <button
              onClick={() => setShowQuiz(true)}
              className="group relative overflow-hidden bg-white hover:bg-primary/5 border border-primary/20 rounded-xl p-6 transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <CheckSquare className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900">Pre-Assessment</h3>
                <p className="text-sm text-gray-600">Discover Your Path</p>
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>

            {/* Explore Programs Button */}
            <Link
              to="/project-framework"
              className="group relative overflow-hidden bg-white hover:bg-primary/5 border border-primary/20 rounded-xl p-6 transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900">Explore Programs</h3>
                <p className="text-sm text-gray-600">View Courses</p>
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>

            {/* Join Next Cohort Button */}
            <Link
              to="#courses"
              className="group relative overflow-hidden bg-white hover:bg-primary/5 border border-primary/20 rounded-xl p-6 transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900">Join Next Cohort</h3>
                <p className="text-sm text-gray-600">Start Learning</p>
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          </div>

          {/* Enhanced Feature Highlights with Better Visual Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 animate-fade-up" style={{ animationDelay: "400ms" }}>
            {[
              { icon: Globe, title: "Global Recognition", desc: "Internationally Accredited" },
              { icon: BookCheck, title: "Industry-Relevant", desc: "Updated Curriculum" },
              { icon: Laptop, title: "Hands-on Learning", desc: "Practical Experience" }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-primary/20 transition-all duration-300 group hover:shadow-glow"
              >
                <feature.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;