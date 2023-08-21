import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="https://i.imgur.com/XteLNW4.png"
      alt="Trello Logo Clone"
      width={300}
      height={100}
      className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
    />
  );
};

export default Logo;
