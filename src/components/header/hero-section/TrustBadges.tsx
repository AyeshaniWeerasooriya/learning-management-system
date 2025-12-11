import React from "react";
import { CheckCircle, Clock, BookOpen, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  icon: React.ElementType;
  text: string;
}

const badgesData: BadgeProps[] = [
  { icon: CheckCircle, text: "High-Quality Content" },
  { icon: Clock, text: "Flexible Deadlines" },
  { icon: BookOpen, text: "Certificate on Completion" },
  { icon: Users, text: "Expert Instructors" },
];

const TrustBadges: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-4 py-4">
      <div className="flex flex-wrap gap-4 justify-start">
        {badgesData.map((badge, index) => {
          const IconComponent = badge.icon;

          return (
            <div
              key={index}
              className={cn(
                "flex items-center px-2 py-1 rounded-full text-xs font-medium shadow-sm",
                "bg-gray-100 border border-gray-200 text-gray-700",
                index === 0 && "bg-blue-50 border-blue-200 text-blue-700"
              )}
            >
              <IconComponent
                className={cn(
                  "w-4 h-4 mr-2 text-blue-600",
                  index === 0 && "text-blue-700"
                )}
              />
              <span>{badge.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrustBadges;
