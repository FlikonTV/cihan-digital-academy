import { Users, Laptop, Video, Building2 } from "lucide-react";

const methods = [
  {
    icon: Users,
    title: "Face-to-Face Learning",
    description: "Traditional classroom experience with direct interaction with instructors and peers.",
    gradient: "from-[#FFE29F] to-[#FFA99F]"
  },
  {
    icon: Laptop,
    title: "Hybrid Learning",
    description: "Blend of online and in-person sessions for maximum flexibility and engagement.",
    gradient: "from-[#D6BCFA] to-[#9b87f5]"
  },
  {
    icon: Video,
    title: "Virtual Learning",
    description: "100% online courses with live sessions and interactive content.",
    gradient: "from-[#accbee] to-[#e7f0fd]"
  },
  {
    icon: Building2,
    title: "Corporate Training",
    description: "Customized programs designed for your organization's specific needs.",
    gradient: "from-[#fdfcfb] to-[#e2d1c3]"
  }
];

const DeliveryMethods = () => {
  return (
    <section id="delivery" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Learning Methods</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the learning method that best fits your schedule and preferences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methods.map((method, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center group-hover:text-primary transition-colors duration-300">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {method.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryMethods;