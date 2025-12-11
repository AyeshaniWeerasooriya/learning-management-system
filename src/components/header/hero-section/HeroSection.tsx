"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
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

  return (
    <div
      className={cn(
        cardWidthClass,
        "h-[350px] rounded-lg p-8 flex-shrink-0 relative overflow-hidden shadow-xl transition-all duration-500",
        {
          "bg-gray-900 text-white": styleType === "dark",
          "bg-gray-50 text-gray-900": styleType === "light_image",
          "bg-white border border-gray-200 text-gray-900":
            styleType === "light_text",
        }
      )}
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <span
            className={cn(
              "text-sm font-semibold mb-2 block",
              styleType === "dark" ? "text-blue-400" : "text-blue-600"
            )}
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
          className={cn(
            "flex items-center w-fit px-5 py-2.5 font-semibold rounded transition-colors mt-6",
            {
              "bg-blue-600 hover:bg-blue-700 text-white": styleType === "dark",
              "border border-blue-600 text-blue-600 hover:bg-blue-50":
                styleType !== "dark",
            }
          )}
        >
          {ctaText}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>

      {styleType === "dark" && (
        <Globe className="w-96 h-96 absolute -bottom-20 -right-20 text-blue-500/20" />
      )}

      {styleType === "light_image" && (
        <div className="w-40 h-40 bg-pink-100 rounded-full absolute -top-10 right-0" />
      )}
    </div>
  );
};

const HeroSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const GAP = 24;

  const getScrollDistance = () => {
    if (firstCardRef.current) {
      return firstCardRef.current.clientWidth + GAP;
    }
    return 520 + GAP;
  };

  const scroll = (direction: "prev" | "next") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const SCROLL_DISTANCE = getScrollDistance();
    const newIndex =
      direction === "next"
        ? Math.min(activeIndex + 1, bannerData.length - 1)
        : Math.max(activeIndex - 1, 0);

    container.scrollTo({
      left: newIndex * SCROLL_DISTANCE,
      behavior: "smooth",
    });

    setActiveIndex(newIndex);
  };

  const handleDotClick = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.scrollTo({
      left: index * getScrollDistance(),
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const newIndex = Math.round(container.scrollLeft / getScrollDistance());
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
    };
  }, [activeIndex]);

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className={cn(
              "flex space-x-6 overflow-x-scroll snap-x snap-mandatory pb-4",
              "[scrollbar-width:none] [-ms-overflow-style:none]",
              "[&::-webkit-scrollbar]:hidden",
              "px-4 sm:px-6 lg:px-8",
              "lg:ml-[-1rem] lg:mr-[-1rem]"
            )}
          >
            {bannerData.map((banner, index) => (
              <div
                key={banner.id}
                ref={index === 0 ? firstCardRef : null}
                className={cn(
                  "snap-start flex-shrink-0",
                  index === 0 && "first:ml-0 lg:first:ml-8"
                )}
              >
                <BannerCard {...banner} />
              </div>
            ))}

            <div className="flex-shrink-0 w-8 lg:w-4" />
          </div>

          {/* Arrows */}
          <div className="absolute inset-y-0 w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 pointer-events-none">
            <button
              onClick={() => scroll("prev")}
              disabled={activeIndex === 0}
              className={cn(
                "p-2 bg-white/70 backdrop-blur rounded-full shadow-lg pointer-events-auto transition-opacity",
                "lg:p-3 lg:shadow-xl lg:ml-[-1rem]",
                activeIndex === 0 && "opacity-50"
              )}
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>

            <button
              onClick={() => scroll("next")}
              disabled={activeIndex === bannerData.length - 1}
              className={cn(
                "p-2 bg-white/70 backdrop-blur rounded-full shadow-lg pointer-events-auto transition-opacity",
                "lg:p-3 lg:shadow-xl lg:mr-[-1rem]",
                activeIndex === bannerData.length - 1 && "opacity-50"
              )}
            >
              <ArrowRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-start space-x-2 mt-4 pl-4 sm:pl-6 lg:pl-8">
          {bannerData.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={cn(
                "h-2 rounded-full cursor-pointer transition-all duration-300",
                index === activeIndex
                  ? "bg-gray-300 w-6"
                  : "bg-gray-700 w-2 hover:bg-gray-400"
              )}
            />
          ))}
        </div>

        <div className="flex items-center justify-center">
          <TrustBadges />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
