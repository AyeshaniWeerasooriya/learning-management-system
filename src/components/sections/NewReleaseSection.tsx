"use client";

import React, { useRef, useState, useEffect } from "react";
import CourseCard from "./../../components/common-components/CourseCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Course {
  id: number;
}

const newReleases: Course[] = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];

const NewReleaseSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const GAP = 16;

  const getScrollDistance = () => {
    if (firstCardRef.current) {
      return firstCardRef.current.clientWidth + GAP;
    }
    return 240 + GAP;
  };

  const scroll = (direction: "prev" | "next") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const SCROLL_DISTANCE = getScrollDistance();
      let newIndex = activeIndex;

      if (direction === "next") {
        newIndex = Math.min(activeIndex + 1, newReleases.length - 1);
      } else {
        newIndex = Math.max(activeIndex - 1, 0);
      }

      container.scrollTo({
        left: newIndex * SCROLL_DISTANCE,
        behavior: "smooth",
      });

      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const newIndex = Math.round(scrollLeft / getScrollDistance());
      setActiveIndex(newIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <h2 className="text-2xl font-bold text-white mb-6">New Releases</h2>

        <div
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-scroll scrollbar-hide snap-x snap-mandatory"
        >
          {newReleases.map((course, index) => (
            <div
              key={course.id}
              ref={index === 0 ? firstCardRef : null}
              className="snap-start flex-shrink-0"
            >
              <CourseCard />
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll("prev")}
          disabled={activeIndex === 0}
          className="absolute top-1/2 -left-3 transform -translate-y-1/2 bg-white/70 backdrop-blur rounded-full p-2 shadow-lg disabled:opacity-50 transition-opacity hover:bg-white"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>

        <button
          onClick={() => scroll("next")}
          disabled={activeIndex === newReleases.length - 1}
          className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-white/70 backdrop-blur rounded-full p-2 shadow-lg disabled:opacity-50 transition-opacity hover:bg-white"
        >
          <ArrowRight className="w-5 h-5 text-gray-700" />
        </button>
      </section>
    </div>
  );
};

export default NewReleaseSection;
