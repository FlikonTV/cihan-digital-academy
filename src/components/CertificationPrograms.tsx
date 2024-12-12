import { Shield } from "lucide-react";
import AITrack from "./certifications/AITrack";
import DigitalCommunicationsTrack from "./certifications/DigitalCommunicationsTrack";
import ProjectFramework from "./certifications/ProjectFramework";

const CertificationPrograms = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Advanced Professional Certification Programs
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Pioneering Digital Transformation and AI Innovation through comprehensive certification tracks
          </p>
        </div>

        <div className="grid gap-12">
          <AITrack />
          <DigitalCommunicationsTrack />
        </div>

        <div className="mt-16 p-6 bg-white rounded-xl shadow-sm border border-primary/10 animate-fade-up">
          <h4 className="text-xl font-semibold text-gray-900 mb-4">Unique Program Features</h4>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Joint Certification by Cihan Digital Academy",
              "Endorsed by IUIM and IIM",
              "Blockchain-Verified Credentials",
              "Global Professional Network Access",
              "Continuous Learning Support"
            ].map((feature, index) => (
              <li 
                key={index}
                className="flex items-center gap-2 text-gray-600"
              >
                <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <ProjectFramework />
      </div>
    </section>
  );
};

export default CertificationPrograms;