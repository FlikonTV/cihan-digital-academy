import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CertificationPrograms from "@/components/CertificationPrograms";

const Certifications = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <CertificationPrograms />
      </div>
      <Footer />
    </main>
  );
};

export default Certifications;