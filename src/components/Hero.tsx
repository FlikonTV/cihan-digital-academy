import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-[#F1F0FB] via-white to-[#E5DEFF] pt-28 overflow-hidden">
      {/* Decorative background patterns */}
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-left max-w-2xl animate-fade-up">
            <div className="inline-block px-6 py-2.5 mb-8 rounded-full bg-primary/10 text-primary font-medium text-sm animate-fade-up shadow-md hover:shadow-glow transition-shadow duration-300" style={{ animationDelay: '200ms' }}>
              Welcome to Cihan Digital Academy
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-up" style={{ animationDelay: '400ms' }}>
              Transform Your Future with
              <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> AI Education</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '600ms' }}>
              Join Cihan Digital Academy for cutting-edge AI training delivered through flexible learning methods. 
              Master the technologies shaping tomorrow's world.
            </p>
            {/* Accreditation Badge */}
            <div className="mb-8 p-4 border border-primary/20 rounded-lg bg-white/50 backdrop-blur-sm shadow-md hover:shadow-glow transition-all duration-300 animate-fade-up" style={{ animationDelay: '700ms' }}>
              <p className="text-sm font-medium text-gray-900 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                All Courses are Accredited by the Institute of Information Management, Africa
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '800ms' }}>
              <a 
                href="#courses" 
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white bg-primary hover:bg-secondary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-primary/25"
              >
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#corporate" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-gray-700 bg-white border-2 border-primary/20 hover:border-primary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-primary/25"
              >
                Corporate Training
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block relative animate-fade-up" style={{ animationDelay: '1000ms' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl transform rotate-6 scale-105" />
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                alt="AI Education"
                className="rounded-2xl shadow-2xl object-cover w-full aspect-[4/3] relative z-10"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-50 blur-2xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full opacity-30 blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
    </div>
  );
};

export default Hero;