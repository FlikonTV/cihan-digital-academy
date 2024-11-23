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
    question: "What is Artificial Intelligence (AI)?",
    options: [
      "A type of computer hardware",
      "Systems that can mimic human intelligence",
      "A programming language",
      "A type of internet connection"
    ],
    correct_answer: "Systems that can mimic human intelligence"
  },
  {
    id: 2,
    question: "Which of these is an example of AI in everyday life?",
    options: [
      "Using a calculator",
      "Voice assistants like Siri or Alexa",
      "Playing a DVD",
      "Using a microwave"
    ],
    correct_answer: "Voice assistants like Siri or Alexa"
  },
  {
    id: 3,
    question: "What is machine learning?",
    options: [
      "Teaching robots to walk",
      "A way for computers to learn from data without explicit programming",
      "Learning how to build computers",
      "A type of computer game"
    ],
    correct_answer: "A way for computers to learn from data without explicit programming"
  },
  {
    id: 4,
    question: "What is the main goal of AI?",
    options: [
      "To replace all human jobs",
      "To make computers faster",
      "To solve complex problems and assist humans",
      "To create video games"
    ],
    correct_answer: "To solve complex problems and assist humans"
  },
  {
    id: 5,
    question: "Which field does NOT commonly use AI?",
    options: [
      "Healthcare",
      "Basic arithmetic calculations",
      "Customer service",
      "Transportation"
    ],
    correct_answer: "Basic arithmetic calculations"
  }
];

export { mockQuestions };