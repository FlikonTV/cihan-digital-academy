import { Building2, Mail, Phone } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CorporateTraining = () => {
  const [selectedCourse, setSelectedCourse] = useState<string>("");

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

  return (
    <section id="corporate" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Corporate Training Solutions</h2>
          <p className="text-gray-600">
            Empower your workforce with customized AI training programs designed for your organization's specific needs
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 animate-fade-up">
              <div className="flex items-center mb-6">
                <Building2 className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Request Corporate Training</h3>
              </div>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Course of Interest</label>
                  <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem key={course} value={course}>
                          {course}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="Tell us about your training needs"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-md hover:bg-secondary transition-colors"
                >
                  Submit Request
                </button>
              </form>
            </div>
            
            <div className="bg-muted p-8 lg:p-12 flex flex-col justify-center animate-fade-up">
              <h4 className="text-xl font-semibold mb-6">Why Choose Our Corporate Training?</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </span>
                  <span>Customized curriculum based on your industry</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </span>
                  <span>Flexible scheduling options</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </span>
                  <span>Hands-on practical exercises</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </span>
                  <span>Progress tracking and reporting</span>
                </li>
              </ul>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold mb-4">Contact Us Directly</h4>
                <div className="space-y-3">
                  <a href="mailto:contact@cihandigital.com" className="flex items-center text-gray-600 hover:text-primary">
                    <Mail className="w-5 h-5 mr-2" />
                    contact@cihandigital.com
                  </a>
                  <a href="tel:+1234567890" className="flex items-center text-gray-600 hover:text-primary">
                    <Phone className="w-5 h-5 mr-2" />
                    +123 456 7890
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