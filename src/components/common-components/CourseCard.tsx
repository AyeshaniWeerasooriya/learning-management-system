"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface CourseCardData {
  id: number;
  imageSrc: string;
  title: string;
  author: string;
  rating: number;
  reviewCount: number;
  currentPrice: number;
  originalPrice: number;
  isPremium: boolean;
  isBestseller: boolean;
}

const course: CourseCardData = {
  id: 101,
  imageSrc: "/images/c-programming.png",
  title: "C Programming For Beginners - Master the C Language",
  author: "Tim Buchalka's Learn Programming",
  rating: 4.4,
  reviewCount: 39901,
  currentPrice: 11.99,
  originalPrice: 69.99,
  isPremium: true,
  isBestseller: true,
};

const CourseCard: React.FC = () => {
  const router = useRouter();

  return (
    <div
      className={cn(
        "w-full bg-white rounded-xl overflow-hidden shadow transition-all duration-300",
        "border border-gray-100 flex flex-col cursor-pointer hover:shadow-lg"
      )}
    >
      <div className={cn("relative w-full h-32")}>
        <Image
          src={course.imageSrc}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>

      <div className={cn("p-3 flex-1 flex flex-col")}>
        <h3 className={cn("text-sm font-bold text-gray-900 mb-1 line-clamp-2")}>
          {course.title}
        </h3>

        <p className={cn("text-[11px] text-gray-500 mb-3 line-clamp-1")}>
          {course.author}
        </p>

        <div className={cn("flex items-center justify-between text-sm mb-3")}>
          <span className={cn("font-extrabold text-blue-600")}>
            ${course.currentPrice.toFixed(2)}
          </span>
        </div>

        <div className={cn("mt-auto flex gap-2")}>
          <button
            onClick={() => router.push("/course")}
            className={cn(
              "flex-1 text-[11px] font-semibold border border-gray-300 text-gray-700 py-1.5 rounded-md",
              "hover:bg-gray-100 transition"
            )}
          >
            View Course
          </button>

          <button
            onClick={() => router.push("/checkout")}
            className={cn(
              "flex-1 text-[11px] font-semibold py-1.5 rounded-md",
              "bg-blue-600 text-white hover:bg-blue-700 transition"
            )}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
