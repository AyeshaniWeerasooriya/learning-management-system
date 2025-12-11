"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const StartYourJourneyToday: React.FC = () => {
  return (
    <div
      className={cn(
        "max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center bg-lms-blue"
      )}
    >
      <h2 className={cn("text-4xl font-bold text-white mb-4")}>
        Start Your Journey Today
      </h2>

      <p className={cn("text-md text-white mb-8 max-w-2xl mx-auto")}>
        Choose from 3 plans. Starting at $10, 30-day money back guaranteed.
      </p>

      <div className={cn("flex justify-center space-x-4")}>
        <Link
          href="#get-a-course"
          className={cn(
            "inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg transition-colors",
            "border border-gray-400 text-gray-900 bg-white hover:bg-gray-50"
          )}
        >
          Explore Courses <ArrowRight className="ml-2 w-4 h-4" />
        </Link>

        <Link
          href="#explore-courses"
          className={cn(
            "inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg transition-colors",
            "bg-blue-600 text-white hover:bg-blue-700 border border-gray-200"
          )}
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default StartYourJourneyToday;
