import ProjectFramework from "@/components/certifications/ProjectFramework";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectFrameworkPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <ProjectFramework />
      </div>
      <Footer />
    </main>
  );
};

export default ProjectFrameworkPage;