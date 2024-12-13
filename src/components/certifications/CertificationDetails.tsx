import { Clock, Blocks } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CertificationDetailsProps {
  level: string;
  title: string;
  designation: string;
  duration: string;
  credits: string;
}

export const CertificationDetails = ({ 
  level, 
  title, 
  designation, 
  duration, 
  credits 
}: CertificationDetailsProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-left p-2 rounded-lg transition-colors duration-300">
      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
        {level}
      </Badge>
      <div>
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{designation}</p>
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-500 ml-auto">
        <span className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          {duration}
        </span>
        <span className="flex items-center gap-2">
          <Blocks className="w-4 h-4" />
          {credits}
        </span>
      </div>
    </div>
  );
};