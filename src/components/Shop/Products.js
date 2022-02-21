import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const DUMMY_DATA = [
    {
      id: 1,
      title: "Vinegar - Cider",
      price: 997,
      description: "Other glossotomy",
    },
    {
      id: 2,
      title: "Coke - Classic, 355 Ml",
      price: 845,
      description: "LITT les hd/nck,guidance",
    },
    {
      id: 3,
      title: "Juice - Apple, 341 Ml",
      price: 398,
      description: "Contr phlebogram-hd/neck",
    },
    {
      id: 4,
      title: "Broom - Corn",
      price: 231,
      description: "Removal brain stim lead",
    },
    {
      id: 5,
      title: "Pike - Frozen Fillet",
      price: 664,
      description: "Post nasal pac for epist",
    },
    {
      id: 6,
      title: "Tortillas - Flour, 12",
      price: 705,
      description: "Man replac invert uterus",
    },
    {
      id: 7,
      title: "Bagel - Plain",
      price: 728,
      description: "Remove eye prosthesis",
    },
    {
      id: 8,
      title: "Wine - Fume Blanc Fetzer",
      price: 883,
      description: "Appl ext fix-chest cage",
    },
    {
      id: 9,
      title: "Sterno - Chafing Dish Fuel",
      price: 686,
      description: "Remov intralum gastr FB",
    },
    {
      id: 10,
      title: "Tomatoes - Orange",
      price: 113,
      description: "Incisional hernia repair",
    },
  ];
  return (
    <section classtitle={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
