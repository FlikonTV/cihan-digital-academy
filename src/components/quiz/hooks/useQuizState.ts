import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface QuizState {
  currentQuestionIndex: number;
  answers: Record<number, string>;
  showResults: boolean;
  quizAttemptId: string;
  suspiciousActivities: string[];
}

export const useQuizState = () => {
  const [state, setState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: {},
    showResults: false,
    quizAttemptId: uuidv4(),
    suspiciousActivities: [],
  });

  const handleAnswer = (answer: string) => {
    setState(prev => ({
      ...prev,
      answers: { ...prev.answers, [prev.currentQuestionIndex]: answer },
    }));
  };

  const handleNext = () => {
    setState(prev => ({
      ...prev,
      currentQuestionIndex: 
        prev.currentQuestionIndex < mockQuestions.length - 1 
          ? prev.currentQuestionIndex + 1 
          : prev.currentQuestionIndex,
      showResults: prev.currentQuestionIndex === mockQuestions.length - 1,
    }));
  };

  const handleRetake = () => {
    setState({
      currentQuestionIndex: 0,
      answers: {},
      showResults: false,
      quizAttemptId: uuidv4(),
      suspiciousActivities: [],
    });
  };

  const addSuspiciousActivity = (activity: string) => {
    setState(prev => ({
      ...prev,
      suspiciousActivities: [...prev.suspiciousActivities, activity],
    }));
  };

  return {
    ...state,
    handleAnswer,
    handleNext,
    handleRetake,
    addSuspiciousActivity,
  };
};

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

export { mockQuestions };