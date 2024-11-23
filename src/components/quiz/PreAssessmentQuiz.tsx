import { useState } from "react";
import { useQuizState, mockQuestions } from "./hooks/useQuizState";
import { useQuizProctoring } from "./hooks/useQuizProctoring";
import QuizQuestion from "./QuizQuestion";
import QuizResults from "./QuizResults";
import WebcamMonitor from "./WebcamMonitor";
import ActivityMonitor from "./ActivityMonitor";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Default assessor information
const DEFAULT_ASSESSOR = {
  name: "Celestine Achi",
  email: "training@cihanmediacomms.com"
};

const PreAssessmentQuiz = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [participantName, setParticipantName] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  
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

  const handleAnswerWithFeedback = (answer: string) => {
    handleAnswer(answer);
    setShowFeedback(true);
  };

  const handleNextWithFeedback = () => {
    setShowFeedback(false);
    handleNext();
  };

  const handleStart = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasStarted(true);
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <QuizResults
        score={score}
        recommendations={getRecommendations(score)}
        onRetake={handleRetake}
        answers={answers}
        assessorInfo={DEFAULT_ASSESSOR}
        participantName={participantName}
      />
    );
  }

  if (!hasStarted) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Before we begin...</h3>
        <form onSubmit={handleStart} className="space-y-4">
          <div>
            <Label htmlFor="participantName">Please enter your full name</Label>
            <Input
              id="participantName"
              value={participantName}
              onChange={(e) => setParticipantName(e.target.value)}
              placeholder="Your full name"
              required
              className="mt-1"
            />
          </div>
          <Button type="submit">Start Quiz</Button>
        </form>
      </div>
    );
  }

  const currentQuestion = mockQuestions[currentQuestionIndex];

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="max-w-2xl mx-auto space-y-2"
    >
      <div className="flex items-center justify-between px-4 py-3 bg-muted rounded-lg">
        <h3 className="text-lg font-semibold">AI Knowledge Assessment Quiz</h3>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronDown
              className="h-4 w-4 transition-transform duration-200"
              style={{
                transform: isOpen ? "rotate(-180deg)" : "rotate(0deg)",
              }}
            />
            <span className="sr-only">Toggle quiz</span>
          </Button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent className="space-y-6 quiz-content">
        <WebcamMonitor 
          onSuspiciousActivity={addSuspiciousActivity}
          onPhotoCapture={handlePhotoCapture}
        />
        <ActivityMonitor onSuspiciousActivity={addSuspiciousActivity} />
        
        <QuizQuestion
          question={currentQuestion.question}
          options={currentQuestion.options}
          onAnswer={handleAnswerWithFeedback}
          currentAnswer={answers[currentQuestionIndex]}
          showFeedback={showFeedback}
          correctAnswer={currentQuestion.correct_answer}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={mockQuestions.length}
        />

        <div className="flex justify-end">
          <Button
            onClick={handleNextWithFeedback}
            disabled={!answers[currentQuestionIndex]}
            className="flex items-center"
          >
            {currentQuestionIndex === mockQuestions.length - 1 ? "Finish" : "Next"}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default PreAssessmentQuiz;