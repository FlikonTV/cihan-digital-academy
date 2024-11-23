import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface CourseRegistrationFormProps {
  courseTitle: string;
  courseDate: string;
  coursePrice: string;
  onClose?: () => void;
}

const CourseRegistrationForm = ({ courseTitle, courseDate, coursePrice, onClose }: CourseRegistrationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      full_name: formData.get("full_name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      organization: formData.get("organization") as string,
      course_title: courseTitle,
      course_date: courseDate,
      course_price: coursePrice,
    };

    try {
      const { error } = await supabase.from("registrations").insert([data]);
      
      if (error) throw error;

      toast({
        title: "Registration Successful!",
        description: "We'll contact you soon with further details.",
      });

      if (onClose) onClose();
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">
          Full Name *
        </label>
        <input
          type="text"
          name="full_name"
          id="full_name"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email *
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div>
        <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
          Organization
        </label>
        <input
          type="text"
          name="organization"
          id="organization"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="mt-4 bg-muted p-4 rounded-md">
        <h4 className="font-medium">Course Details</h4>
        <p className="text-sm text-gray-600">Course: {courseTitle}</p>
        <p className="text-sm text-gray-600">Date: {new Date(courseDate).toLocaleDateString()}</p>
        <p className="text-sm text-gray-600">Price: {coursePrice}</p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Registering..." : "Register Now"}
      </button>
    </form>
  );
};

export default CourseRegistrationForm;