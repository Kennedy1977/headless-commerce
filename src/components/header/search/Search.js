import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function Search() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`relative flex items-center ${isFocused ? "" : ""}`}>
      <MagnifyingGlassIcon
        className={`rounded-full p-2 w-10 h-10 bg-white hover:bg-sky-200 cursor-pointer ${
          isFocused ? "absolute left-0 bg-gray-200 border-white border-2" : ""
        }`}
        onClick={handleFocus}
      />
      <input
        type="text"
        placeholder="Search..."
        className={`transition-width duration-300 ease-in-out focus:border-sky-500 focus:outline-none grow shrink ${
          isFocused ? "w-2/5 px-12 rounded-full" : "w-0"
        } h-10 ml-2`}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    </div>
  );
}

export default Search;
