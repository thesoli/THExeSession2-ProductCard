import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductCard from "./components/ProductCard";
import DiscountCard from "./components/DiscountCard";

function App() {
  const products = [
    {
      id: Math.random(),
      title: "MacBook Pro",
      price: 1599,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-macbook-pro-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696872235281",
    },
    {
      id: Math.random(),
      title: "MacBook Air",
      price: 1299,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-macbook-air-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696863032996",
    },

    {
      id: Math.random(),
      title: "iphone 15 Pro",
      price: 999,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696863030449",
    },

    {
      id: Math.random(),
      title: "iphone 15",
      price: 699,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-iphone-15-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1698188084112",
    },

    {
      id: Math.random(),
      title: "Apple Watch Ultra 2",
      price: 699,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-watch-ultra-2-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1698766696911",
    },
    {
      id: Math.random(),
      title: "Apple Watch Series 9",
      price: 399,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-watch-s9-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696865069259",
    },
  ];

  return (
    <div className="container">
      <DiscountCard />
      {products.map((item) => {
        return (
          <ProductCard
            id={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
          />
        );
      })}
    </div>
  );
}

export default App;
