import { Target, Users, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projectTypes = {
  ai: [
    "Predictive analytics tools",
    "Machine learning applications",
    "Natural language processing systems",
    "Computer vision technologies",
    "AI-driven decision support systems"
  ],
  digital: [
    "Advanced communication platforms",
    "AI-enhanced content management",
    "Digital engagement technologies",
    "Strategic communication tools",
    "Multimedia communication innovations"
  ]
};

const ProjectTypes = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      <Card className="animate-fade-up">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>AI Project Options</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {projectTypes.ai.map((project, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                {project}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="animate-fade-up" style={{ animationDelay: "100ms" }}>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Digital Communications Projects</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {projectTypes.digital.map((project, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                {project}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectTypes;