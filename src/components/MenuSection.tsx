import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MenuSection = () => {
  const navigate = useNavigate();
  const courses = [
    {
      title: "Masterclass in Artificial Intelligence (MAI)",
      sessions: [
        "Q1: February 20-21, 2025",
        "Q2: May 15-16, 2025",
        "Q3: September 18-19, 2025"
      ],
      format: "Face-to-face",
      duration: "2 Days",
      investment: "NGN 300,000",
      deadline: "2 weeks before each session",
      focus: "Practical AI implementation strategies, hands-on tool experience, and real-world application scenarios."
    },
    {
      title: "Executive Masterclass in AI for Management Insights",
      sessions: [
        "Q1: March 14-15, 2025",
        "Q2: July 11-12, 2025",
        "Q4: November 14-15, 2025"
      ],
      format: "Face-to-face",
      duration: "2 Days",
      investment: "NGN 500,000",
      deadline: "2 weeks before each session",
      focus: "Strategic AI integration, leadership decision-making, and organizational transformation frameworks."
    },
    {
      title: "Masterclass in Prompt Engineering (MPE)",
      sessions: [
        "Q1: February 27-28, 2025",
        "Q2: June 20-21, 2025",
        "Q4: October 24-25, 2025"
      ],
      format: "Virtual",
      duration: "2 Days",
      investment: "NGN 35,000",
      deadline: "2 weeks before each session",
      focus: "Practical prompt crafting, AI interaction optimization, and efficiency enhancement techniques."
    }
  ];

  const handleCertificationClick = () => {
    navigate('/certifications');
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{course.title}</CardTitle>
                <CardDescription>Duration: {course.duration}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm text-gray-700 mb-2">Sessions:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {course.sessions.map((session, idx) => (
                        <li key={idx}>{session}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm"><span className="font-medium">Format:</span> {course.format}</p>
                    <p className="text-sm"><span className="font-medium">Investment:</span> {course.investment}</p>
                    <p className="text-sm"><span className="font-medium">Registration Deadline:</span> {course.deadline}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-gray-700 mb-1">TABS-D Focus:</h4>
                    <p className="text-sm text-gray-600">{course.focus}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <button 
            onClick={handleCertificationClick}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-300"
          >
            View All Certifications
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;