import { NAV_ITEMS } from "../constants/links";
import CartWidget from "./CartWidget";

export default function Navbar() {
  return (
    <nav className="sticky top-0 flex justify-between p-4 md:my-5 bg-white dark:bg-black">
      <a href="/">
        <img
          className="w-10"
          src="/images/starbucks-logo.png"
          alt="logo de coffeeshop"
        />
      </a>
      <div className="text-lg flex items-center ">
        {NAV_ITEMS.map((item, key) => (
          <a href={item.href} key={key} className="mr-4 p-1">
            {item.name}
          </a>
        ))}
        <CartWidget />
      </div>
    </nav>
  );
}
