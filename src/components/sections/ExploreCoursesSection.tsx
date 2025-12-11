"use client";

import React, { useState, useRef } from "react";
import CourseCard from "./../../components/common-components/CourseCard";
import { cn } from "@/lib/utils";

interface Course {
  id: number;
}

const allCourses: Course[] = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];

const ExploreCoursesSection: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);

    setTimeout(() => {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 150);
  };

  return (
    <div className="w-full">
      <section
        ref={sectionRef}
        className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12")}
      >
        <h2 className={cn("text-2xl font-bold mb-6", "text-white")}>
          Explore Courses
        </h2>

        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          )}
        >
          {allCourses.slice(0, visibleCount).map((course) => (
            <CourseCard key={course.id} />
          ))}
        </div>

        {visibleCount < allCourses.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={handleLoadMore}
              className={cn(
                "px-6 py-3 font-semibold rounded-lg shadow transition hover:cursor-pointer",
                "bg-blue-600 text-white hover:bg-blue-700"
              )}
            >
              More Courses
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default ExploreCoursesSection;
