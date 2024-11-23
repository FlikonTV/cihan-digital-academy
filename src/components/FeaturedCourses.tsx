import { Badge } from "@/components/ui/badge";
import { Clock, Users, Trophy } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import CourseRegistrationForm from "./CourseRegistrationForm";

const courses = [
  {
    title: "Masterclass in Artificial Intelligence (MAI)",
    description: "Learn the core concepts of artificial intelligence and machine learning",
    duration: "2 Days",
    level: "Professional",
    dates: ["2025-02-20", "2025-05-15", "2025-09-18"],
    price: "NGN 300,000",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Executive Masterclass in AI for Management Insights",
    description: "Master strategic AI integration and organizational transformation",
    duration: "2 Days",
    level: "Executive",
    dates: ["2025-03-14", "2025-07-11", "2025-11-14"],
    price: "NGN 500,000",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Masterclass in Prompt Engineering (MPE)",
    description: "Master prompt crafting and AI interaction optimization",
    duration: "2 Days",
    level: "Intermediate",
    dates: ["2025-02-27", "2025-06-20", "2025-10-24"],
    price: "NGN 35,000",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Masterclass in AI Automation (MAA)",
    description: "Master workflow automation and process optimization techniques",
    duration: "2 Days",
    level: "Advanced",
    dates: ["2025-03-21", "2025-06-18", "2025-12-05"],
    price: "NGN 300,000",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "AI-Driven Data Analytics and Business Intelligence",
    description: "Learn data analysis methodologies and strategic decision-making",
    duration: "2 Days",
    level: "Professional",
    dates: ["2025-01-30", "2025-06-27", "2025-12-05"],
    price: "NGN 350,000",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Certificate Program in Responsible AI Implementation",
    description: "Master ethical AI deployment and governance frameworks",
    duration: "2 Days",
    level: "Professional",
    dates: ["2025-02-13", "2025-07-24", "2025-12-11"],
    price: "NGN 250,000",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  }
];

const FeaturedCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState<{
    title: string;
    date: string;
    price: string;
  } | null>(null);

  return (
    <section id="courses" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured AI Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular AI courses designed to help you succeed in the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">{course.level}</Badge>
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="space-y-4">
                  <div className="text-sm text-gray-600">
                    <strong>Next Sessions:</strong>
                    <ul className="mt-2 space-y-1">
                      {course.dates.map((date, idx) => (
                        <li key={idx} className="flex justify-between items-center">
                          <span>{new Date(date).toLocaleDateString()}</span>
                          <button
                            onClick={() => setSelectedCourse({
                              title: course.title,
                              date: date,
                              price: course.price
                            })}
                            className="text-primary hover:text-secondary"
                          >
                            Register
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">{course.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Course Registration</DialogTitle>
          </DialogHeader>
          {selectedCourse && (
            <CourseRegistrationForm
              courseTitle={selectedCourse.title}
              courseDate={selectedCourse.date}
              coursePrice={selectedCourse.price}
              onClose={() => setSelectedCourse(null)}
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FeaturedCourses;