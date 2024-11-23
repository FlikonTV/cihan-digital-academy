import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface QuizQuestionProps {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
  currentAnswer?: string;
}

const QuizQuestion = ({ question, options, onAnswer, currentAnswer }: QuizQuestionProps) => {
  return (
    <Card className="p-6 animate-fade-up">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{question}</h3>
      <div className="space-y-3">
        {options.map((option) => (
          <Button
            key={option}
            onClick={() => onAnswer(option)}
            variant="outline"
            className={cn(
              "w-full justify-start text-left h-auto p-4 hover:bg-primary/5",
              currentAnswer === option && "border-primary bg-primary/5"
            )}
          >
            {option}
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default QuizQuestion;