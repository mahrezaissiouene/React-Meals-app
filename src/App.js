import { Fragment , useState } from "react";
import Cart from "./components/Carts/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";


function App() {
  const [cartIsshown , setcartIsshown] = useState(false);

  const showncartHandler = () => {
    setcartIsshown(true);
  }
  
  const hidecartHandler = () => {
    setcartIsshown(false);
  }
  

  return (
    <CartProvider> 
    {cartIsshown &&  <Cart onClose={hidecartHandler} />} { /* if cartisshown then show cart */ }
      <Header onshowncart={showncartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider> 
  );
}

export default App;
