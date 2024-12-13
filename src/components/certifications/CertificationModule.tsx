import { Award } from "lucide-react";

interface ModuleProps {
  title: string;
  topics: string[];
}

export const CertificationModule = ({ title, topics }: ModuleProps) => {
  return (
    <div className="space-y-3">
      <h5 className="font-semibold text-gray-900 flex items-center gap-2">
        <Award className="w-4 h-4 text-primary" />
        {title}
      </h5>
      <ul className="grid sm:grid-cols-2 gap-3 pl-6">
        {topics.map((topic, topicIndex) => (
          <li 
            key={topicIndex}
            className="text-gray-600 text-sm flex items-center gap-2 before:content-['•'] before:text-primary before:mr-2 hover:text-gray-900 transition-colors duration-300"
          >
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};