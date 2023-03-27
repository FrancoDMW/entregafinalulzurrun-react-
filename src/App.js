import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemListContainer from "./pages/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={<ItemListContainer />}
            />
            <Route
              exact
              path="/categoria/:categoria"
              element={<ItemListContainer />}
            />
            <Route exact path="/detail/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<Checkout />} />
          </Routes>
          <ToastContainer />
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
