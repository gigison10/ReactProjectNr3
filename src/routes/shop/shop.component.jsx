// import SHOP_DATA from "./shop-data.json";
import { useContext } from "react";
import { ProductContext } from "../../context/products.context";
import "./shop.styles.scss";
import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
