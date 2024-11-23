import React, { useRef, useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WebcamMonitorProps {
  onSuspiciousActivity: (activity: string) => void;
  onPhotoCapture: (photoBlob: Blob) => void;
}

const WebcamMonitor = ({ onSuspiciousActivity, onPhotoCapture }: WebcamMonitorProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const startWebcam = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
        setStream(mediaStream);
        // Take initial verification photo
        setTimeout(capturePhoto, 1000);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Camera Access Required",
          description: "Please enable camera access to continue with the quiz.",
        });
        onSuspiciousActivity("Camera access denied");
      }
    };

    startWebcam();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const capturePhoto = () => {
    if (videoRef.current && stream) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0);
        canvas.toBlob((blob) => {
          if (blob) {
            onPhotoCapture(blob);
          }
        }, 'image/jpeg');
      }
    }
  };

  return (
    <Card className="p-4 mb-4">
      <div className="flex items-center gap-2 mb-2">
        <AlertCircle className="w-4 h-4 text-yellow-500" />
        <span className="text-sm text-gray-600">Quiz monitoring is active</span>
      </div>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="w-48 h-36 rounded-lg object-cover"
      />
    </Card>
  );
};

export default WebcamMonitor;