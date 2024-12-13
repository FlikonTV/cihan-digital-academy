import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectTypes from "./project-framework/ProjectTypes";
import ProjectStages from "./project-framework/ProjectStages";
import GraduationRequirements from "./project-framework/GraduationRequirements";
import { BookOpen, GraduationCap, Rocket, Code, Target } from "lucide-react";

const ProjectFramework = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Hero Section with Visual Elements */}
      <div className="relative overflow-hidden bg-white">
        {/* Improved Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/neural-network-bg.svg')] opacity-5 bg-repeat animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background/95 to-background" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        </div>
        
        {/* Enhanced Decorative Elements */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1/2 h-1/2 bg-gradient-to-r from-primary/20 via-accent/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-1/2 h-1/2 bg-gradient-to-l from-secondary/20 via-primary/10 to-transparent rounded-full blur-3xl animate-pulse" />

        {/* Improved Hero Content */}
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8 animate-fade-up">
              <div className="inline-flex p-3 rounded-2xl bg-primary/10 mb-4">
                <Target className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                Project Framework
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Our innovative TABS-D Framework, developed by Celestine Achi, ensures a comprehensive approach to learning and implementation in the digital age.
              </p>

              {/* Added Framework Overview Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {[
                  {
                    icon: BookOpen,
                    title: "Learn",
                    desc: "Comprehensive curriculum"
                  },
                  {
                    icon: Code,
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
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-primary/20 transition-all duration-300 group hover:shadow-glow animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
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

      {/* Enhanced Tabs Section */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="types" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 bg-white/50 backdrop-blur-sm p-1 rounded-lg border border-primary/10">
            <TabsTrigger 
              value="types"
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Project Types
            </TabsTrigger>
            <TabsTrigger 
              value="stages"
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Project Stages
            </TabsTrigger>
            <TabsTrigger 
              value="requirements"
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Graduation Requirements
            </TabsTrigger>
          </TabsList>
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg">
            <TabsContent value="types" className="mt-0">
              <ProjectTypes />
            </TabsContent>
            <TabsContent value="stages" className="mt-0">
              <ProjectStages />
            </TabsContent>
            <TabsContent value="requirements" className="mt-0">
              <GraduationRequirements />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ProjectFramework;