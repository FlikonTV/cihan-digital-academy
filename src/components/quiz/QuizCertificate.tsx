import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import html2canvas from "html2canvas";

interface QuizCertificateProps {
  score: number;
  userName?: string;
  date: string;
  assessorName?: string;
  assessorEmail?: string;
}

const QuizCertificate = ({ 
  score, 
  userName = "Participant", 
  date,
  assessorName,
  assessorEmail 
}: QuizCertificateProps) => {
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
        className="p-12 bg-gradient-to-br from-purple-50 via-white to-purple-50 border-2 border-primary/20 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjwvZz48L3N2Zz4=')] bg-repeat opacity-20" />
        </div>

        <div className="relative text-center space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <div className="text-primary font-bold text-3xl mb-2">
              Cihan Digital Academy
            </div>
            <div className="w-32 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Certificate of Completion</h2>
            <p className="text-gray-600 italic">This is to certify that</p>
            <p className="text-2xl font-bold text-gray-800 border-b-2 border-primary/20 pb-2 mx-auto inline-block">
              {userName}
            </p>
          </div>

          {/* Body */}
          <div className="space-y-4">
            <p className="text-gray-600">has successfully completed the</p>
            <p className="text-xl font-semibold text-gray-800">AI Knowledge Assessment</p>
            <p className="text-gray-600">with a score of</p>
            <p className="text-4xl font-bold text-primary">{score}%</p>
          </div>

          {/* Date and Signature */}
          <div className="mt-8 pt-8 border-t border-primary/20 grid grid-cols-2 gap-8">
            <div className="text-left">
              <p className="text-sm text-gray-500">Date of Issue</p>
              <p className="font-medium text-gray-800">{date}</p>
            </div>
            {assessorName && (
              <div className="text-right">
                <p className="text-sm text-gray-500">Assessed by</p>
                <p className="font-medium text-gray-800">{assessorName}</p>
                {assessorEmail && (
                  <p className="text-sm text-gray-500">{assessorEmail}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </Card>

      <div className="mt-6 flex justify-center">
        <Button onClick={handleDownload} className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download Certificate
        </Button>
      </div>
    </div>
  );
};

export default QuizCertificate;