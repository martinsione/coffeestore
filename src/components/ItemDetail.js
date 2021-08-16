import { useState } from "react";
import ItemCount from "./ItemCount";

export default function ItemDetail({ item }) {
  item = { ...item, review: "Oops, there are no reviews of this product yet." };
  const [toggle, setToggle] = useState("description");

  const Btn = ({ name }) => (
    <button
      className={`text-xl md:text-2xl mr-2 md:mr-4 mb-2 md:mb-4 ${
        toggle === name.toLowerCase()
          ? "font-bold  text-black dark:text-white"
          : "opacity-50 hover:opacity-100"
      }`}
      onClick={() => setToggle(name.toLowerCase())}
    >
      {name}
    </button>
  );

  // title, description, price, pictureUrl
  return (
    <div className="max-w-4xl mx-auto p-5 sm:p-0 sm:my-12">
      <div className="flex flex-col sm:flex-row sm:justify-between mb-10 lg:mb-20">
        <div className="md:w-full sm:mr-4 md:mr-12 mb-6 sm:mb-0">
          <img
            className="rounded"
            src={item.pictureUrl}
            alt={item.description}
          />
        </div>
        <div className="flex flex-col md:py-6 lg:py-10">
          <h3 className="font-semibold text-3xl lg:text-4xl mb-2 sm:mb-4">
            {item.title.toUpperCase()}
          </h3>
          <span className="font-bold text-xl lg:text-2xl mb-4">
            ${item.price.toFixed(2)}
          </span>
          <span className="sm:m-auto">
            <ItemCount stock={item.stock} />
          </span>
        </div>
      </div>
      <footer>
        <div className="text-xl md:text-2xl">
          <Btn name="Description" />
          <Btn name="Review" />
        </div>

        <p className="max-w-prose">
          {toggle === "description" ? item.description : item.review}
        </p>
      </footer>
    </div>
  );
}