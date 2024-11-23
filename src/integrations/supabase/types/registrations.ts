export interface RegistrationsTable {
  Row: {
    course_date: string;
    course_price: string;
    course_title: string;
    created_at: string;
    email: string;
    full_name: string;
    id: string;
    organization: string | null;
    payment_status: string | null;
    phone: string | null;
    status: string | null;
  };
  Insert: {
    course_date: string;
    course_price: string;
    course_title: string;
    created_at?: string;
    email: string;
    full_name: string;
    id?: string;
    organization?: string | null;
    payment_status?: string | null;
    phone?: string | null;
    status?: string | null;
  };
  Update: {
    course_date?: string;
    course_price?: string;
    course_title?: string;
    created_at?: string;
    email?: string;
    full_name?: string;
    id?: string;
    organization?: string | null;
    payment_status?: string | null;
    phone?: string | null;
    status?: string | null;
  };
  Relationships: [];
}