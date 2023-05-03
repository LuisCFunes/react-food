import Card from "../ui/Card"
import FoodItem from "./MealItem/FoodItem";
import Title from "../layout/title";
import classes from './AvailableMeals.module.css'


const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map(meal =>
    <FoodItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />)

  return <section className={classes.meals}>
    <Title ids="Meals" title="Meal" />
    <Card>
      <ul>{mealList}</ul>
    </Card>
  </section>
};

export default AvailableMeals;