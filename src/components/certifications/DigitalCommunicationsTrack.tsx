import { Network } from "lucide-react";
import { CertificationTrack } from "./CertificationTrack";

const digitalCommunicationsTrackData = {
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
};

const DigitalCommunicationsTrack = () => <CertificationTrack track={digitalCommunicationsTrackData} />;

export default DigitalCommunicationsTrack;