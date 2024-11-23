import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Check, X } from "lucide-react";

interface QuizQuestionProps {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
  currentAnswer?: string;
  showFeedback?: boolean;
  correctAnswer?: string;
  currentQuestionIndex: number;
  totalQuestions: number;
}

const QuizQuestion = ({ 
  question, 
  options, 
  onAnswer, 
  currentAnswer,
  showFeedback,
  correctAnswer,
  currentQuestionIndex,
  totalQuestions,
}: QuizQuestionProps) => {
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <Card className="p-6 animate-fade-up">
      <div className="mb-4">
        <Progress value={progress} className="h-2" />
        <p className="text-sm text-gray-500 mt-2">Question {currentQuestionIndex + 1} of {totalQuestions}</p>
      </div>
      
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{question}</h3>
      <div className="space-y-3">
        {options.map((option) => {
          const isSelected = currentAnswer === option;
          const isCorrect = showFeedback && option === correctAnswer;
          const isWrong = showFeedback && isSelected && option !== correctAnswer;

          return (
            <Button
              key={option}
              onClick={() => onAnswer(option)}
              variant="outline"
              className={cn(
                "w-full justify-between text-left h-auto p-4 hover:bg-primary/5",
                isSelected && "border-primary bg-primary/5",
                isCorrect && "border-green-500 bg-green-50",
                isWrong && "border-red-500 bg-red-50"
              )}
              disabled={showFeedback}
            >
              <span>{option}</span>
              {showFeedback && isCorrect && <Check className="w-5 h-5 text-green-500" />}
              {showFeedback && isWrong && <X className="w-5 h-5 text-red-500" />}
            </Button>
          );
        })}
      </div>
    </Card>
  );
};

export default QuizQuestion;