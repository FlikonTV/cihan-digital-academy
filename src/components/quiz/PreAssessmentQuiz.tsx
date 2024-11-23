import { useState } from "react";
import QuizQuestion from "./QuizQuestion";
import QuizResults from "./QuizResults";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

// Mock data for quiz questions
const mockQuestions = [
  {
    id: 1,
    question: "Which component of the TABS-D Framework focuses on practical application and creating tangible solutions?",
    options: ["Train", "Adapt", "Build", "Ship"],
    correct_answer: "Build"
  },
  {
    id: 2,
    question: "What is the primary purpose of prompt engineering in AI development?",
    options: [
      "Writing code for AI models",
      "Optimizing hardware performance",
      "Crafting effective inputs for AI systems",
      "Managing AI project timelines"
    ],
    correct_answer: "Crafting effective inputs for AI systems"
  },
  {
    id: 3,
    question: "In the context of AI implementation, what does the 'Ship' phase in TABS-D primarily ensure?",
    options: [
      "Physical product shipping",
      "Code deployment",
      "Quality assurance and deployment readiness",
      "Marketing strategy"
    ],
    correct_answer: "Quality assurance and deployment readiness"
  },
  {
    id: 4,
    question: "Which of these is NOT a key focus area of the Masterclass in AI Automation (MAA)?",
    options: [
      "Workflow automation",
      "Process optimization",
      "Hardware manufacturing",
      "Implementation strategies"
    ],
    correct_answer: "Hardware manufacturing"
  },
  {
    id: 5,
    question: "What is a primary benefit of the 'Adapt' phase in the TABS-D Framework?",
    options: [
      "Cost reduction",
      "Maintaining agility in response to technological changes",
      "Marketing improvement",
      "Team building"
    ],
    correct_answer: "Maintaining agility in response to technological changes"
  }
];

const PreAssessmentQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestionIndex]: answer }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < mockQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

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

  const handleRetake = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
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