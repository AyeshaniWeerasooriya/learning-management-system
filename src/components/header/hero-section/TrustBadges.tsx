import React from "react";

import { CheckCircle, Clock, BookOpen, Users } from "lucide-react";

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
              className="flex items-center px-2 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs font-medium text-gray-700 shadow-sm"
            >
              <IconComponent className="w-4 h-4 mr-2 text-blue-600" />

              <span>{badge.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrustBadges;
