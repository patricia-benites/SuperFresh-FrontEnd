import styles from "./Product.module.css"

export  function Product({image, title, description, price}) {
  return (
    <div className={styles.productContainer}>
        <img src={image} alt="image"></img>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{` € ${price}`}</p>
    </div>
  )
}
