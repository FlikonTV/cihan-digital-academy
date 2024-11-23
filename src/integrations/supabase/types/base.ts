import { ContentAnalysisRequestsTable } from './content-analysis';
import { ProfilesTable } from './profiles';
import { ProjectCollaboratorsTable } from './project';
import { RegistrationsTable } from './registrations';
import { QuizQuestionsTable } from './quiz';

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      content_analysis_requests: ContentAnalysisRequestsTable;
      profiles: ProfilesTable;
      project_collaborators: ProjectCollaboratorsTable;
      registrations: RegistrationsTable;
      quiz_questions: QuizQuestionsTable;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      create_collaborators_table: {
        Args: Record<PropertyKey, never>;
        Returns: undefined;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}