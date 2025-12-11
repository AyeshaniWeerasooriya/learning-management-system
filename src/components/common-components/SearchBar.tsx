import { SearchIcon } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

const SearchBar = () => {
  return (
    <div
      className={cn(
        "hidden lg:flex flex-grow max-w-2xl items-center bg-gray-100 rounded-full px-4 py-2 border border-transparent focus-within:border-lms-blue transition-colors"
      )}
    >
      <SearchIcon size={20} className={cn("text-lms-gray")} />

      <input
        type="text"
        placeholder="Search for anything"
        className={cn(
          "bg-transparent text-sm text-lms-gray placeholder-lms-gray ml-3 focus:outline-none w-full"
        )}
      />
    </div>
  );
};

export default SearchBar;
