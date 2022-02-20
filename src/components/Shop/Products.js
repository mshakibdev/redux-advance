import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const DUMMY_DATA = [
    {
      id: 1,
      name: "Vinegar - Cider",
      price: 997,
      description: "Other glossotomy",
    },
    {
      id: 2,
      name: "Coke - Classic, 355 Ml",
      price: 845,
      description: "LITT les hd/nck,guidance",
    },
    {
      id: 3,
      name: "Juice - Apple, 341 Ml",
      price: 398,
      description: "Contr phlebogram-hd/neck",
    },
    {
      id: 4,
      name: "Broom - Corn",
      price: 231,
      description: "Removal brain stim lead",
    },
    {
      id: 5,
      name: "Pike - Frozen Fillet",
      price: 664,
      description: "Post nasal pac for epist",
    },
    {
      id: 6,
      name: "Tortillas - Flour, 12",
      price: 705,
      description: "Man replac invert uterus",
    },
    {
      id: 7,
      name: "Bagel - Plain",
      price: 728,
      description: "Remove eye prosthesis",
    },
    {
      id: 8,
      name: "Wine - Fume Blanc Fetzer",
      price: 883,
      description: "Appl ext fix-chest cage",
    },
    {
      id: 9,
      name: "Sterno - Chafing Dish Fuel",
      price: 686,
      description: "Remov intralum gastr FB",
    },
    {
      id: 10,
      name: "Tomatoes - Orange",
      price: 113,
      description: "Incisional hernia repair",
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((product) => (
          <ProductItem
            key={product.id}
            title={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
