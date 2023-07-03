import React, { useState } from "react";

const ProductCard = ({ name, price, image, addToCart }) => {
  return (
    <div className="flex flex-col items-center pb-4 border-2 border-gray-900 shadow-md rounded-md">
      <img src={image} alt={name} className="object-cover mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600 mb-2">{price}</p>
      <button className="px-4 py-2 rounded-md border-2 border-gray-500 font-semibold" onClick={() => addToCart(name, price)}>
        Add to Cart
      </button>
    </div>
  );
};

const CartItem = ({ name, price, amount }) => {
  return (
    <div className="border-2 border-lightblack rounded-xl m-4 p-4">
      <div className="flex flex-row items-center">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">{name}</h1>
          <h2>
            <span>Số lượng: </span>
            <span><b>{amount}</b></span>
          </h2>
        </div>
        <div className="ml-auto">
          <h1 className="text-right"><b>{price * amount}$</b></h1>
        </div>
      </div>
    </div>
  );
};

const Main = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (name, price) => {
    const existingItem = cartItems.find((item) => item.name === name);
    if (existingItem) {
      const updatedItems = cartItems.map((item) => {
        if (item.name === name) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      setCartItems(updatedItems);
    } else {
      const newItem = { name, price: parseFloat(price.replace("$", "")), amount: 1 };
      setCartItems([...cartItems, newItem]);
    }
  };
  

  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$10",
      image: "https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-6/295979621_5379636055436772_7978878473137794118_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=Bu3k2hIgQlUAX-hFgdq&_nc_ht=scontent.fhan9-1.fna&oh=00_AfCrpA6-M3vKAzKRP1nsKoNfE3Ak3sGHN2CW05PWr4gaog&oe=64A84324",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$10",
      image: "https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-6/295979621_5379636055436772_7978878473137794118_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=Bu3k2hIgQlUAX-hFgdq&_nc_ht=scontent.fhan9-1.fna&oh=00_AfCrpA6-M3vKAzKRP1nsKoNfE3Ak3sGHN2CW05PWr4gaog&oe=64A84324",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$10",
      image: "https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-6/295979621_5379636055436772_7978878473137794118_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=Bu3k2hIgQlUAX-hFgdq&_nc_ht=scontent.fhan9-1.fna&oh=00_AfCrpA6-M3vKAzKRP1nsKoNfE3Ak3sGHN2CW05PWr4gaog&oe=64A84324",
    },
    {
      id: 4,
      name: "Product 4",
      price: "$10",
      image: "https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-6/295979621_5379636055436772_7978878473137794118_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=Bu3k2hIgQlUAX-hFgdq&_nc_ht=scontent.fhan9-1.fna&oh=00_AfCrpA6-M3vKAzKRP1nsKoNfE3Ak3sGHN2CW05PWr4gaog&oe=64A84324",
    },
    {
      id: 5,
      name: "Product 5",
      price: "$10",
      image: "https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-6/295979621_5379636055436772_7978878473137794118_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=Bu3k2hIgQlUAX-hFgdq&_nc_ht=scontent.fhan9-1.fna&oh=00_AfCrpA6-M3vKAzKRP1nsKoNfE3Ak3sGHN2CW05PWr4gaog&oe=64A84324",
    },
    {
      id: 6,
      name: "Product 6",
      price: "$10",
      image: "https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-6/295979621_5379636055436772_7978878473137794118_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=Bu3k2hIgQlUAX-hFgdq&_nc_ht=scontent.fhan9-1.fna&oh=00_AfCrpA6-M3vKAzKRP1nsKoNfE3Ak3sGHN2CW05PWr4gaog&oe=64A84324",
    },
  ];

  return (
    <div className="flex container mx-32 my-20">
      <div className="w-3/4 px-10">
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
      <div className="w-1/4 p-4 bg-gray-200 rounded-xl relative border-2 border-lightblack">
        <div className="flex justify-center bg-gray-400 absolute top-0 left-0 right-0 py-4 rounded-t-xl border-b-2 border-lightblack">
          <h1 className="font-bold">Các sản phẩm bạn đã chọn</h1>
        </div>
        <div className="flex flex-col my-8 mt-12">
          {cartItems.map((item, index) => (
            <CartItem
              key={index}
              name={item.name}
              price={item.price}
              amount={item.amount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
