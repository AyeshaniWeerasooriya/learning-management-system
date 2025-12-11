"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string | string[];
}

const faqData: FAQItem[] = [
  {
    question:
      "Does this program help me prepare for the Microsoft PL-300 Certification exam?",
    answer:
      "Yes, this program is specifically designed to cover the core concepts and skills tested in the Microsoft Power BI Data Analyst (PL-300) certification exam. Completing the program and practicing the hands-on labs will significantly prepare you for the certification.",
  },
  {
    question:
      "How do I take the Project Management Professional (PMP) certification exam?",
    answer:
      "The PMP exam is administered by the Project Management Institute (PMI). To take the exam, you must first meet the eligibility requirements (education and experience) and then apply through the PMI website. Once your application is approved, you can schedule your exam at a Pearson VUE testing center.",
  },
  {
    question: "Who is this program for?",
    answer: [
      "If you want to switch or start a career in the field of data analytics.",
      "If you are interested in the field of data analytics, just beginning to work with business intelligence and data analysis solutions and services, or new to Microsoft Power BI.",
    ],
  },
  {
    question: "What prerequisites are needed to enroll?",
    answer:
      "There are no strict prerequisites. A basic understanding of mathematics and computing is helpful, but the program is designed to start from the fundamentals of data analysis.",
  },
  {
    question: "What is the typical completion time for the course?",
    answer:
      "While the program is self-paced, most learners complete the curriculum within 4 to 6 months by dedicating approximately 10 hours per week.",
  },
];

interface FAQPanelProps {
  question: string;
  answer: string | string[];
  isOpen: boolean;
  onToggle: () => void;
}

const FAQPanel: React.FC<FAQPanelProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => (
  <div className="border-b border-gray-200 py-4">
    <button
      className="flex justify-between items-center w-full text-left focus:outline-none"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${question.replace(/\s/g, "-")}`}
    >
      <span className="font-semibold text-gray-800 text-base flex-grow pr-4">
        {question}
      </span>
      {isOpen ? (
        <ChevronUp className="w-5 h-5 text-blue-600" />
      ) : (
        <ChevronDown className="w-5 h-5 text-gray-500" />
      )}
    </button>
    {isOpen && (
      <div
        id={`faq-answer-${question.replace(/\s/g, "-")}`}
        className="mt-3 text-gray-600 text-sm animate-fade-in"
      >
        {Array.isArray(answer) ? (
          <>
            <p className="mb-2">This program is for you:</p>
            <ul className="list-disc pl-5 space-y-2">
              {answer.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        ) : (
          <p>{answer}</p>
        )}
      </div>
    )}
  </div>
);

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold text-white-900 mb-8">
          Frequently Asked Questions
        </h2>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          {faqData.map((item, index) => (
            <FAQPanel
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={index === openIndex}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        <div className="mt-6 text-center">
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition duration-150 ease-in-out">
            Show all 14 frequently asked questions
            <ChevronDown className="w-4 h-4 inline ml-1 -mt-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
