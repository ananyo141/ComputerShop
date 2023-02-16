import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

type Props = {
  filter: string;
  onFilterChange: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
};

const Search = ({ filter, onFilterChange, className }: Props) => {
  return (
    <div className={className}>
      <div className="mx-auto flex w-64 justify-between rounded-full bg-gradient-to-r from-lime-500 to-lime-600 px-1 text-white lg:w-80">
        <input
          type="search"
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
          className="w-full bg-inherit p-2 placeholder:text-white focus:outline-none"
          placeholder="Search..."
        />
        <div className="my-1 rounded-full bg-white p-1">
          <BiSearchAlt2 className="h-6 w-6 text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default Search;
