import { useState } from "react";
import { LucideIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CertificationHeader } from "./CertificationHeader";
import { CertificationDetails } from "./CertificationDetails";
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

  const handleEnrollClick = (certification: Certification) => {
    setSelectedCertification({
      title: certification.title,
      date: new Date().toISOString(),
      price: "Contact for pricing",
    });
  };

  return (
    <div className="p-8">
      <CertificationHeader icon={track.icon} title={track.title} />

      <Accordion type="single" collapsible className="w-full">
        {track.certifications.map((cert, certIndex) => (
          <AccordionItem 
            key={certIndex} 
            value={`cert-${certIndex}`}
            className="mb-4 border rounded-xl overflow-hidden bg-white hover:bg-muted/5 transition-colors duration-300"
          >
            <AccordionTrigger className="px-6 py-4 w-full hover:no-underline">
              <CertificationDetails
                level={cert.level}
                title={cert.title}
                designation={cert.designation}
                duration={cert.duration}
                credits={cert.credits}
              />
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="space-y-6">
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
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <EnrollmentDialog
        isOpen={!!selectedCertification}
        onClose={() => setSelectedCertification(null)}
        certification={selectedCertification}
      />
    </div>
  );
};