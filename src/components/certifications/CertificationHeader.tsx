import { LucideIcon } from "lucide-react";

interface CertificationHeaderProps {
  icon: LucideIcon;
  title: string;
}

export const CertificationHeader = ({ icon: Icon, title }: CertificationHeaderProps) => {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 rounded-xl bg-primary/10 shadow-glow">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
    </div>
  );
};