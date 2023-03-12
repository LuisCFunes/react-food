import { Link } from 'react-router-dom';
import foodImg from '../../assets/foodHeader.jpg';
import classes from './header.module.css';
import HeaderCartButton from './HeaderCardButton';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactFood</h1>
        <nav>
          <ul>
            <li>
              <a href='#Meal'>Meal</a>
            </li>
            <li>
              <a href='#Fruit'>Fruit</a>
            </li>
            <li><a href="#Vegetable">Vegetable</a></li>
            <li><HeaderCartButton onClick={props.onShowCart} /></li>
          </ul>
        </nav>
      </header>
      <div className={classes['main-image']}>
        <img src={foodImg} alt='A table full of delicious food!' />
      </div>
    </>
  )
}

export default Header;