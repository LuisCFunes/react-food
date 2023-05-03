import Card from "../ui/Card"
import FoodItem from "./MealItem/FoodItem";
import Title from "../layout/title";
import classes from './AvailableMeals.module.css'


const DUMMY_FRUITS = [
    {
        id: 'f1',
        name: 'Apple',
        description: 'A red and juicy apple',
        price: 5.99,
    },
    {
        id: 'f2',
        name: 'Banana',
        description: 'One of the most important fruit crops of the world',
        price: 7.00,
    },
    {
        id: 'f3',
        name: 'Mangoes',
        description: 'Tropical and exotic',
        price: 10.00,
    },
    {
        id: 'f4',
        name: 'Watermelons',
        description: 'succulent fruit and vinelike plant of the gourd family',
        price: 24.99,
    },
];

const AvailableFruits = () => {
    const fruitList = DUMMY_FRUITS.map(fruit =>
        <FoodItem
            key={fruit.id}
            id={fruit.id}
            name={fruit.name}
            description={fruit.description}
            price={fruit.price}
        />)

    return <section className={classes.meals}>
        <Title ids="Fruits" title="Fruit" />
        <Card>
            <ul>{fruitList}</ul>
        </Card>
    </section >
};

export default AvailableFruits;