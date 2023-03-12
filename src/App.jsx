import React from 'react';
import { useState } from 'react';
import Header from './components/layout/header';
import Foods from './components/meals/Foods';
import Cart from './components/cart/Cart';


function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  }

  const hideCartHandler = () => {
    setCartIsShow(false);
  }

  return (
    <>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Foods />
      </main>
    </>
  )
}

export default App;
