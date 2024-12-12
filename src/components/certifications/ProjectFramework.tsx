import {
  Lightbulb,
  PencilRuler,
  Code,
  Rocket,
  CheckCircle2,
  Target,
  Users,
  Award,
  GraduationCap
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProjectFramework = () => {
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

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Practical Project Framework
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Mandatory graduation requirement designed to transform theoretical knowledge into practical innovation
          </p>
        </div>

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
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

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
      </div>
    </section>
  );
};

export default ProjectFramework;