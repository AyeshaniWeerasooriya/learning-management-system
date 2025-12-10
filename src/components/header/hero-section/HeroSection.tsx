"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Globe } from "lucide-react";
import TrustBadges from "./TrustBadges";

interface BannerCardProps {
  id: number;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  styleType: "dark" | "light_image" | "light_text";
}

const bannerData: BannerCardProps[] = [
  {
    id: 1,
    title: "OpenAI",
    subtitle:
      "Learn how AI is a busy teacher's best friend. Save time with ChatGPT Foundations for Teachers.",
    ctaText: "Get started",
    ctaHref: "#ai-course",
    styleType: "dark",
  },

  {
    id: 2,

    title: "Start, switch, or advance your career",
    subtitle: "Grow with 10,000+ courses from top organizations",
    ctaText: "Join for Free",
    ctaHref: "#join-free",
    styleType: "light_image",
  },

  {
    id: 3,
    title: "Develop fundamental skills for your success",
    subtitle: "Transform your future with professional certificates.",
    ctaText: "Explore Certs",
    ctaHref: "#certs",
    styleType: "light_text",
  },

  {
    id: 4,
    title: "New Technologies",
    subtitle: "Stay ahead of the curve with our latest specialized courses.",
    ctaText: "See what's new",
    ctaHref: "#new",
    styleType: "dark",
  },
];

const BannerCard: React.FC<BannerCardProps> = ({
  title,
  subtitle,
  ctaText,
  ctaHref,
  styleType,
}) => {
  const cardWidthClass =
    "w-[calc(100vw-32px)] sm:w-[500px] lg:w-[480px] xl:w-[520px]";
  const baseClasses = `${cardWidthClass} h-[350px] rounded-lg p-8 flex-shrink-0 relative overflow-hidden shadow-xl transition-all duration-500`;
  const styleClasses = {
    dark: "bg-gray-900 text-white",
    light_image: "bg-gray-50 text-gray-900",
    light_text: "bg-white border border-gray-200 text-gray-900",
  };

  return (
    <div className={`${baseClasses} ${styleClasses[styleType]}`}>
      <div className="flex flex-col justify-between h-full">
        <div>
          <span
            className={`text-sm font-semibold mb-2 block ${
              styleType === "dark" ? "text-blue-400" : "text-blue-600"
            }`}
          >
            {title}
          </span>
          <h3 className="text-2xl font-bold leading-tight mb-4">
            {subtitle.split(". ")[0]}
          </h3>
          <p className="text-sm">{subtitle.split(". ")[1] || subtitle}</p>
        </div>
        <Link
          href={ctaHref}
          className={`flex items-center w-fit px-5 py-2.5 font-semibold rounded transition-colors mt-6
            ${
              styleType === "dark"
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "border border-blue-600 text-blue-600 hover:bg-blue-50"
            }
            `}
        >
          {ctaText}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
      {styleType === "dark" && (
        <Globe className="w-96 h-96 absolute -bottom-20 -right-20 text-blue-500/20" />
      )}
      {styleType === "light_image" && (
        <div className="w-40 h-40 bg-pink-100 rounded-full absolute -top-10 right-0"></div>
      )}
    </div>
  );
};

const HeroSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const GAP = 24;
  const getScrollDistance = (): number => {
    if (firstCardRef.current) {
      const cardWidth = firstCardRef.current.clientWidth;
      return cardWidth + GAP;
    }
    return 520 + GAP;
  };
  const scroll = (direction: "prev" | "next") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const SCROLL_DISTANCE = getScrollDistance();
      let newIndex = activeIndex;
      if (direction === "next") {
        newIndex = Math.min(activeIndex + 1, bannerData.length - 1);
      } else {
        newIndex = Math.max(activeIndex - 1, 0);
      }
      const newScrollLeft = newIndex * SCROLL_DISTANCE;
      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
      setActiveIndex(newIndex);
    }
  };
  const handleDotClick = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const SCROLL_DISTANCE = getScrollDistance();
      const newScrollLeft = index * SCROLL_DISTANCE;
      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const handleScroll = () => {
      const SCROLL_DISTANCE = getScrollDistance();
      const scrollLeft = container.scrollLeft;
      const newIndex = Math.round(scrollLeft / SCROLL_DISTANCE);
      setActiveIndex(newIndex);
    };
    container.addEventListener("scroll", handleScroll);
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        handleDotClick(activeIndex);
      }, 100);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [activeIndex]);

  return (
    <div className="max-w-7xl mx-auto py-8 relative ">
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className={`
            flex space-x-6 overflow-x-scroll snap-x snap-mandatory pb-4
            [scrollbar-width:none] [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
            px-4 sm:px-6 lg:px-8
            lg:ml-[-1rem] lg:mr-[-1rem]

          `}
        >
          {bannerData.map((banner, index) => (
            <div
              key={banner.id}
              ref={index === 0 ? firstCardRef : null}
              className={`snap-start flex-shrink-0 ${
                index === 0 ? "first:ml-0 lg:first:ml-8" : ""
              }`}
            >
              <BannerCard {...banner} />
            </div>
          ))}
          <div className="flex-shrink-0 w-8 lg:w-4"></div>
        </div>
        <div className="absolute inset-y-0 w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 pointer-events-none">
          <button
            onClick={() => scroll("prev")}
            disabled={activeIndex === 0}
            className="p-2 bg-white/70 backdrop-blur rounded-full shadow-lg pointer-events-auto disabled:opacity-50 transition-opacity lg:p-3 lg:shadow-xl lg:ml-[-1rem]"
            aria-label="Previous Banner"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={() => scroll("next")}
            disabled={activeIndex === bannerData.length - 1}
            className="p-2 bg-white/70 backdrop-blur rounded-full shadow-lg pointer-events-auto disabled:opacity-50 transition-opacity lg:p-3 lg:shadow-xl lg:mr-[-1rem]"
            aria-label="Next Banner"
          >
            <ArrowRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
      <div className="flex justify-start space-x-2 mt-4 pl-4 sm:pl-6 lg:pl-8 ">
        {bannerData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`
              h-2 rounded-full cursor-pointer
              transition-all duration-300
              ${
                index === activeIndex
                  ? "bg-gray-300 w-6"
                  : "bg-gray-700 w-2 hover:bg-gray-400"
              }
            `}
          />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <TrustBadges />
      </div>
    </div>
  );
};

export default HeroSection;
