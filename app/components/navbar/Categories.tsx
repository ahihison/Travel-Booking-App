"use client";
import { GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { TbBeach } from "react-icons/tb";
import CategoryBox from "../CategoryBox";
import Container from "../Container";
import { usePathname, useSearchParams } from "next/navigation";
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
];
const Categories = () => {
  const param = useSearchParams();
  const category = param?.get("category");
  const pathName = usePathname();
  const isMainPage = pathName === "/";
  if (!isMainPage) return null;
  return (
    <Container>
      <div className="p-4 flex flex-row items-center justify-between overflow-x-auto">
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
    </Container>
  );
};

export default Categories;
