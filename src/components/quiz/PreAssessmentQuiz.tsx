import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import QuizQuestion from "./QuizQuestion";
import QuizResults from "./QuizResults";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Loader2 } from "lucide-react";

const PreAssessmentQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const { data: questions, isLoading } = useQuery({
    queryKey: ["quiz-questions"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("quiz_questions")
        .select("*");
      
      if (error) throw error;
      return data;
    }
  });

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestionIndex]: answer }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < (questions?.length || 0) - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    if (!questions) return 0;
    const correctAnswers = questions.filter(
      (q, idx) => answers[idx] === q.correct_answer
    ).length;
    return Math.round((correctAnswers / questions.length) * 100);
  };

  const getRecommendations = (score: number) => {
    if (score >= 80) {
      return [
        "Executive Masterclass in AI for Management Insights",
        "Masterclass in AI Automation (MAA)",
        "AI-Driven Data Analytics and Business Intelligence"
      ];
    }
    if (score >= 60) {
      return [
        "Masterclass in Artificial Intelligence (MAI)",
        "Masterclass in Prompt Engineering (MPE)",
        "Certificate Program in Responsible AI Implementation"
      ];
    }
    return [
      "Masterclass in Prompt Engineering (MPE)",
      "AI for Digital Content Creation and SEO",
      "Masterclass in Digital Communication and Data-Driven Analytics (MDCDA)"
    ];
  };

  const handleRetake = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!questions?.length) {
    return (
      <Card className="p-6 text-center">
        <p className="text-gray-600">No quiz questions available at the moment.</p>
      </Card>
    );
  }

  if (showResults) {
    const score = calculateScore();
    return (
      <QuizResults
        score={score}
        recommendations={getRecommendations(score)}
        onRetake={handleRetake}
      />
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-sm text-gray-500 mb-4">
        Question {currentQuestionIndex + 1} of {questions.length}
      </div>
      
      <QuizQuestion
        question={currentQuestion.question}
        options={currentQuestion.options}
        onAnswer={handleAnswer}
        currentAnswer={answers[currentQuestionIndex]}
      />

      <div className="flex justify-end">
        <Button
          onClick={handleNext}
          disabled={!answers[currentQuestionIndex]}
          className="flex items-center"
        >
          {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default PreAssessmentQuiz;