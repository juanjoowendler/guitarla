import Header from "./components/Header/Header.jsx";
import Guitar from "./components/Guitar/Guitar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Fragment } from "react";
import useCart from "./hooks/useCart.js";

function App() {
  // useCart
  const {
    data,
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    isEmpty, 
    cartTotal,
  } = useCart();

  return (
    <Fragment>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar} addToCart={addToCart} />
          ))}
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
