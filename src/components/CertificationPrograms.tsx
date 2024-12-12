import { Shield } from "lucide-react";
import AITrack from "./certifications/AITrack";
import DigitalCommunicationsTrack from "./certifications/DigitalCommunicationsTrack";
import ProjectFramework from "./certifications/ProjectFramework";

const CertificationPrograms = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-muted/50 to-white pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container relative mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Advanced Professional Certification Programs
          </h2>
          <p className="text-lg text-gray-600">
            Pioneering Digital Transformation and AI Innovation through comprehensive certification tracks
          </p>
        </div>

        {/* Certification Tracks */}
        <div className="space-y-12 mb-20">
          <div className="bg-white rounded-2xl shadow-lg shadow-primary/5 border border-primary/10 overflow-hidden animate-fade-up">
            <AITrack />
          </div>
          <div className="bg-white rounded-2xl shadow-lg shadow-primary/5 border border-primary/10 overflow-hidden animate-fade-up" style={{ animationDelay: "100ms" }}>
            <DigitalCommunicationsTrack />
          </div>
        </div>

        {/* Features */}
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
                className="flex items-center gap-3 p-4 bg-white/50 rounded-xl text-gray-700 hover:bg-white hover:shadow-sm transition-all duration-300"
              >
                <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Project Framework */}
        <div className="mt-20">
          <ProjectFramework />
        </div>
      </div>
    </section>
  );
};

export default CertificationPrograms;