import { useBoardStore } from "@/store/BoardStore";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function SearchForm() {
  const [searchString, setSearchString] = useBoardStore((state) => [
    state.searchString,
    state.setSearchString,
  ]);
  return (
    <form
      className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md
            flex-1 md:flex-initial"
    >
      <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
      <input
        type="text"
        placeholder="Search"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        className="flex-1 outline-none p-2"
      />
      <button type="submit" hidden>
        Search
      </button>
    </form>
  );
}

export default SearchForm;
