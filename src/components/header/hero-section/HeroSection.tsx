"use client";
import React from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Flag,
  MonitorPlay,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";

const benefitCards = [
  {
    title: "Launch a new career",
    icon: Flag,
    description: "Start a new path with professional certificates.",
  },
  {
    title: "Gain in-demand skills",
    icon: MonitorPlay,
    description: "Master crucial skills for today's market.",
  },
  {
    title: "Earn a degree",
    icon: GraduationCap,
    description: "Online degrees from world-class universities.",
  },
];

const mainBanners = [
  {
    title: "Start, switch, or advance your career",
    subtitle: "Grow with 10,000+ courses from top organizations",
    buttonText: "Join for Free →",
    buttonLink: "#join-free",
    imageSrc: "/images/hero-illustration-1.png",
  },
  {
    title: "Drive your business forward and empower your talent",
    subtitle: "Train teams with industry-leading experts",
    buttonText: "Try for Business →",
    buttonLink: "#try-business",

    imageSrc: "/images/hero-illustration-2.png",
  },
];

const partnerLogos = [
  { name: "Google", src: "/logos/google.svg" },
  { name: "DeepLearning.AI", src: "/logos/deeplearning.svg" },
  { name: "Stanford University", src: "/logos/stanford.svg" },
  { name: "IBM", src: "/logos/ibm.svg" },
  { name: "Microsoft", src: "/logos/microsoft.svg" },
];

const CarouselDots = ({
  count,
  activeIndex,
}: {
  count: number;
  activeIndex: number;
}) => (
  <div className="flex justify-center space-x-2 py-4">
    {Array.from({ length: count }).map((_, index) => (
      <span
        key={index}
        className={`h-2 w-8 rounded-full transition-all duration-300 ${
          index === activeIndex ? "bg-black" : "bg-gray-300 hover:bg-gray-400"
        }`}
      ></span>
    ))}
  </div>
);

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const currentBanner = mainBanners[activeIndex];

  return (
    <section className=" pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 via-white to-pink-50 shadow-lg">
          <div className="flex items-center justify-between p-8 lg:p-12">
            <div className="lg:w-1/2 ">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
                {mainBanners[0].title}
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                {mainBanners[0].subtitle}
              </p>
              <Link href={mainBanners[0].buttonLink}>
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors shadow-md text-base">
                  {mainBanners[0].buttonText}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <CarouselDots count={mainBanners.length} activeIndex={0} />
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-6 pb-4">
          {benefitCards.map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-1/3 bg-white p-6 rounded-lg border border-gray-100 shadow-md flex items-center transition-shadow hover:shadow-lg cursor-pointer"
            >
              <card.icon size={30} className="text-blue-600 mr-4" />
              <div>
                <h3 className="text-md font-semibold text-gray-900">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500 hidden md:block">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6 pb-10 border-t border-gray-200 mt-4">
          <h2 className="text-lg font-medium text-gray-700 mb-4">
            Learn from 350+ leading universities and companies
          </h2>
          <div className="flex overflow-x-auto whitespace-nowrap space-x-8 items-center py-2">
            {partnerLogos.map((logo) => (
              <div key={logo.name} className="flex-shrink-0">
                <span className="text-xl font-medium text-gray-700 opacity-60 hover:opacity-100 transition-opacity">
                  {logo.name}
                </span>
              </div>
            ))}

            <span className="text-sm font-semibold text-blue-600 flex-shrink-0 cursor-pointer">
              View More →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
