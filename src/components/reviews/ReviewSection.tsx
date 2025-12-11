"use client";

import React, { useRef, useState, useEffect } from "react";
import { User, ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  name: string;
  review: string;
}

const reviewData: Testimonial[] = [
  {
    name: "Name of the User 1",
    review:
      "This platform rebuilt my confidence and showed me I could dream bigger. It wasn't just about gaining knowledge—it was about believing in my potential again.",
  },
  {
    name: "Name of the User 2",
    review:
      "The expert instructors and flexible deadlines made it possible for me to advance my career while managing a busy schedule. Highly recommend!",
  },
  {
    name: "Name of the User 3",
    review:
      "I found the perfect specialized course here. The content quality is superb, and the certificate helped me secure a new job role quickly.",
  },
  {
    name: "Name of the User 4",
    review:
      "Fantastic learning environment. The community support and resources provided are truly top-notch. I look forward to taking more courses.",
  },
  {
    name: "Name of the User 5",
    review:
      "Amazing platform with quality content. The hands-on projects helped me understand concepts deeply.",
  },
];

const TestimonialCard: React.FC<Testimonial> = ({ name, review }) => (
  <div
    className={cn(
      "w-[300px] sm:w-[350px] flex-shrink-0 p-6 bg-white",
      "border border-gray-100 rounded-xl shadow-lg transition-all duration-300",
      "hover:shadow-xl hover:-translate-y-1"
    )}
  >
    <div className="flex items-center mb-4">
      <div
        className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center",
          "bg-gray-200 text-gray-500"
        )}
      >
        <User className="w-5 h-5" />
      </div>

      <div className="ml-3">
        <p className="font-semibold text-gray-900 text-sm">{name}</p>
        <p className="text-xs text-blue-600">Verified Learner</p>
      </div>
    </div>

    <p className="text-sm text-gray-600 italic">{review}</p>
  </div>
);

const ReviewSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const GAP = 16;

  const getCardWidth = () => {
    if (firstCardRef.current) {
      return firstCardRef.current.clientWidth + GAP;
    }
    return 316;
  };

  const scroll = (direction: "prev" | "next") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cardWidth = getCardWidth();
    let newIndex = activeIndex;

    newIndex =
      direction === "next"
        ? Math.min(activeIndex + 1, reviewData.length - 1)
        : Math.max(activeIndex - 1, 0);

    container.scrollTo({
      left: newIndex * cardWidth,
      behavior: "smooth",
    });

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cardWidth = getCardWidth();
      const newIndex = Math.round(container.scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Why People Choose Us
        </h2>

        {/* Scroll Container */}
        <div
          ref={scrollContainerRef}
          className={cn("flex overflow-x-auto gap-4", "scrollbar-hide")}
        >
          {reviewData.map((review, index) => (
            <div
              key={index}
              ref={index === 0 ? firstCardRef : null}
              className="flex-shrink-0 snap-start"
            >
              <TestimonialCard {...review} />
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={() => scroll("prev")}
          disabled={activeIndex === 0}
          className={cn(
            "absolute top-1/2 -left-3 -translate-y-1/2 p-2 rounded-full",
            "bg-white/70 backdrop-blur shadow-lg hover:bg-white transition",
            "disabled:opacity-50"
          )}
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>

        {/* Right Button */}
        <button
          onClick={() => scroll("next")}
          disabled={activeIndex >= reviewData.length - 1}
          className={cn(
            "absolute top-1/2 -right-3 -translate-y-1/2 p-2 rounded-full",
            "bg-white/70 backdrop-blur shadow-lg hover:bg-white transition",
            "disabled:opacity-50"
          )}
        >
          <ArrowRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </section>
  );
};

export default ReviewSection;
