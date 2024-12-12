import ProjectStages from "./project-framework/ProjectStages";
import ProjectTypes from "./project-framework/ProjectTypes";
import GraduationRequirements from "./project-framework/GraduationRequirements";

const ProjectFramework = () => {
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

        <ProjectStages />
        <ProjectTypes />
        <GraduationRequirements />
      </div>
    </section>
  );
};

export default ProjectFramework;