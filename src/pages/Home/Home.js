import React from "react";
import { Announcement } from "../../components/Announcement/Announcement";
import Navbar from "../../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../context/context";
import { ListOfProducts } from "../../components/ListOfProducts/ListOfProducts";
import { useEffect, useState } from "react";
import { client } from "../../client";
import { Footer } from "../../components/Footer/Footer";

export default function Home() {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const result = await client.get("/products/find");
    setProducts(result.data);
    console.log(result.status)
    console.log(products);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Announcement />
      <Navbar/>
      <ListOfProducts products={products}/>
      {/* <code>{JSON.stringify(user.firstName)}</code> */}
      {/* <Slider /> */}
      <Footer/>
    </div>
  );
}
