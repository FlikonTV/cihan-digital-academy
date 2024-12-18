export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      content_analysis_requests: {
        Row: {
          "analysis_result:": string | null
          "analysis_status:": string | null
          content_url: string | null
          created_at: string
          error_message: string | null
          "file_path:": string | null
          id: number[]
        }
        Insert: {
          "analysis_result:"?: string | null
          "analysis_status:"?: string | null
          content_url?: string | null
          created_at?: string
          error_message?: string | null
          "file_path:"?: string | null
          id: number[]
        }
        Update: {
          "analysis_result:"?: string | null
          "analysis_status:"?: string | null
          content_url?: string | null
          created_at?: string
          error_message?: string | null
          "file_path:"?: string | null
          id?: number[]
        }
        Relationships: []
      }
      profiles: {
        Row: {
          full_name: string | null
          id: string
          is_admin: boolean | null
          organization: string | null
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          full_name?: string | null
          id: string
          is_admin?: boolean | null
          organization?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          full_name?: string | null
          id?: string
          is_admin?: boolean | null
          organization?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      project_collaborators: {
        Row: {
          created_at: string
          email: string
          id: string
          invited_by: string
          project_id: string
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          invited_by: string
          project_id: string
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          invited_by?: string
          project_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      quiz_proctoring_data: {
        Row: {
          created_at: string | null
          id: string
          quiz_attempt_id: string
          suspicious_activities: Json | null
          user_id: string | null
          verification_photo_url: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          quiz_attempt_id: string
          suspicious_activities?: Json | null
          user_id?: string | null
          verification_photo_url?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          quiz_attempt_id?: string
          suspicious_activities?: Json | null
          user_id?: string | null
          verification_photo_url?: string | null
        }
        Relationships: []
      }
      registrations: {
        Row: {
          course_date: string
          course_price: string
          course_title: string
          created_at: string
          email: string
          full_name: string
          id: string
          organization: string | null
          payment_status: string | null
          phone: string | null
          status: string | null
        }
        Insert: {
          course_date: string
          course_price: string
          course_title: string
          created_at?: string
          email: string
          full_name: string
          id?: string
          organization?: string | null
          payment_status?: string | null
          phone?: string | null
          status?: string | null
        }
        Update: {
          course_date?: string
          course_price?: string
          course_title?: string
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          organization?: string | null
          payment_status?: string | null
          phone?: string | null
          status?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_collaborators_table: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
