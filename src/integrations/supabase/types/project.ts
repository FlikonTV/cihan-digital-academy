export interface ProjectCollaboratorsTable {
  Row: {
    created_at: string;
    email: string;
    id: string;
    invited_by: string;
    project_id: string;
    status: string;
    updated_at: string;
  };
  Insert: {
    created_at?: string;
    email: string;
    id?: string;
    invited_by: string;
    project_id: string;
    status?: string;
    updated_at?: string;
  };
  Update: {
    created_at?: string;
    email?: string;
    id?: string;
    invited_by?: string;
    project_id?: string;
    status?: string;
    updated_at?: string;
  };
  Relationships: [];
}