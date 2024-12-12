import { Building2, GraduationCap, Award } from "lucide-react";

const partners = [
  {
    icon: Building2,
    name: "Cihan Digital Academy",
    description: "Leading provider of digital transformation and AI education",
    gradient: "from-[#FFE29F] to-[#FFA99F]"
  },
  {
    icon: GraduationCap,
    name: "International University of Information Management (IUIM)",
    description: "Global institution dedicated to information management excellence",
    gradient: "from-[#D6BCFA] to-[#9b87f5]"
  },
  {
    icon: Award,
    name: "Institute of Information Management Africa (IIM)",
    description: "Premier accreditation body for information management in Africa",
    gradient: "from-[#accbee] to-[#e7f0fd]"
  }
];

const InstitutionalPartners = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Institutional Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Collaborating with leading institutions to deliver world-class professional certification programs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${partner.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <partner.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center group-hover:text-primary transition-colors duration-300">
                  {partner.name}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstitutionalPartners;