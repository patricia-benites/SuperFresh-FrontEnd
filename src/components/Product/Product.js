import styles from "./Product.module.css";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { client } from "../../client";
import { useContext } from "react";
import { AuthContext } from "../../context/context";


export function Product({ id, image, title, description, price }) {
  const { user } = useContext(AuthContext);
  console.log(user._id)

  const addToCart = async () => {
    const existingCart = await client.get(`/carts/find/${user._id}`)
    const cart = existingCart.data
    console.log(cart)
    const products = cart.products
    console.log(products)
    products.push({"productId":`${id}`})
    if (cart) {
      const result = await client.patch(`/carts/${cart._id}`, { "products": products})
      console.log(result.status);
    }
    // const result = await client.post("/products/find");
  }

  return (
    <div className={styles.productContainer}>
      <div className={styles.imageContainer}>
        <img src={image} alt={image}></img> 
      </div>
      <div className={styles.infoContainer}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{` € ${price}`}</p>
      </div>
      <div className={styles.iconsContainer}>
        <AiOutlineShoppingCart size="1em" onClick={addToCart}/>
        <AiOutlineHeart/>
      </div>
    </div>
  );
}
