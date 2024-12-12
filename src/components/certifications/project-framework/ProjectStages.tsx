import { Lightbulb, PencilRuler, Code, Rocket } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const stages = [
  {
    icon: Lightbulb,
    title: "Project Ideation and Conceptualization",
    description: "Identify real-world problems and develop innovative solutions",
    deliverables: [
      "Comprehensive project concept document",
      "Problem statement analysis",
      "Initial market/impact research",
      "Conceptual solution framework"
    ]
  },
  {
    icon: PencilRuler,
    title: "Project Design and Planning",
    description: "Create detailed blueprints and technical architecture",
    deliverables: [
      "Detailed project blueprint",
      "Technical architecture design",
      "Resource requirement mapping",
      "Risk assessment strategy"
    ]
  },
  {
    icon: Code,
    title: "Prototype Development",
    description: "Build functional MVP with core features",
    deliverables: [
      "Functional minimum viable product",
      "Technical proof of concept",
      "Initial user interface design",
      "Performance testing results"
    ]
  },
  {
    icon: Rocket,
    title: "Implementation and Deployment",
    description: "Prepare for scalable deployment and integration",
    deliverables: [
      "Scalability planning",
      "Integration capabilities",
      "Performance optimization",
      "Security framework"
    ]
  }
];

const ProjectStages = () => {
  return (
    <div className="grid gap-8 mb-16">
      {stages.map((stage, index) => (
        <Card key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <stage.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <CardTitle>{stage.title}</CardTitle>
              <CardDescription>{stage.description}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="grid sm:grid-cols-2 gap-3">
              {stage.deliverables.map((deliverable, dIndex) => (
                <li key={dIndex} className="flex items-center gap-2 text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {deliverable}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProjectStages;