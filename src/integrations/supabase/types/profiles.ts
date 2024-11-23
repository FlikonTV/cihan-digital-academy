export interface ProfilesTable {
  Row: {
    full_name: string | null;
    id: string;
    organization: string | null;
    phone: string | null;
    updated_at: string | null;
  };
  Insert: {
    full_name?: string | null;
    id: string;
    organization?: string | null;
    phone?: string | null;
    updated_at?: string | null;
  };
  Update: {
    full_name?: string | null;
    id?: string;
    organization?: string | null;
    phone?: string | null;
    updated_at?: string | null;
  };
  Relationships: [];
}