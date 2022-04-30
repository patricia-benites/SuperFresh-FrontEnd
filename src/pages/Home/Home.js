import { ListOfProducts } from "../../components/ListOfProducts/ListOfProducts";
import { useEffect, useState } from "react";
import { client } from "../../client";
import { Newsletter } from "../../components/Newsletter/Newsletter";

export default function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const result = await client.get("/products/find");
      setProducts(result.data);
    } catch (error) {}
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <ListOfProducts products={products} />
      <Newsletter />
    </div>
  );
}
