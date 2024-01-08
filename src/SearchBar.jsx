import { CiSearch } from "react-icons/ci";

function SearchBar() {
  return (
    <div className="flex h-[40px] w-[25rem] shrink items-center gap-2 rounded-md bg-slate-100 px-3 text-slate-500">
      <CiSearch />
      <span>Search Features, tutorials,etc.</span>
    </div>
  );
}

export default SearchBar;
