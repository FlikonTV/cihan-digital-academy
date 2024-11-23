import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Expert instructors with industry experience",
  "Hands-on practical learning approach",
  "Flexible learning options to suit your schedule",
  "Industry-recognized certifications",
  "Small class sizes for personalized attention",
  "Access to cutting-edge AI tools and resources"
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-white to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose 
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Cihan Digital Academy?</span>
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-fade-up lg:animate-fade-in">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
                  alt="Learning environment"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;