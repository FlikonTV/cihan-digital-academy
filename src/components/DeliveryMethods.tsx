import { Users, Laptop, Video, Building2 } from "lucide-react";

const methods = [
  {
    icon: Users,
    title: "Face-to-Face Learning",
    description: "Traditional classroom experience with direct interaction with instructors and peers."
  },
  {
    icon: Laptop,
    title: "Hybrid Learning",
    description: "Blend of online and in-person sessions for maximum flexibility and engagement."
  },
  {
    icon: Video,
    title: "Virtual Learning",
    description: "100% online courses with live sessions and interactive content."
  },
  {
    icon: Building2,
    title: "Corporate Training",
    description: "Customized programs designed for your organization's specific needs."
  }
];

const DeliveryMethods = () => {
  return (
    <section id="delivery" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Learning Methods</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the learning method that best fits your schedule and preferences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methods.map((method, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <method.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{method.title}</h3>
              <p className="text-gray-600 text-center">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryMethods;