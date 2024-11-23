import { GraduationCap, Lightbulb, Building2, Rocket, Upload } from "lucide-react";

const TabsDFramework = () => {
  const phases = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Train: The Foundation",
      description: "Drawing from extensive experience in AI innovation and education, this phase builds robust foundational knowledge, encompassing theoretical understanding and practical wisdom from real-world applications."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Adapt: Dynamic Learning",
      description: "This phase reflects insight into the rapidly evolving AI landscape, teaching practitioners to remain agile and responsive to changing technological demands and opportunities."
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Build: Creating Value",
      description: "The build phase manifests an emphasis on practical application, encouraging learners to transform their knowledge into tangible solutions."
    },
    {
      icon: <Upload className="w-8 h-8" />,
      title: "Ship: Quality Assurance",
      description: "This critical stage demonstrates the importance of deployment readiness, ensuring solutions meet real-world standards."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Deploy: Real-World Impact",
      description: "The final phase embodies the ultimate goal: creating meaningful impact through practical implementation."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Cihan Digital Academy TABS-D Framework
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Pioneering the Future of AI Education
          </p>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p>
              Celestine Achi's forward-thinking approach led to the creation of TABS-D, a framework that would become a cornerstone in modern AI education. His vision was clear: to develop a systematic approach that would transform theoretical knowledge into practical expertise.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up border border-primary/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  {phase.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{phase.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TabsDFramework;