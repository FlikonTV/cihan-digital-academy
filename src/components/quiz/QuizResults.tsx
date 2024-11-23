import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface QuizResultsProps {
  score: number;
  recommendations: string[];
  onRetake: () => void;
}

const QuizResults = ({ score, recommendations, onRetake }: QuizResultsProps) => {
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
    <Card className="p-8 max-w-2xl mx-auto animate-fade-up">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
          <Trophy className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Quiz Complete!</h2>
        <p className="text-4xl font-bold text-primary mb-4">{score}%</p>
        <p className="text-lg text-gray-600 mb-2">{getMessage(score)}</p>
        <p className="text-md text-gray-500">Level: {getLevel(score)}</p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <BookOpen className="w-5 h-5 mr-2" />
          Recommended Courses
        </h3>
        <ul className="space-y-3">
          {recommendations.map((course, index) => (
            <li key={index} className="p-4 bg-muted/50 rounded-lg">
              {course}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={onRetake} variant="outline" className="flex-1">
          Retake Quiz
        </Button>
        <Button onClick={() => navigate("/courses")} className="flex-1">
          View Courses
        </Button>
      </div>
    </Card>
  );
};

export default QuizResults;