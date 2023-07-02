const Hero = () => { 
  return (
    <div>
      <div className="flex items-center">
        <h1 className="mx-auto mt-32 cool">
          <span data-text="Giỏ " className="mr-4">Giỏ </span>
          <span data-text="đầy " className="mr-4">đầy </span>
          <span data-text="Up">Up </span>
        </h1>
      </div>
      <div className="flex items-center">
        <button className="mx-auto">Mua hàng ngay</button>
      </div>
    </div>
  );
};

export default Hero;
