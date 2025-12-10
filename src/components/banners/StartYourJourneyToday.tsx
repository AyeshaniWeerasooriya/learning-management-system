// StartJourneyCTA.tsx

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const StartYourJourneyToday: React.FC = () => {
  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center bg-lms-blue">
      <h2 className="text-4xl font-bold text-white mb-4">
        Start Your Journey Today
      </h2>

      <p className="text-md text-white mb-8 max-w-2xl mx-auto">
        Choose from 3 plans. Starting at $10, 30-day money back guaranteed.
      </p>

      <div className="flex justify-center space-x-4">
        <Link
          href="#get-a-course"
          className="inline-flex items-center justify-center 
                     px-8 py-3 text-base font-medium 
                     border border-gray-400 rounded-lg 
                     text-gray-900 bg-white 
                     hover:bg-gray-50 transition-colors"
        >
          Explore Courses <ArrowRight className="ml-2 w-4 h-4" />
        </Link>

        <Link
          href="#explore-courses"
          className="inline-flex items-center justify-center 
                     px-8 py-3 text-base font-medium 
                     border  rounded-lg 
                     text-white bg-blue-600 
                     hover:bg-blue-700 transition-colors border-gray-200"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default StartYourJourneyToday;
