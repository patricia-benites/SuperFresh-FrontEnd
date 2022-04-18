import { Product } from "../Product/Product";
import styles from "./ListOfProducts.module.css"

export function ListOfProducts({ products }) {
  return (
    <div className={styles.productsContainer}>
      {products.map((product) => {
        return (
          <Product
            key={product._id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        );
      })}
    </div>
  );
}
