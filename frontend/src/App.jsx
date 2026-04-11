import HomePage from "./pages/home/HomePage";
import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import OrdersPage from "./pages/orders/OrdersPage";
import TrackingsPage from "./pages/TrackingsPage";
import PageNotFound from "./pages/PageNotFound";
import "./App.css";
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="tracking" element={<TrackingsPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
