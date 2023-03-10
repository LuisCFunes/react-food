import Card from "../ui/Card";
import FoodItem from "./MealItem/FoodItem";
import Title from "../layout/title";
import classes from './AvailableMeals.module.css'


const DUMMY_MEALS = [
  {
    id: 'v1',
    name: 'Tomato',
    description: 'tomatoes are a good source of vitamin C',
    price: 9.00,
  },
  {
    id: 'v2',
    name: 'Lettuce',
    description: 'Most lettuce varieties are eaten fresh and are served as the base of green salads',
    price: 12.5,
  },
  {
    id: 'v3',
    name: 'Carrot',
    description: 'Wild carrot is native to Eurasia',
    price: 10.99,
  },
  {
    id: 'v4',
    name: 'Potato',
    description: 'Grown for its starchy edible tubers',
    price: 7.99,
  },
];

const AvailableVegetables = () => {
  const carrotList = DUMMY_MEALS.map(carrot =>
    <FoodItem
      key={carrot.id}
      name={carrot.name}
      description={carrot.description}
      price={carrot.price}
    />)

  return <section id="Meals" className={classes.meals}>
    <Title id={"Vegetable"} title="Vegetable" />
    <Card>
      <ul>{carrotList}</ul>
    </Card>
  </section>
};

export default AvailableVegetables;