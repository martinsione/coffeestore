import { useRef, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-router-dom";

const CATEGORIES = [
  {
    name: "Coffe beans",
    children: [
      {
        name: "Decaffeinated coffee",
        href: "/category/decaffeinated",
      },
      {
        name: "Flavored Coffees",
        href: "/category/flavored",
      },
      {
        name: "Classic Grains",
        href: "/category/classic-beans",
      },
      {
        name: "Special Grains",
        href: "/category/special-beans",
      },
    ],
  },
];

export default function Sidebar() {
  const [toggle, setToggle] = useState(false);
  const [height, setHeight] = useState("0px");
  const content = useRef("0px");
  const handleClick = () => {
    setToggle(toggle ? false : true);
    setHeight(toggle ? "0px" : `${content.current.scrollHeight}px`);
  };

  return (
    <div className="flex flex-col rounded bg-gray-100 dark:bg-gray-900 py-3 px-5">
      <div
        className="flex justify-between items-center font-bold text-xl cursor-pointer py-2"
        onClick={handleClick}
      >
        <h4>Categories</h4>
        <button
          aria-label="Toggle visibility"
          className={`text-2xl transform transition duration-500 
          ${toggle && "rotate-180"}`}
        >
          <IoChevronDown />
        </button>
      </div>
      <div
        className="overflow-hidden transition-all duration-500"
        style={{ maxHeight: `${height}` }}
        ref={content}
      >
        {CATEGORIES.map((category) => (
          <div className="mt-4 lg:mt-8" key={category.name}>
            <h4 className="font-medium text-lg" key={category.name}>
              {category.name}
            </h4>
            {category.children.map((categoryChildren) => (
              <Link
                className="flex flex-col text-gray-700 dark:text-gray-400 hover:opacity-90 ml-1 mb-1"
                key={categoryChildren.name}
                to={categoryChildren.href}
              >
                {categoryChildren.name}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
