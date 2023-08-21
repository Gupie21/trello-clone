"use client";

import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";
import { useBoardStore } from "@/store/BoardStore";

function Header() {
  const [searchString, setSearchString] = useBoardStore((state) => [
    state.searchString,
    state.setSearchString,
  ]);

  return (
    <nav className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-orange-400 to-[#007bc3] rounded-md filter blur-3xl opacity-50 -z-50" />
      <Image
        src="https://i.imgur.com/xdxNGhQ.png"
        alt="Trello Logo Clone"
        width={300}
        height={100}
        className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
      />
      <div className="flex items-center space-x-5 flex-1 justify-end w-full">
        {/* Search Box */}
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
        {/* Avatar */}
        <Avatar name="John Doe" round size="50" color="#007bc3" />
      </div>
    </nav>
  );
}

export default Header;
