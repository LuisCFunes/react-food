import React from 'react';
import { useState } from 'react';
import Header from './components/layout/header';
import Foods from './components/meals/Foods';
import Cart from './components/cart/Cart';
import CartProvider from './store/cartProvider';


function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  }

  const hideCartHandler = () => {
    setCartIsShow(false);
  }

  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Foods />
      </main>
    </CartProvider>
  )
}

export default App;
