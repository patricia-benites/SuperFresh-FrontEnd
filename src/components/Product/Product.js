import styles from "./Product.module.css";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { client } from "../../client";
import { useContext } from "react";
import { AuthContext } from "../../context/context";


export function Product({ id, image, title, description, price }) {
  const { user } = useContext(AuthContext);

  const addToCart = async () => {
    const existingCart = await client.get(`/carts/find/${user._id}`)
    if (existingCart) {
      const products = existingCart.data.products
      products.push({"productId":`${id}`})
      const result = await client.patch(`/carts/${existingCart.data._id}`, { "products": products})
    } else {
      const result = await client.post("/carts", {"userId":user._id, "products":[{"productId":`${id}`}]})
    }

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

  
