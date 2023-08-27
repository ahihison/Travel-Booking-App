"use client";

import Image from "next/image";

interface AvatarProps {
  image?: string | null;
}
const Avatar = ({ image }: AvatarProps) => {
  return (
    <Image
      width={30}
      height={30}
      alt="avatar"
      src={image ? `${image}` : `/images/placeholder.jpg`}
      className="rounded-full"
    />
  );
};

export default Avatar;
