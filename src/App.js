import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/pagesComponents/header/Header";
import Home from "./components/pages/home/index";
import Products from "./components/pages/products/index";
import Footer from "./components/pagesComponents/footer/Footer";
import Overlay from "./components/pagesComponents/overlay/Overlay";
import Admin from "./components/pages/admin/index";
import ItemDetail from "./components/pages/itemDetail/index";
import Cart from "./components/pages/cart";
import BuyForm from "./components/pages/buyForm";
import Info from "./components/pages/info";
import { useState } from "react";
import { CartProvider } from './CartContext'


function App() {
  
  const [openOver, setOpenOver]= useState(false)
  
  return (
    <div className="App">
      <CartProvider >
        <Header over={(e)=>{setOpenOver(e)}}/>
          <Routes>
              <Route  path="/" exact element={<Home />}/>
              <Route  path="/home" exact element={<Home />}/>
              <Route  path="home/products/:id" exact element={<Products />}/>
              <Route  path="home/admin" exact element={<Admin />}/>
              <Route  path="/itemDetail/:id" exact element={<ItemDetail />}/>
              <Route  path="/cart" exact element={<Cart />}/>
              <Route  path="/buyForm" exact element={<BuyForm />}/>
              <Route  path="/info/:data" exact element={<Info />}/>
          </Routes>
          {openOver === true && <Overlay over={(e)=>{setOpenOver(e)}}/>}
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
