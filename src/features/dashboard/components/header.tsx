import { Link } from "react-router-dom";
import { SearchBar } from "./search-bar";
import { useState } from "react";
import { SearchResultList } from "./search-result-list";
import { CircleUser } from "lucide-react";
export const Header = () => {
  const [results, setResults] = useState([]);

  return (
    <header className="w-full fixed border-b border-neutral-700 flex justify-center text-neutral-100 border rounded-lg  my-2">
      <div className="flex w-full justify-between items-center px-4 container py-3 ">
        <Link
          className="flex items-center gap-2 text-neutral-400 hover:text-neutral-100 transition"
          to="/"
        >
          <span className="hidden sm:flex">Logo</span>
        </Link>
        <div className="flex flex-col">
          <SearchBar setResults={setResults} />
          <SearchResultList results={results} />
        </div>
        <div className="flex items-center p-6 h-9 rounded-md border border-neutral-600 hover:bg-neutral-700 transition">
          <div className="flex items-center">
            <div className="relative  w-8">
              <CircleUser />
            </div>
            <span className="mr-3 text-lg font-light">
              Добрый день,
              <span className="mr-3 text-lg font-bold"> Baha</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
