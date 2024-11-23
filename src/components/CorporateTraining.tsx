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
              
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Company Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-gray-50/50"
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-gray-50/50"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Course of Interest</label>
                  <div className="relative">
                    <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                      <SelectTrigger className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-gray-50/50 hover:bg-gray-100/50">
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
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {selectedCourse && (
                    <p className="text-sm text-primary mt-2 animate-fade-in">
                      Selected: {selectedCourse}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-gray-50/50"
                    placeholder="Tell us about your training needs"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-secondary transition-colors duration-300 transform hover:scale-[1.02] active:scale-[0.98] font-medium"
                >
                  Submit Request
                </button>
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
                  <a href="mailto:cdatraining@cihanmediacomms.com" className="flex items-center text-gray-600 hover:text-primary transition-colors group">
                    <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    cdatraining@cihanmediacomms.com
                  </a>
                  <a href="tel:08029610429" className="flex items-center text-gray-600 hover:text-primary transition-colors group">
                    <Phone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    08029610429
                  </a>
                  <a href="tel:08099997175" className="flex items-center text-gray-600 hover:text-primary transition-colors group">
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