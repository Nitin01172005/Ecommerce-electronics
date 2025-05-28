import { MdSearch } from "react-icons/md";
import { IoCartSharp } from "react-icons/io5";
import DarkMode from "../Components/Darkmode";
import Darkmode from "./Darkmode";
import "slick-carousel/slick/slick.css";
import { MdArrowDropDown } from "react-icons/md";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },

  {
    id: 2,
    name: "Shop",
    link: "/#Shop",
  },

  {
    id: 3,
    name: "About",
    link: "/#About",
  },

  {
    id: 4,
    name: "Blogs",
    link: "/#Blogs",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },

  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },

  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white h-20 flex items-center duration-200 z-40">
      <div className="flex container py-4 justify-between w-full">
        <div className="flex justify-between items-center gap-4">
          <a
            href="#"
            className="text-primary font-semibold sm:text-3xl text-2xl tracking-widest"
          >
            ESHOP
          </a>
          <div className="flex items-center gap-4">
            <ul className="flex justify-between items-center gap-4">
              {MenuLinks.map((data, index) => (
                <li
                  key={index}
                  className="text-gray-500 font-semibold hover:text-black"
                >
                  <a
                    href={data.link}
                    className="inline-block px-4 duration-200 dark:hover:text-white"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
              <li className="group relative cursor-pointer">
                <a
                  className="flex text-gray-500 font-semibold hover:text-black  duration-200  items-center "
                  href="#"
                >
                  Quick Links
                  <span>
                    <MdArrowDropDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute invisible z-[999] group-hover:visible ursor-pointer w-[150px] rounded-md bg-white p-2 text-black shadow-md">
                  <ul>
                    {DropdownLinks.map((data) => (
                      <li key={data.id}>
                        <a
                          href={data.link}
                          className="inline-block w-full rounded-md p-2 hover:bg-pink-100"
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between gap-5 items-center ">
          <div className="relative group hidden sm:block">
            <input type="text" placeholder="Search" className="search-bar " />
            <MdSearch className="text-xl text-gray-500 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 group-hover:text-" />
          </div>
          <button className="relative p-3">
            <IoCartSharp className="text-xl text-gray-600 dark:text-gray-400 " />
            <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
              4
            </div>
          </button>
          <button>
            <DarkMode />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
