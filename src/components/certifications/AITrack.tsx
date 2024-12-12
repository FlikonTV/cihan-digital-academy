import { Brain } from "lucide-react";
import { CertificationTrack } from "./CertificationTrack";

const aiTrackData = {
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
};

const AITrack = () => <CertificationTrack track={aiTrackData} />;

export default AITrack;