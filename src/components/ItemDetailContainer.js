import useFetchItems from "../hooks/useFetchItems";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import NotFound from "./NotFound";

export default function ItemDetailContainer() {
  const item = useFetchItems("products");

  return (
    <>
      {item === "loading" ? (
        <Loader />
      ) : item.title ? (
        <ItemDetail item={item} />
      ) : (
        <NotFound message={`Item was not found.`} />
      )}
    </>
  );
}
