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

      <Accordion type="single" collapsible className="w-full space-y-4">
        {track.certifications.map((cert, certIndex) => (
          <AccordionItem 
            key={certIndex} 
            value={`item-${certIndex}`}
            className="border rounded-xl px-6 py-2 bg-white hover:bg-muted/30 transition-colors duration-300 data-[state=open]:bg-muted/50"
          >
            <AccordionTrigger className="hover:no-underline [&[data-state=open]>div]:bg-muted/50">
              <CertificationDetails
                level={cert.level}
                title={cert.title}
                designation={cert.designation}
                duration={cert.duration}
                credits={cert.credits}
              />
            </AccordionTrigger>
            <AccordionContent>
              <div className="pt-4 space-y-6">
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