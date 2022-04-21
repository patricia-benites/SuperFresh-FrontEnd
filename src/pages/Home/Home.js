import React from "react";
import { Announcement } from "../../components/Announcement/Announcement";
import Navbar from "../../components/Navbar/Navbar";
import { ListOfProducts } from "../../components/ListOfProducts/ListOfProducts";
import { useEffect, useState } from "react";
import { client } from "../../client";
import { Footer } from "../../components/Footer/Footer";
import { Newsletter } from "../../components/Newsletter/Newsletter";

export default function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const result = await client.get("/products/find");
    setProducts(result.data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Navbar />
      <Announcement />

      <ListOfProducts products={products} />
      {/* <code>{JSON.stringify(user.firstName)}</code> */}
      {/* <Slider /> */}
      <Newsletter/>
      <Footer />
    </div>
  );
}
