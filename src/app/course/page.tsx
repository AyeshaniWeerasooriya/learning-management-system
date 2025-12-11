"use client";

import React, { useState } from "react";
import {
  User,
  Star,
  ChevronDown,
  ChevronUp,
  PlayCircle,
  ShoppingBag,
  X,
} from "lucide-react";
import Breadcrumb from "@/components/common-components/Breadcrumb";
import { cn } from "@/lib/utils";

interface Module {
  id: number;
  name: string;
  duration: string;
  lessons: string[];
}

interface CourseData {
  name: string;
  instructorName: string;
  price: number;
  discountPrice?: number;
  purchases: number;
  features: {
    modules: number;
    videos: number;
    duration: string;
    level: string;
  };
  shortDescription: string;
  whatYouWillLearn: string[];
  skillsGained: string[];
  modules: Module[];
}

// ---------- Mock Data ----------
const mockCourseData: CourseData = {
  name: "Mastering Data Analysis with Microsoft Power BI",
  instructorName: "Sarah Chen",
  price: 199.99,
  discountPrice: 99.99,
  purchases: 155,
  features: {
    modules: 5,
    videos: 75,
    duration: "15h 30m",
    level: "Beginner",
  },
  shortDescription:
    "Learn to transform raw data into meaningful insights. This comprehensive course covers data modeling, visualization, and advanced report creation using Power BI.",
  whatYouWillLearn: [
    "Build compelling data models and relationships.",
    "Design and publish interactive dashboards.",
    "Write complex DAX formulas for advanced calculations.",
    "Connect to various data sources (SQL, Excel, Cloud).",
    "Prepare for the Microsoft PL-300 Certification.",
  ],
  skillsGained: [
    "Power BI",
    "Data Modeling",
    "DAX",
    "Data Visualization",
    "ETL",
  ],
  modules: [
    {
      id: 1,
      name: "Module I: Introduction and Data Connections",
      duration: "3h 15m",
      lessons: [
        "Lesson 1.1: Power BI Desktop Overview",
        "Lesson 1.2: Connecting to Local Data Sources",
        "Lesson 1.3: Connecting to Cloud Data Sources",
      ],
    },
    {
      id: 2,
      name: "Module II: Data Transformation and Cleaning (Power Query)",
      duration: "4h 00m",
      lessons: [
        "Lesson 2.1: The Power Query Editor Interface",
        "Lesson 2.2: Merging and Appending Queries",
        "Lesson 2.3: Unpivoting Data and Data Types",
      ],
    },
    {
      id: 3,
      name: "Module III: Data Modeling and Relationships",
      duration: "3h 30m",
      lessons: [
        "Lesson 3.1: Star Schema vs. Snowflake Schema",
        "Lesson 3.2: Creating and Managing Relationships",
        "Lesson 3.3: Hiding/Displaying Columns and Measures",
      ],
    },
  ],
};

