import { LucideIcon, Clock, Award, Blocks } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

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
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-up">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 rounded-xl bg-primary/10">
          <track.icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{track.title}</h3>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {track.certifications.map((cert, certIndex) => (
          <AccordionItem 
            key={certIndex} 
            value={certIndex.toString()}
            className="border rounded-xl px-6 py-2 data-[state=open]:bg-muted/50"
          >
            <AccordionTrigger className="hover:no-underline">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-left">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {cert.level}
                </Badge>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{cert.title}</h4>
                  <p className="text-sm text-gray-600">{cert.designation}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  {cert.duration}
                  <Blocks className="w-4 h-4 ml-2" />
                  {cert.credits}
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
                    <ul className="grid sm:grid-cols-2 gap-2 pl-6">
                      {module.topics.map((topic, topicIndex) => (
                        <li 
                          key={topicIndex}
                          className="text-gray-600 text-sm flex items-center gap-2 before:content-['•'] before:text-primary before:mr-2"
                        >
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};