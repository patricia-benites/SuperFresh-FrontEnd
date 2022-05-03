import styles from "./Product.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { client } from "../../client";
import { useContext } from "react";
import { AuthContext } from "../../context/context";

export function Product({ id, image, title, description, price }) {
  const { user } = useContext(AuthContext);

  const addToCart = async () => {
    const existingCart = await client.get(`/carts/find/${user._id}`);
    console.log(existingCart);
    let updatedProducts;
    if (existingCart.data) {
      const products = existingCart.data.products;
      console.log(products);
      const isProductPresent = products.some(
        (product) => product.productId._id === id
      );
      console.log(isProductPresent);
      if (isProductPresent) {
        updatedProducts = products.map((product) => {
          if (product.productId._id === id) {
            product.quantity = product.quantity += 1;
          }
          return product;
        });
      } else {
        updatedProducts = [...products, { productId: `${id}` }];
      }
      await client.patch(`/carts/${existingCart.data._id}`, {
        userId: user._id,
        products: updatedProducts,
      });
    } else {
      await client.post("/carts", {
        userId: user._id,
        products: [{ productId: `${id}` }],
      });
    }
  };

  return (
    <div className={styles.productContainer}>
      <div className={styles.imageContainer}>
        <img src={image} alt={image}></img>
      </div>
      <div className={styles.infoContainer}>
        <h3>{title}</h3>
        <p>{` € ${price}`}</p>
      </div>
      <div className={styles.iconsContainer}>
      <button><AiOutlineShoppingCart size="1em" onClick={addToCart} /></button>
      </div>
    </div>
  );
}
