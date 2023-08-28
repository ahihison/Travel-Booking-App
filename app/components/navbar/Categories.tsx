"use client";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import CategoryBox from "../CategoryBox";
import Container from "../Container";
import { usePathname, useSearchParams } from "next/navigation";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useEffect, useRef, useState } from "react";
import { set } from "react-hook-form";
const categoriesList = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property to close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This property has a pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on an island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is close to a lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing activites!",
  },
  {
    label: "Castle",
    icon: GiCastle,
    description: "This property is in a castle!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property has camping activites!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property has camping activites!",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This property is in a cave!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in the Barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is luxurious!",
  },
];
const Categories = () => {
  const param = useSearchParams();
  const category = param?.get("category");
  const pathName = usePathname();
  const isMainPage = pathName === "/";
  if (!isMainPage) return null;
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null); // Tạo một useRef cho phần tử chứa danh sách
  const [isDragging, setIsDragging] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const handleScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      console.log(scrollLeft);
      setCanScrollPrev(scrollLeft > 0);

      setCanScrollNext(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    handleScroll(); // Initial check
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);

      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
      };
    }
  }, [scrollContainerRef.current]);
  const stopDragging = () => {
    setIsDragging(false);
  };
  const dragStart = (e: any) => {
    setIsDragging(true);
    startX.current = e.pageX;
    startScrollLeft.current = e.currentTarget.scrollLeft;
  };

  const dragging = (e: any) => {
    if (!isDragging) return;
    const scrollContainer = e.currentTarget; // Lấy phần tử đang chứa chứa scrollable content

    scrollContainer.scrollLeft =
      startScrollLeft.current - e.pageX + startX.current; // Thay đổi giá trị này để điều chỉnh khoảng cách cuộn
  };
  const handlePrev = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
        scrollContainerRef.current.scrollLeft -= Math.floor(clientWidth / 2); // Thay đổi giá trị này để điều chỉnh khoảng cách cuộn
      }
    }
  };
  const handleNext = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const { clientWidth } = scrollContainer;
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += Math.floor(clientWidth / 2); // Thay đổi giá trị này để điều chỉnh khoảng cách cuộn
      }
    }
  };
  return (
    <Container>
      {canScrollPrev && (
        <div className=" absolute top-[45%] translate-y-[50%] bg-red p-3 bg-white opacity-70 border-none scroll-smooth">
          <GrFormPrevious
            onClick={() => {
              handlePrev();
            }}
            size={32}
            className="rounded-full border-2  hover:shadow-md cursor-pointer  "
          />
        </div>
      )}

      <div
        ref={scrollContainerRef}
        className={`p-4 flex flex-row items-center justify-between scroll-smooth overflow-x-hidden ${
          isDragging ? "cursor-grabbing" : ""
        } ${isDragging ? "select-none" : ""}`}
        onMouseMove={(e) => dragging(e)}
        onMouseDown={(e) => {
          dragStart(e);
        }}
        onMouseUp={() => {
          stopDragging();
        }}
      >
        {categoriesList.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            description={item.description}
            selected={category == item.label}
          />
        ))}
      </div>
      {canScrollNext && (
        <div className=" absolute top-[45%] translate-y-[50%] lg:right-16 right-1  bg-white opacity-70 border-none p-3">
          <MdNavigateNext
            onClick={() => {
              handleNext();
            }}
            size={32}
            className="rounded-full border-2 hover:shadow-md cursor-pointer  "
          />
        </div>
      )}
    </Container>
  );
};

export default Categories;