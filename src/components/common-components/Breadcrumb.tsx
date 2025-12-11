// Breadcrumb.tsx
import React from "react";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  courseName: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ courseName }) => {
  return (
    <nav
      className="bg-gray-50 py-3 border-b border-gray-100"
      aria-label="Breadcrumb"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol role="list" className="flex items-center space-x-2 text-sm">
          <li>
            <a
              href="/"
              className="font-medium text-gray-500 hover:text-gray-700 transition"
            >
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          </li>
          <li>
            <span className="font-semibold text-gray-800 truncate max-w-xs block sm:max-w-md">
              {courseName}
            </span>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
