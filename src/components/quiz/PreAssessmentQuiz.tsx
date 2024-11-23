import { useQuizState, mockQuestions } from "./hooks/useQuizState";
import { useQuizProctoring } from "./hooks/useQuizProctoring";
import QuizQuestion from "./QuizQuestion";
import QuizResults from "./QuizResults";
import WebcamMonitor from "./WebcamMonitor";
import ActivityMonitor from "./ActivityMonitor";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PreAssessmentQuiz = () => {
  const {
    currentQuestionIndex,
    answers,
    showResults,
    quizAttemptId,
    suspiciousActivities,
    handleAnswer,
    handleNext,
    handleRetake,
    addSuspiciousActivity,
  } = useQuizState();

  const { handlePhotoCapture } = useQuizProctoring(quizAttemptId, addSuspiciousActivity);

  const calculateScore = () => {
    const correctAnswers = mockQuestions.filter(
      (q, idx) => answers[idx] === q.correct_answer
    ).length;
    return Math.round((correctAnswers / mockQuestions.length) * 100);
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

  const currentQuestion = mockQuestions[currentQuestionIndex];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <WebcamMonitor 
        onSuspiciousActivity={addSuspiciousActivity}
        onPhotoCapture={handlePhotoCapture}
      />
      <ActivityMonitor onSuspiciousActivity={addSuspiciousActivity} />
      
      <div className="text-sm text-gray-500 mb-4">
        Question {currentQuestionIndex + 1} of {mockQuestions.length}
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
          {currentQuestionIndex === mockQuestions.length - 1 ? "Finish" : "Next"}
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default PreAssessmentQuiz;