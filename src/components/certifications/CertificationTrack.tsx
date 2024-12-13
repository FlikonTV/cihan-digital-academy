import { LucideIcon, Clock, Award, Blocks } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import CourseRegistrationForm from "@/components/CourseRegistrationForm";

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
    // For demonstration, we'll use a fixed date and price
    // In a real application, these would come from your data
    setSelectedCertification({
      title: certification.title,
      date: new Date().toISOString(), // You would want to use actual course dates
      price: "Contact for pricing", // You would want to use actual course pricing
    });
  };

  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 rounded-xl bg-primary/10 shadow-glow">
          <track.icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{track.title}</h3>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {track.certifications.map((cert, certIndex) => (
          <AccordionItem 
            key={certIndex} 
            value={certIndex.toString()}
            className="border rounded-xl px-6 py-2 hover:bg-muted/30 transition-colors duration-300 data-[state=open]:bg-muted/50"
          >
            <AccordionTrigger className="hover:no-underline [&[data-state=open]>div]:bg-muted/50">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-left p-2 rounded-lg transition-colors duration-300">
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  {cert.level}
                </Badge>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{cert.title}</h4>
                  <p className="text-sm text-gray-600">{cert.designation}</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 ml-auto">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {cert.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <Blocks className="w-4 h-4" />
                    {cert.credits}
                  </span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pt-4 space-y-6">
                {cert.modules.map((module, moduleIndex) => (
                  <div key={moduleIndex} className="space-y-3">
                    <h5 className="font-semibold text-gray-900 flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      {module.title}
                    </h5>
                    <ul className="grid sm:grid-cols-2 gap-3 pl-6">
                      {module.topics.map((topic, topicIndex) => (
                        <li 
                          key={topicIndex}
                          className="text-gray-600 text-sm flex items-center gap-2 before:content-['•'] before:text-primary before:mr-2 hover:text-gray-900 transition-colors duration-300"
                        >
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
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

      <Dialog open={!!selectedCertification} onOpenChange={() => setSelectedCertification(null)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Course Registration</DialogTitle>
          </DialogHeader>
          {selectedCertification && (
            <CourseRegistrationForm
              courseTitle={selectedCertification.title}
              courseDate={selectedCertification.date}
              coursePrice={selectedCertification.price}
              onClose={() => setSelectedCertification(null)}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};