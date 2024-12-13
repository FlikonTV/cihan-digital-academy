import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CourseRegistrationForm from "@/components/CourseRegistrationForm";

interface EnrollmentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  certification: {
    title: string;
    date: string;
    price: string;
  } | null;
}

export const EnrollmentDialog = ({ isOpen, onClose, certification }: EnrollmentDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Course Registration</DialogTitle>
        </DialogHeader>
        {certification && (
          <CourseRegistrationForm
            courseTitle={certification.title}
            courseDate={certification.date}
            coursePrice={certification.price}
            onClose={onClose}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};