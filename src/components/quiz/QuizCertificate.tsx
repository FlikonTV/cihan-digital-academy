import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import html2canvas from "html2canvas";

interface QuizCertificateProps {
  score: number;
  userName?: string;
  date: string;
}

const QuizCertificate = ({ score, userName = "Participant", date }: QuizCertificateProps) => {
  const handleDownload = async () => {
    const certificate = document.getElementById('quiz-certificate');
    if (certificate) {
      const canvas = await html2canvas(certificate);
      const link = document.createElement('a');
      link.download = 'CihanDigitalAcademy-Certificate.png';
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <div className="mt-8">
      <Card 
        id="quiz-certificate" 
        className="p-8 bg-gradient-to-br from-purple-50 to-white border-2 border-primary/20"
      >
        <div className="text-center space-y-4">
          <div className="text-primary font-bold text-2xl mb-2">
            Cihan Digital Academy
          </div>
          <h2 className="text-xl font-semibold">Certificate of Completion</h2>
          <p className="text-gray-600">This is to certify that</p>
          <p className="text-xl font-bold text-gray-800">{userName}</p>
          <p className="text-gray-600">has successfully completed the</p>
          <p className="text-lg font-semibold text-gray-800">AI Knowledge Assessment</p>
          <p className="text-gray-600">with a score of</p>
          <p className="text-3xl font-bold text-primary">{score}%</p>
          <p className="text-sm text-gray-500 mt-4">Issued on {date}</p>
        </div>
      </Card>
      <div className="mt-4 flex justify-center">
        <Button onClick={handleDownload} className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download Certificate
        </Button>
      </div>
    </div>
  );
};

export default QuizCertificate;