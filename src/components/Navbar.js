import { Link, useLocation } from "react-router-dom";
import CartWidget from "../components/CartWidget";
import { useCartContext } from "../context/CartContext";
import useTheme from "../hooks/useTheme";
import Search from "./Search";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Cart", href: "/cart" },
  { name: "Orders", href: "/orders" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const { theme, setTheme } = useTheme();
  const { totalItems } = useCartContext();

  return (
    <>
      <nav className="sticky top-0 flex justify-between items-center bg-white dark:bg-black py-2 md:mt-8 z-50">
        <span>
          <Link className="flex justify-center items-center w-10" to="/">
            <img
              className="w-full"
              src="/images/starbucks-logo.png"
              alt="Coffeestore logo"
            />
          </Link>
        </span>
        <Search />
        <div className="flex">
          <CartWidget totalItems={totalItems()} />
        </div>
      </nav>
      <div className="flex justify-between">
        <div>
          {NAV_LINKS.map((navItem) => (
            <Link
              className={`text-lg mr-1 p-1 text-black dark:text-white
          ${pathname === navItem.href ? "font-medium" : "opacity-70"}`}
              key={navItem.name}
              to={navItem.href}
            >
              {navItem.name}
            </Link>
          ))}
        </div>
        <select
          className="border rounded font-medium bg-gray-100 dark:bg-gray-900 focus:outline-none p-0.5"
          onChange={(e) => setTheme(e.target.value)}
          value={theme}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </>
  );
}
