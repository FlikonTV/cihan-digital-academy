export interface ContentAnalysisRequestsTable {
  Row: {
    "analysis_result:": string | null;
    "analysis_status:": string | null;
    content_url: string | null;
    created_at: string;
    error_message: string | null;
    "file_path:": string | null;
    id: number[];
  };
  Insert: {
    "analysis_result:"?: string | null;
    "analysis_status:"?: string | null;
    content_url?: string | null;
    created_at?: string;
    error_message?: string | null;
    "file_path:"?: string | null;
    id: number[];
  };
  Update: {
    "analysis_result:"?: string | null;
    "analysis_status:"?: string | null;
    content_url?: string | null;
    created_at?: string;
    error_message?: string | null;
    "file_path:"?: string | null;
    id?: number[];
  };
  Relationships: [];
}