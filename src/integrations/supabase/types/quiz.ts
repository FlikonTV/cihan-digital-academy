export interface QuizQuestionsTable {
  Row: {
    id: number;
    question: string;
    options: string[];
    correct_answer: string;
    created_at: string;
  };
  Insert: {
    id?: number;
    question: string;
    options: string[];
    correct_answer: string;
    created_at?: string;
  };
  Update: {
    id?: number;
    question?: string;
    options?: string[];
    correct_answer?: string;
    created_at?: string;
  };
  Relationships: [];
}