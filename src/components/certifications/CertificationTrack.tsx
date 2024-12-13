import { useState } from "react";
import { LucideIcon, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CertificationHeader } from "./CertificationHeader";
import { CertificationModule } from "./CertificationModule";
import { EnrollmentDialog } from "./EnrollmentDialog";

interface Module {
  title: string;
  topics: string[];
}

interface Certification {
  level: string;
  title: string;
  designation: string;
  duration: string;
  credits: string;
  modules: Module[];
}

interface Track {
  title: string;
  icon: LucideIcon;
  certifications: Certification[];
}

interface CertificationTrackProps {
  track: Track;
}

export const CertificationTrack = ({ track }: CertificationTrackProps) => {
  const [selectedCertification, setSelectedCertification] = useState<{
    title: string;
    date: string;
    price: string;
  } | null>(null);

  const [expandedCertIndex, setExpandedCertIndex] = useState<number | null>(null);

  const handleEnrollClick = (certification: Certification) => {
    setSelectedCertification({
      title: certification.title,
      date: new Date().toISOString(),
      price: "Contact for pricing",
    });
  };

  const toggleExpand = (index: number) => {
    setExpandedCertIndex(expandedCertIndex === index ? null : index);
  };

  return (
    <div className="p-8">
      <CertificationHeader icon={track.icon} title={track.title} />

      <div className="space-y-4">
        {track.certifications.map((cert, index) => (
          <div
            key={index}
            className="rounded-xl border bg-white overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleExpand(index)}
              className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-muted/5 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-md text-sm font-medium ${
                    cert.level === "Entry-Level" 
                      ? "bg-purple-100 text-purple-700"
                      : cert.level === "Mid-Level"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-green-100 text-green-700"
                  }`}>
                    {cert.level}
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{cert.title}</h4>
                    <p className="text-sm text-gray-600">{cert.designation}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 mt-2 text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    {cert.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M9 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    {cert.credits}
                  </span>
                </div>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  expandedCertIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                expandedCertIndex === index ? "max-h-[2000px]" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-6 space-y-6">
                {cert.modules.map((module, moduleIndex) => (
                  <CertificationModule
                    key={moduleIndex}
                    title={module.title}
                    topics={module.topics}
                  />
                ))}
                <div className="pt-4">
                  <Button
                    onClick={() => handleEnrollClick(cert)}
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white"
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <EnrollmentDialog
        isOpen={!!selectedCertification}
        onClose={() => setSelectedCertification(null)}
        certification={selectedCertification}
      />
    </div>
  );
};