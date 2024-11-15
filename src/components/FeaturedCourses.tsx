import { Badge } from "@/components/ui/badge";
import { Clock, Users, Trophy } from "lucide-react";

const courses = [
  {
    title: "AI Fundamentals",
    description: "Learn the core concepts of artificial intelligence and machine learning",
    duration: "8 weeks",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Deep Learning Specialization",
    description: "Master neural networks and deep learning algorithms",
    duration: "12 weeks",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Applied AI Projects",
    description: "Build real-world AI applications with industry mentors",
    duration: "10 weeks",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
  }
];

const FeaturedCourses = () => {
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
                <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-secondary transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;