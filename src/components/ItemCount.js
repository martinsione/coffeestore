import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import useCounter from "../hooks/useCounter";

export default function ItemCount({
  initialValue = 1,
  stock,
  title,
  onAdd = () => {},
}) {
  const { count, increment, decrement } = useCounter(initialValue, stock);

  const handleAdd = () => count > 0 && onAdd(count);

  return (
    <div className="flex flex-col min-w-0">
      <div className="my-1 p-2 rounded border bg-gray-100 dark:bg-gray-800">
        <p className="text-center text-gray-700 dark:text-gray-300">{title}</p>
        <div className="my-2 p-2 flex rounded border bg-white dark:bg-gray-900">
          <button className="text-xl" onClick={decrement} type="button">
            <AiOutlineMinus />
          </button>
          <input
            className="w-full text-center font-semibold dark:bg-gray-900 focus:outline-none"
            readOnly
            value={count}
          />
          <button className="text-xl" onClick={increment} type="button">
            <AiOutlinePlus />
          </button>
        </div>
      </div>
      <button
        disabled={stock < 1 || count < 1}
        className="p-2 rounded border text-gray-100 bg-blue-500 dark:bg-indigo-900 disabled:opacity-50 disabled:text-white dark:disabled:text-white"
        onClick={handleAdd}
      >
        {stock < 1 ? "Sold out" : "Add to cart"}
      </button>
    </div>
  );
}
