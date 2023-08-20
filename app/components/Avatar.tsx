"use client";

import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      width={30}
      height={30}
      alt="avatar"
      src="/images/placeholder.jpg"
      className="rounded-full"
    />
  );
};

export default Avatar;
