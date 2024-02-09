import { useState } from "react";
import { Search } from "lucide-react";
export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="mb-3 xl:w-96">
      <div className="relative flex w-full justify-between items-center">
        <input
          type="search"
          className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary w-full mr-3"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />

        {/* <!--Search icon--> */}
        <Search />
      </div>
    </div>
  );
};
