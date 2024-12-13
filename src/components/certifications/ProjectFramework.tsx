import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectTypes from "./project-framework/ProjectTypes";
import ProjectStages from "./project-framework/ProjectStages";
import GraduationRequirements from "./project-framework/GraduationRequirements";
import { BookOpen, GraduationCap, Rocket } from "lucide-react";

const ProjectFramework = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden bg-white">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background/95 to-background">
          <div className="absolute inset-0 bg-[url('/neural-network-bg.svg')] opacity-5 bg-repeat" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1/2 h-1/2 bg-gradient-to-r from-primary/10 via-accent/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-1/2 h-1/2 bg-gradient-to-l from-secondary/10 via-primary/5 to-transparent rounded-full blur-3xl" />

        {/* Hero Content */}
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 animate-fade-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                Project Framework
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Our innovative TABS-D Framework, developed by Celestine Achi, ensures a comprehensive approach to learning and implementation in the digital age.
              </p>

              {/* Framework Overview Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {[
                  {
                    icon: BookOpen,
                    title: "Learn",
                    desc: "Comprehensive curriculum"
                  },
                  {
                    icon: Rocket,
                    title: "Build",
                    desc: "Hands-on projects"
                  },
                  {
                    icon: GraduationCap,
                    title: "Achieve",
                    desc: "Industry recognition"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-primary/20 transition-all duration-300 group hover:shadow-glow"
                  >
                    <div className="flex flex-col items-center space-y-3">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="types" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
            <TabsTrigger value="types">Project Types</TabsTrigger>
            <TabsTrigger value="stages">Project Stages</TabsTrigger>
            <TabsTrigger value="requirements">Graduation Requirements</TabsTrigger>
          </TabsList>
          <TabsContent value="types">
            <ProjectTypes />
          </TabsContent>
          <TabsContent value="stages">
            <ProjectStages />
          </TabsContent>
          <TabsContent value="requirements">
            <GraduationRequirements />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProjectFramework;