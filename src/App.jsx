import React from 'react';
import Header from './components/layout/header';
import Foods from './components/meals/Foods';
import Cart from './components/cart/Cart';


function App() {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Foods />
      </main>
    </>
  )
}

export default App;
