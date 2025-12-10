import React from "react";
import Image from "next/image";

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
  return (
    <div
      className="w-full 
    bg-white rounded-xl overflow-hidden 
    shadow hover:shadow-lg transition-all duration-300 
    border border-gray-100 flex flex-col"
    >
      {/* Image */}
      <div className="relative w-full h-32">
        <Image
          src={course.imageSrc}
          alt={course.title}
          fill
          className="object-cover"
        />
        {/* {course.isBestseller && (
          <span className="absolute top-1.5 left-1.5 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
            BESTSELLER
          </span>
        )} */}
      </div>

      {/* Content */}
      <div className="p-3 flex-1 flex flex-col">
        <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2">
          {course.title}
        </h3>

        <p className="text-[11px] text-gray-500 mb-3 line-clamp-1">
          {course.author}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between text-sm mb-3">
          <span className="font-extrabold text-blue-600">
            ${course.currentPrice.toFixed(2)}
          </span>
          {/* <span className="text-xs text-gray-400 line-through">
            ${course.originalPrice.toFixed(2)}
          </span> */}
        </div>

        {/* Buttons - aligned at bottom */}
        <div className="mt-auto flex gap-2">
          <button className="flex-1 text-[11px] font-semibold border border-gray-300 text-gray-700 py-1.5 rounded-md hover:bg-gray-100 transition">
            View Course
          </button>

          <button className="flex-1 text-[11px] font-semibold bg-blue-600 text-white py-1.5 rounded-md hover:bg-blue-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
