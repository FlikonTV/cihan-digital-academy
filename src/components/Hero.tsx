import { Link } from "react-router-dom";
import { BookOpen, Award, CheckSquare, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-muted/30 to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1/2 h-1/2 bg-gradient-to-r from-accent/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-1/2 h-1/2 bg-gradient-to-l from-primary/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Digital Future with{" "}
              <span className="text-primary">AI Excellence</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join Cihan Digital Academy's innovative programs and master the future of technology through our comprehensive AI and digital transformation courses.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: "200ms" }}>
            {/* Pre-Assessment Quiz Button */}
            <Link
              to="#assessment"
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
            </Link>

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
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900">Corporate Training</h3>
                <p className="text-sm text-gray-600">Custom solutions</p>
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;