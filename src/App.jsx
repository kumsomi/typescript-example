import { Route, Routes } from "react-router";
import "./App.css";
import { CartPage, ProductsPage } from "./pages";
import { Navbar } from "./components/NavBar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      {/* <ProductsPage />
      <CartPage /> */}
    </>
  );
}

export default App;
