import React, { useState } from "react";

const ProductCard = ({ name, price, image }) => {
  const [amount, setAmount] = useState(0);
  const handleAdd = () => {
    setAmount(amount + 1);
  };
  const handleSubtract = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };
  const handleAddToCart = () => {
    // Logic to add the product to the cart
    console.log("Product added to cart:", name);
  };
  return (
    <div className="flex flex-col items-center pb-4 border-2 border-gray-900 shadow-md rounded-md">
      <img src={image} alt={name} className="object-cover mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600 mb-2">{price}</p>
      <div className="flex items-center mb-2">
        <button className="px-2 py-1 border border-gray-300 bg-gray-200 rounded-md mr-1" onClick={handleSubtract}>
          -
        </button>
        <span className="px-2 py-1 border border-gray-300 rounded-md">
          {amount}
        </span>
        <button className="px-2 py-1 border border-gray-300 bg-gray-200 rounded-md ml-1" onClick={handleAdd}>
          +
        </button>
      </div>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

const Main = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$10",
      image: "https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-6/295979621_5379636055436772_7978878473137794118_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=Bu3k2hIgQlUAX-hFgdq&_nc_ht=scontent.fhan9-1.fna&oh=00_AfCrpA6-M3vKAzKRP1nsKoNfE3Ak3sGHN2CW05PWr4gaog&oe=64A84324",
    },
    {
      id: 1,
      name: "Product 1",
      price: "$10",
      image: "https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-6/295979621_5379636055436772_7978878473137794118_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=Bu3k2hIgQlUAX-hFgdq&_nc_ht=scontent.fhan9-1.fna&oh=00_AfCrpA6-M3vKAzKRP1nsKoNfE3Ak3sGHN2CW05PWr4gaog&oe=64A84324",
    },
    {
      id: 1,
      name: "Product 1",
      price: "$10",
      image: "https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-6/295979621_5379636055436772_7978878473137794118_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=Bu3k2hIgQlUAX-hFgdq&_nc_ht=scontent.fhan9-1.fna&oh=00_AfCrpA6-M3vKAzKRP1nsKoNfE3Ak3sGHN2CW05PWr4gaog&oe=64A84324",
    },
    {
      id: 1,
      name: "Product 1",
      price: "$10",
      image: "https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-6/295979621_5379636055436772_7978878473137794118_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=Bu3k2hIgQlUAX-hFgdq&_nc_ht=scontent.fhan9-1.fna&oh=00_AfCrpA6-M3vKAzKRP1nsKoNfE3Ak3sGHN2CW05PWr4gaog&oe=64A84324",
    },
    {
      id: 1,
      name: "Product 1",
      price: "$10",
      image: "https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-6/295979621_5379636055436772_7978878473137794118_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=Bu3k2hIgQlUAX-hFgdq&_nc_ht=scontent.fhan9-1.fna&oh=00_AfCrpA6-M3vKAzKRP1nsKoNfE3Ak3sGHN2CW05PWr4gaog&oe=64A84324",
    },
    {
      id: 1,
      name: "Product 1",
      price: "$10",
      image: "https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-6/295979621_5379636055436772_7978878473137794118_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=Bu3k2hIgQlUAX-hFgdq&_nc_ht=scontent.fhan9-1.fna&oh=00_AfCrpA6-M3vKAzKRP1nsKoNfE3Ak3sGHN2CW05PWr4gaog&oe=64A84324",
    },

  ];

  return (
    <div className="flex container mx-32 my-20">
      <div className="w-3/4 px-10">
        <div className="grid grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
      <div className="w-1/4 p-4 bg-gray-200 rounded-xl relative h-72 boder-2">
        <div className="flex justify-center bg-gray-400 absolute top-0 left-0 right-0 py-4 rounded-t-xl boder-gray-700">
          <h1 className="font-bold">Các sản phẩm bạn đã chọn</h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
