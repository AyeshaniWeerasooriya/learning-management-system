import StartYourJourneyToday from "@/components/banners/StartYourJourneyToday";
import CourseCard from "@/components/common-components/CourseCard";

import Footer from "@/components/footer/footer";
import HeroSection from "@/components/header/hero-section/HeroSection";
import NavigationBar from "@/components/header/nav/NavigationBar";
import ReviewSection from "@/components/reviews/ReviewSection";
import ExploreCoursesSection from "@/components/sections/ExploreCoursesSection";
import FAQSection from "@/components/sections/FAQSecction";
import NewReleaseSection from "@/components/sections/NewReleaseSection";

import React from "react";

function HomePage() {
  return (
    <div className="max-w-full">
      <HeroSection />
      <ExploreCoursesSection />
      <NewReleaseSection />
      <StartYourJourneyToday />
      <ReviewSection />
      <FAQSection />
    </div>
  );
}

export default HomePage;
