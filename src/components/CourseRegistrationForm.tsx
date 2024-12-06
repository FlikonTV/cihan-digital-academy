import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { registrationFormSchema, type RegistrationFormData } from "@/lib/validations/registration";
import { Loader2 } from "lucide-react";

interface CourseRegistrationFormProps {
  courseTitle: string;
  courseDate: string;
  coursePrice: string;
  onClose?: () => void;
}

const CourseRegistrationForm = ({ courseTitle, courseDate, coursePrice, onClose }: CourseRegistrationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationFormSchema)
  });

  const onSubmit = async (formData: RegistrationFormData) => {
    setIsSubmitting(true);
    
    try {
      // Insert into database
      const { error: dbError } = await supabase.from("registrations").insert({
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone || null,
        organization: formData.organization || null,
        course_title: courseTitle,
        course_date: courseDate,
        course_price: coursePrice,
      });
      
      if (dbError) throw dbError;

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke('send-notification', {
        body: { 
          type: 'registration', 
          data: {
            ...formData,
            course_title: courseTitle,
            course_date: courseDate,
            course_price: coursePrice,
          }
        }
      });
      
      if (emailError) {
        console.error('Error sending email notification:', emailError);
      }

      toast({
        title: "Registration Successful!",
        description: "We'll contact you soon with further details.",
      });

      if (onClose) onClose();
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        variant: "destructive",
        title: "Registration Failed",
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="full_name">Full Name *</Label>
        <Input
          id="full_name"
          {...register("full_name")}
          className={errors.full_name ? "border-destructive" : ""}
          disabled={isSubmitting}
        />
        {errors.full_name && (
          <p className="text-sm text-destructive">{errors.full_name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          type="email"
          id="email"
          {...register("email")}
          className={errors.email ? "border-destructive" : ""}
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          type="tel"
          id="phone"
          {...register("phone")}
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="organization">Organization</Label>
        <Input
          id="organization"
          {...register("organization")}
          disabled={isSubmitting}
        />
      </div>

      <div className="mt-4 bg-muted p-4 rounded-md">
        <h4 className="font-medium">Course Details</h4>
        <p className="text-sm text-gray-600">Course: {courseTitle}</p>
        <p className="text-sm text-gray-600">Date: {new Date(courseDate).toLocaleDateString()}</p>
        <p className="text-sm text-gray-600">Price: {coursePrice}</p>
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Registering...
          </>
        ) : (
          "Register Now"
        )}
      </Button>
    </form>
  );
};

export default CourseRegistrationForm;