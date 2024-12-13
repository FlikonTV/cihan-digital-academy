import { Shield } from "lucide-react";
import AITrack from "./certifications/AITrack";
import DigitalCommunicationsTrack from "./certifications/DigitalCommunicationsTrack";
import ProjectFramework from "./certifications/ProjectFramework";

const CertificationPrograms = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Hero Section with Creative Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background/95 to-background pointer-events-none" />
      
      <div className="container relative mx-auto px-4 sm:px-6">
        {/* Header with Enhanced Typography and Animation */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-block p-2 bg-primary/10 rounded-xl mb-4">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            Advanced Professional Certification Programs
          </h2>
          <p className="text-lg text-gray-600">
            Pioneering Digital Transformation and AI Innovation through comprehensive certification tracks
          </p>
        </div>

        {/* Certification Tracks with Visual Enhancement */}
        <div className="space-y-12 mb-20">
          <div className="group bg-white rounded-2xl shadow-lg shadow-primary/5 border border-primary/10 overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 animate-fade-up">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <AITrack />
          </div>
          <div className="group bg-white rounded-2xl shadow-lg shadow-primary/5 border border-primary/10 overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 animate-fade-up" style={{ animationDelay: "100ms" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <DigitalCommunicationsTrack />
          </div>
        </div>

        {/* Features Grid with Visual Elements */}
        <div className="bg-gradient-to-br from-white to-muted/30 rounded-2xl p-8 border border-primary/10 shadow-lg shadow-primary/5 animate-fade-up">
          <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">Program Features</h4>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Joint Certification by Cihan Digital Academy",
              "Endorsed by IUIM and IIM",
              "Blockchain-Verified Credentials",
              "Global Professional Network Access",
              "Continuous Learning Support",
              "Industry-Recognized Certification"
            ].map((feature, index) => (
              <li 
                key={index}
                className="group flex items-center gap-3 p-4 bg-white/50 rounded-xl text-gray-700 hover:bg-white hover:shadow-glow transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Project Framework Section */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 opacity-30 rounded-3xl" />
          <ProjectFramework />
        </div>
      </div>
    </section>
  );
};

export default CertificationPrograms;