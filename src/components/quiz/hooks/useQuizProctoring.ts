import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const useQuizProctoring = (
  quizAttemptId: string,
  onSuspiciousActivity: (activity: string) => void
) => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const { toast } = useToast();

  const handlePhotoCapture = async (photoBlob: Blob) => {
    try {
      const photoPath = `quiz-photos/${quizAttemptId}.jpg`;
      const { error: uploadError } = await supabase.storage
        .from('quiz-photos')
        .upload(photoPath, photoBlob);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('quiz-photos')
        .getPublicUrl(photoPath);

      await supabase.from('quiz_proctoring_data').insert({
        quiz_attempt_id: quizAttemptId,
        verification_photo_url: publicUrl,
        suspicious_activities: []
      });
    } catch (error) {
      console.error('Error saving verification photo:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to save verification photo.",
      });
    }
  };

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  return {
    stream,
    setStream,
    handlePhotoCapture,
  };
};