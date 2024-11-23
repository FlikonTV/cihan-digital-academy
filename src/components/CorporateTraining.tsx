import { Building2, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";  // Add this import
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormError } from "@/components/ui/form-error";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  courseTitle: z.string().min(1, "Please select a course")
});

type FormData = z.infer<typeof formSchema>;

const CorporateTraining = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const selectedCourse = watch("courseTitle");

  const courses = [
    "Masterclass in Artificial Intelligence (MAI)",
    "Executive Masterclass in AI for Management Insights",
    "Masterclass in Prompt Engineering (MPE)",
    "Masterclass in AI Automation (MAA)",
    "Masterclass in Artificial Intelligence Coding (MAIC)",
    "Masterclass in Digital Communication and Data-Driven Analytics (MDCDA)",
    "Certificate Program in Responsible AI Implementation",
    "AI for Digital Content Creation and SEO",
    "AI-Driven Data Analytics and Business Intelligence"
  ];

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      
      // Send email notification
      const { error: emailError } = await supabase.functions.invoke('send-notification', {
        body: { type: 'corporate', data }
      });
      
      if (emailError) {
        console.error('Error sending email notification:', emailError);
        throw emailError;
      }
      
      toast({
        title: "Request Submitted",
        description: "We'll get back to you shortly regarding your training request.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="corporate" className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Corporate Training Solutions</h2>
          <p className="text-lg text-gray-600">
            Empower your workforce with customized AI training programs designed for your organization's specific needs
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:shadow-2xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 animate-fade-up">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold ml-4">Request Corporate Training</h3>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    {...register("companyName")}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-gray-50/50"
                    placeholder="Enter your company name"
                    aria-describedby={errors.companyName ? "companyName-error" : undefined}
                  />
                  {errors.companyName && (
                    <FormError message={errors.companyName.message} />
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-gray-50/50"
                    placeholder="Enter your email"
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <FormError message={errors.email.message} />
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="courseTitle" className="block text-sm font-medium text-gray-700">
                    Course of Interest
                  </label>
                  <Select 
                    onValueChange={(value) => setValue("courseTitle", value)}
                    value={selectedCourse}
                  >
                    <SelectTrigger 
                      id="courseTitle"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-gray-50/50 hover:bg-gray-100/50"
                    >
                      <SelectValue 
                        placeholder="Select a course" 
                        className="text-gray-500 placeholder:text-gray-400"
                      />
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px] overflow-y-auto">
                      <div className="px-2 py-2 text-sm text-gray-500 bg-gray-50">
                        Select from our available courses
                      </div>
                      {courses.map((course) => (
                        <SelectItem 
                          key={course} 
                          value={course}
                          className="py-3 px-4 cursor-pointer hover:bg-primary/5 focus:bg-primary/5 rounded-md transition-colors"
                        >
                          <span className="font-medium text-gray-700">{course}</span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.courseTitle && (
                    <FormError message={errors.courseTitle.message} />
                  )}
                  {selectedCourse && (
                    <p className="text-sm text-primary mt-2 animate-fade-in">
                      Selected: {selectedCourse}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register("message")}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-gray-50/50"
                    placeholder="Tell us about your training needs"
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <FormError message={errors.message.message} />
                  )}
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-secondary transition-colors duration-300 transform hover:scale-[1.02] active:scale-[0.98] font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit Request"
                  )}
                </Button>
              </form>
            </div>
            
            <div className="bg-muted/80 p-8 lg:p-12 flex flex-col justify-center animate-fade-up">
              <h4 className="text-2xl font-semibold mb-8 text-gray-800">Why Choose Our Corporate Training?</h4>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  </span>
                  <span className="text-gray-700">Customized curriculum based on your industry</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  </span>
                  <span className="text-gray-700">Flexible scheduling options</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  </span>
                  <span className="text-gray-700">Hands-on practical exercises</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  </span>
                  <span className="text-gray-700">Progress tracking and reporting</span>
                </li>
              </ul>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="text-xl font-semibold mb-6 text-gray-800">Contact Us Directly</h4>
                <div className="space-y-4">
                  <a 
                    href="mailto:cdatraining@cihanmediacomms.com" 
                    className="flex items-center text-gray-600 hover:text-primary transition-colors group"
                    aria-label="Email us at cdatraining@cihanmediacomms.com"
                  >
                    <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    cdatraining@cihanmediacomms.com
                  </a>
                  <a 
                    href="tel:08099997175" 
                    className="flex items-center text-gray-600 hover:text-primary transition-colors group"
                    aria-label="Call us at 08099997175"
                  >
                    <Phone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    08099997175
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateTraining;
