import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-muted to-white pt-16">
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Future with
            <span className="text-primary"> AI Education</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join Cihan Digital Academy for cutting-edge AI training delivered through flexible learning methods. 
            Master the technologies shaping tomorrow's world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#courses" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-secondary transition-colors duration-200">
              Explore Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#corporate" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
              Corporate Training
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;