const CourseModule: React.FC<{ module: Module }> = ({ module }) => {
  const [isOpen, setIsOpen] = useState(module.id === 1);

  return (
    <div className="border border-gray-200 rounded-lg mb-2">
      <button
        className={cn(
          "flex justify-between items-center w-full p-4 text-left font-semibold transition duration-150",
          isOpen ? "text-blue-600" : "text-gray-800 hover:bg-gray-50"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          {module.name}
          <span className="ml-3 text-sm font-normal text-gray-500">
            ({module.duration})
          </span>
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-blue-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <ul className="p-4 pt-0 space-y-2 text-sm text-gray-600 border-t border-gray-100 bg-white">
          {module.lessons.map((lesson, index) => (
            <li key={index} className="flex items-center">
              <PlayCircle className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
              {lesson}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const SkillTag: React.FC<{ skill: string }> = ({ skill }) => (
  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mr-2 mb-2">
    {skill}
  </span>
);

const StickyBuyBox: React.FC<{ data: CourseData }> = ({ data }) => (
  <div className="lg:sticky lg:top-24 border border-gray-200 rounded-xl shadow-lg p-6 bg-white w-full">
    <div className="bg-gray-100 h-40 flex items-center justify-center rounded-lg mb-6">
      <PlayCircle className="w-12 h-12 text-gray-400 cursor-pointer hover:text-gray-600 transition" />
    </div>

    <div className="flex items-end justify-start mb-4">
      {data.discountPrice && (
        <span className="text-3xl font-bold text-red-600 mr-2">
          ${data.discountPrice}
        </span>
      )}
      <span
        className={cn(
          data.discountPrice
            ? "line-through text-gray-500"
            : "font-bold text-gray-900",
          "text-xl"
        )}
      >
        ${data.price}
      </span>
    </div>

    <button className="w-full py-3 mb-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
      <ShoppingBag className="w-5 h-5 mr-2" />
      Buy Now
    </button>
    <p className="text-center text-xs text-gray-500 mb-6">
      Join {data.purchases}+ Purchases
    </p>

    <div className="text-center text-sm text-gray-600 border-t border-gray-100 pt-4">
      <p className="font-medium">Access with a premium plan</p>
      <p className="text-blue-600 font-bold cursor-pointer hover:text-blue-700 mt-1">
        SEE PLANS & PRICING
      </p>
    </div>
  </div>
);

// ---------- Main Page ----------

const CourseDetailsPage: React.FC = () => {
  const data = mockCourseData;
  const [showPromo, setShowPromo] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb courseName={data.name} />
      {showPromo && (
        <div className="bg-yellow-500 text-white text-center py-3 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <span className="text-sm font-medium flex-grow">
              🔥 Limited Time Offer: Get 50% off! Promotion ends soon.
            </span>
            <button
              onClick={() => setShowPromo(false)}
              className="ml-4 text-white hover:text-gray-700 transition"
            >
              <X size={25} />
            </button>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="lg:grid lg:grid-cols-3 lg:gap-10">
          <div className="lg:col-span-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
              {data.name}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Instructor:
              <span className="font-semibold text-blue-600 ml-1 cursor-pointer">
                {data.instructorName}
              </span>
            </p>

            {/* Mobile Buy Box */}
            <div className="lg:hidden mb-6 p-4 border border-gray-200 rounded-xl bg-white shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-end">
                    {data.discountPrice && (
                      <span className="text-2xl font-bold text-red-600 mr-2">
                        ${data.discountPrice}
                      </span>
                    )}
                    <span
                      className={cn(
                        data.discountPrice
                          ? "line-through text-gray-500"
                          : "font-bold text-gray-900",
                        "text-lg"
                      )}
                    >
                      ${data.price}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Join {data.purchases}+ satisfied learners
                  </p>
                </div>
                <button className="px-5 py-2.5 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Buy Now
                </button>
              </div>
            </div>

            {/* What You Will Learn */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What you ll learn
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-gray-700">
                {data.whatYouWillLearn.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Star className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Skills */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Skills youll gain
              </h2>
              <div>
                {data.skillsGained.map((skill, index) => (
                  <SkillTag key={index} skill={skill} />
                ))}
              </div>
            </section>

            {/* Modules */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Course Content
              </h2>
              <p className="text-gray-600 mb-6">{data.shortDescription}</p>
              <div>
                {data.modules.map((module) => (
                  <CourseModule key={module.id} module={module} />
                ))}
              </div>
            </section>

            {/* Instructor Section */}
            <section className="mb-10 p-6 border border-gray-200 rounded-xl bg-white shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Instructor
              </h2>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <User className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {data.instructorName}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Data Analyst & Certified Power BI Expert
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-700">
                {data.instructorName} has 10+ years of experience in business
                intelligence and has trained over 5,000 students globally.
              </p>
            </section>

            {/* Member Stories */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Member Stories
              </h2>
              <div className="bg-gray-200 h-40 rounded-xl flex items-center justify-center text-gray-600"></div>
            </section>

            {/* Reviews */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Reviews</h2>
              <div className="border border-gray-300 p-4 rounded-lg text-gray-600 flex justify-between items-center cursor-pointer">
                View All Course Reviews
                <ChevronDown className="w-5 h-5" />
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">FAQ</h2>
              <div className="border border-gray-300 p-4 rounded-lg text-gray-600 flex justify-between items-center cursor-pointer">
                Expand Frequently Asked Questions
                <ChevronDown className="w-5 h-5" />
              </div>
            </section>
          </div>

          {/* Sticky Buy Box */}
          <div className="hidden lg:block lg:col-span-1">
            <StickyBuyBox data={data} />
          </div>
        </div>

        {/* Mobile Bottom Buy Bar */}
        <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-white border-t border-gray-200 shadow-2xl p-4 z-30">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-sm font-normal text-gray-500">Price:</span>
              <div className="flex items-end">
                {data.discountPrice && (
                  <span className="text-xl font-bold text-red-600 mr-1">
                    ${data.discountPrice}
                  </span>
                )}
                <span
                  className={cn(
                    data.discountPrice
                      ? "line-through text-gray-500"
                      : "font-bold text-gray-900",
                    "text-md"
                  )}
                >
                  ${data.price}
                </span>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 text-sm font-semibold text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition">
                Go with Premium Plan
              </button>
              <button className="px-4 py-2 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetailsPage;
