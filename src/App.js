import { Fragment , useState } from "react";
import Cart from "./components/Carts/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";


function App() {
  const [cartIsshown , setcartIsshown] = useState(false);

  const showncartHandler = () => {
    setcartIsshown(true);
  }
  
  const hidecartHandler = () => {
    setcartIsshown(false);
  }
  

  return (
    <Fragment>
    {cartIsshown &&  <Cart onhidecart={hidecartHandler} />} { /* if cartisshown then show cart */ }
      <Header onshowncart={showncartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
