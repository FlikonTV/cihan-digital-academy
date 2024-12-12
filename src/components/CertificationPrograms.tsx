import { GraduationCap, Brain, Network, Shield, Clock, Award, Blocks } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const certificationTracks = [
  {
    title: "AI Certification Track",
    icon: Brain,
    certifications: [
      {
        level: "Entry-Level",
        title: "AI Foundations Certification",
        designation: "Certified AI Associate (CAI-A)",
        duration: "3 Months",
        credits: "12 ECTS",
        modules: [
          {
            title: "Introduction to Artificial Intelligence",
            topics: [
              "AI History and Evolution",
              "Types of AI Systems",
              "Fundamental AI Concepts",
              "Ethical AI Foundations"
            ]
          },
          {
            title: "Machine Learning Basics",
            topics: [
              "Supervised and Unsupervised Learning",
              "Basic Algorithm Understanding",
              "Introductory Data Analysis",
              "Machine Learning Tools Overview"
            ]
          },
          {
            title: "AI Programming Fundamentals",
            topics: [
              "Python for AI",
              "Basic Programming Concepts",
              "Data Manipulation Techniques",
              "Simple AI Model Development"
            ]
          }
        ]
      },
      {
        level: "Mid-Level",
        title: "Professional AI Certification",
        designation: "Certified AI Professional (CAI-P)",
        duration: "6 Months",
        credits: "24 ECTS",
        modules: [
          {
            title: "Advanced Machine Learning",
            topics: [
              "Deep Learning Techniques",
              "Neural Network Architectures",
              "Advanced Algorithm Design",
              "Performance Optimization"
            ]
          },
          {
            title: "AI Application Development",
            topics: [
              "Natural Language Processing",
              "Computer Vision Technologies",
              "AI Model Development",
              "Practical AI Solution Design"
            ]
          },
          {
            title: "AI Ethics and Governance",
            topics: [
              "Responsible AI Principles",
              "Bias Detection and Mitigation",
              "AI Regulatory Frameworks",
              "Ethical Decision-Making in AI"
            ]
          },
          {
            title: "AI Project Management",
            topics: [
              "AI Project Lifecycle",
              "Technology Integration Strategies",
              "Risk Assessment",
              "Scalable AI Implementation"
            ]
          }
        ]
      },
      {
        level: "Advanced-Level",
        title: "Executive AI Leadership Certification",
        designation: "Certified AI Executive (CAI-E)",
        duration: "9 Months",
        credits: "36 ECTS",
        modules: [
          {
            title: "Strategic AI Leadership",
            topics: [
              "AI Transformation Strategies",
              "Global AI Ecosystem Management",
              "Technological Foresight",
              "Innovation Leadership"
            ]
          },
          {
            title: "Advanced AI Technologies",
            topics: [
              "Generative AI Systems",
              "Quantum Machine Learning",
              "Edge AI and Distributed Systems",
              "Advanced AI Research Trends"
            ]
          },
          {
            title: "AI Governance and Strategy",
            topics: [
              "Global AI Policy Development",
              "Enterprise AI Strategy",
              "Technological Disruption Management",
              "AI-Driven Organizational Transformation"
            ]
          },
          {
            title: "AI Innovation Ecosystem",
            topics: [
              "AI Startup Ecosystem",
              "Global Technology Trends",
              "Research and Development Strategies",
              "Collaborative AI Innovation"
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Digital Communications Certification Track",
    icon: Network,
    certifications: [
      {
        level: "Entry-Level",
        title: "Digital Communications Associate Certification",
        designation: "Certified Digital Communications Associate (CDCA)",
        duration: "3 Months",
        credits: "12 ECTS",
        modules: [
          {
            title: "Digital Communication Foundations",
            topics: [
              "Communication Theory in Digital Age",
              "Social Media Fundamentals",
              "Digital Content Basics",
              "Online Communication Principles"
            ]
          },
          {
            title: "Digital Media Literacy",
            topics: [
              "Content Creation Techniques",
              "Digital Storytelling",
              "Multimedia Communication",
              "Online Engagement Strategies"
            ]
          },
          {
            title: "Digital Communication Tools",
            topics: [
              "Social Media Management",
              "Digital Marketing Basics",
              "Communication Platforms",
              "Basic Analytics Understanding"
            ]
          }
        ]
      },
      {
        level: "Mid-Level",
        title: "Professional Digital Communications Certification",
        designation: "Certified Digital Communications Professional (CDCP)",
        duration: "6 Months",
        credits: "24 ECTS",
        modules: [
          {
            title: "Advanced Digital Strategy",
            topics: [
              "Integrated Communication Strategies",
              "Digital Brand Management",
              "Audience Engagement Techniques",
              "Content Marketing"
            ]
          },
          {
            title: "Digital Communication Technologies",
            topics: [
              "Advanced Social Media Strategies",
              "AI in Communication",
              "Data-Driven Communication",
              "Emerging Digital Platforms"
            ]
          },
          {
            title: "Strategic Digital Content",
            topics: [
              "Advanced Content Creation",
              "Multimedia Production",
              "Digital Storytelling Techniques",
              "Global Communication Strategies"
            ]
          },
          {
            title: "Digital Analytics and Insights",
            topics: [
              "Advanced Analytics",
              "Audience Behavior Analysis",
              "Performance Measurement",
              "Strategic Communication Metrics"
            ]
          }
        ]
      },
      {
        level: "Advanced-Level",
        title: "Executive Digital Communications Leadership Certification",
        designation: "Certified Digital Communications Executive (CDCE)",
        duration: "9 Months",
        credits: "36 ECTS",
        modules: [
          {
            title: "Digital Transformation Leadership",
            topics: [
              "Global Communication Strategies",
              "Digital Ecosystem Management",
              "Technological Innovation Leadership",
              "Strategic Communication Transformation"
            ]
          },
          {
            title: "Advanced Communication Technologies",
            topics: [
              "AI-Powered Communication",
              "Emerging Digital Platforms",
              "Future of Digital Communication",
              "Technological Communication Trends"
            ]
          },
          {
            title: "Strategic Communication Governance",
            topics: [
              "Global Communication Policy",
              "Ethical Digital Communication",
              "Crisis Communication Management",
              "Reputation Management Strategies"
            ]
          },
          {
            title: "Digital Innovation Ecosystem",
            topics: [
              "Communication Innovation Strategies",
              "Global Digital Trends",
              "Collaborative Communication Platforms",
              "Future of Work in Digital Communication"
            ]
          }
        ]
      }
    ]
  }
];

const CertificationPrograms = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Advanced Professional Certification Programs
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Pioneering Digital Transformation and AI Innovation through comprehensive certification tracks
          </p>
        </div>

        <div className="grid gap-12">
          {certificationTracks.map((track, trackIndex) => (
            <div 
              key={trackIndex}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${trackIndex * 200}ms` }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-primary/10">
                  <track.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{track.title}</h3>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {track.certifications.map((cert, certIndex) => (
                  <AccordionItem 
                    key={certIndex} 
                    value={`${trackIndex}-${certIndex}`}
                    className="border rounded-xl px-6 py-2 data-[state=open]:bg-muted/50"
                  >
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-left">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {cert.level}
                        </Badge>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{cert.title}</h4>
                          <p className="text-sm text-gray-600">{cert.designation}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          {cert.duration}
                          <Blocks className="w-4 h-4 ml-2" />
                          {cert.credits}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pt-4 space-y-6">
                        {cert.modules.map((module, moduleIndex) => (
                          <div key={moduleIndex} className="space-y-3">
                            <h5 className="font-semibold text-gray-900 flex items-center gap-2">
                              <Award className="w-4 h-4 text-primary" />
                              {module.title}
                            </h5>
                            <ul className="grid sm:grid-cols-2 gap-2 pl-6">
                              {module.topics.map((topic, topicIndex) => (
                                <li 
                                  key={topicIndex}
                                  className="text-gray-600 text-sm flex items-center gap-2 before:content-['•'] before:text-primary before:mr-2"
                                >
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 bg-white rounded-xl shadow-sm border border-primary/10 animate-fade-up">
          <h4 className="text-xl font-semibold text-gray-900 mb-4">Unique Program Features</h4>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Joint Certification by Cihan Digital Academy",
              "Endorsed by IUIM and IIM",
              "Blockchain-Verified Credentials",
              "Global Professional Network Access",
              "Continuous Learning Support"
            ].map((feature, index) => (
              <li 
                key={index}
                className="flex items-center gap-2 text-gray-600"
              >
                <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CertificationPrograms;