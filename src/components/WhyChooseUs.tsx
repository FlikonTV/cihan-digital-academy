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
    <section id="why-us" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Cihan Digital Academy?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-fade-up lg:animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
                alt="Learning environment"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;