import { GraduationCap, Award, Users, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const GraduationRequirements = () => {
  return (
    <Card className="animate-fade-up">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <div>
            <CardTitle>Graduation Requirements</CardTitle>
            <CardDescription>Complete these requirements to earn your certification</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              Project Requirements
            </h4>
            <ul className="space-y-2">
              {[
                "Detailed project documentation",
                "Functional prototype/solution",
                "Technical architecture explanation",
                "Implementation strategy",
                "Future development roadmap",
                "Video demonstration"
              ].map((req, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              Support Mechanisms
            </h4>
            <ul className="space-y-2">
              {[
                "Dedicated project mentorship",
                "Expert advisory panel",
                "Technical support resources",
                "Industry connection opportunities",
                "Project showcase platform",
                "Continued development support"
              ].map((support, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  {support}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GraduationRequirements;