import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, BookOpen, Check, X, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { mockQuestions } from "./hooks/useQuizState";
import QuizCertificate from "./QuizCertificate";

interface QuizResultsProps {
  score: number;
  recommendations: string[];
  onRetake: () => void;
  answers: Record<number, string>;
  assessorInfo?: {
    name: string;
    email: string;
  };
  participantName?: string;
}

const QuizResults = ({ 
  score, 
  recommendations, 
  onRetake, 
  answers,
  assessorInfo,
  participantName = "Participant"
}: QuizResultsProps) => {
  const navigate = useNavigate();
  
  const getMessage = (score: number) => {
    if (score >= 80) return "Excellent! You have a strong understanding of AI concepts.";
    if (score >= 60) return "Good job! You have a solid foundation in AI.";
    return "Great start! Let's build your AI knowledge together.";
  };

  const getLevel = (score: number) => {
    if (score >= 80) return "Advanced";
    if (score >= 60) return "Intermediate";
    return "Beginner";
  };

  return (
    <Card className="p-8 max-w-2xl mx-auto animate-fade-up space-y-8">
      {/* Score Section */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
          <Trophy className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Quiz Complete!</h2>
        <p className="text-4xl font-bold text-primary mb-4">{score}%</p>
        <p className="text-lg text-gray-600 mb-2">{getMessage(score)}</p>
        <p className="text-md text-gray-500">Level: {getLevel(score)}</p>
      </div>

      {/* Review Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Review Your Answers</h3>
        <div className="space-y-4">
          {mockQuestions.map((question, index) => (
            <div 
              key={index} 
              className="p-4 bg-muted/50 rounded-lg transition-colors hover:bg-muted/70"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  {answers[index] === question.correct_answer ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <X className="w-5 h-5 text-red-500" />
                  )}
                </div>
                <div>
                  <p className="font-medium mb-2">{question.question}</p>
                  <p className="text-sm text-gray-600">Your answer: {answers[index]}</p>
                  {answers[index] !== question.correct_answer && (
                    <p className="text-sm text-green-600 mt-1">
                      Correct answer: {question.correct_answer}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <BookOpen className="w-5 h-5 mr-2" />
          Recommended Courses
        </h3>
        <ul className="space-y-3">
          {recommendations.map((course, index) => (
            <li 
              key={index} 
              className="p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors cursor-pointer"
            >
              {course}
            </li>
          ))}
        </ul>
      </div>

      {/* Certificate Section */}
      {score >= 60 && (
        <QuizCertificate 
          score={score}
          userName={participantName}
          date={new Date().toLocaleDateString()}
          assessorName={assessorInfo?.name}
          assessorEmail={assessorInfo?.email}
        />
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          onClick={() => navigate("/courses")} 
          variant="outline" 
          className="flex-1 flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Courses
        </Button>
        <Button 
          onClick={onRetake} 
          className="flex-1"
        >
          Retake Quiz
        </Button>
      </div>
    </Card>
  );
};

export default QuizResults;