import "./Component.css";

const Component = ({ product }) => {
  return (
    <>
      {product.map((element, index) => (
        <div className="item-box" key={index}>
          <div className="item-image">
            <img src={element.image} alt="" />
          </div>

          <h1>{element.name}</h1> 
          <p>{element.category}</p>

          <h2>₹{element.price}</h2>
          <button>Add To Cart</button>
        </div>
      ))}
    </>
  );
};

export default Component;
