import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/pagesComponents/header/Header";
import Home from "./components/pages/home/index";
import Products from "./components/pages/products/index";
import Footer from "./components/pagesComponents/footer/Footer";
import Overlay from "./components/pagesComponents/overlay/Overlay";
import Admin from "./components/pages/admin/index";
import Cart from "./components/pages/cart";
import { useState } from "react";

function App() {

  const [openOver, setOpenOver]= useState(false)

  return (
    <div className="App">
      <Header over={(e)=>{setOpenOver(e)}}/>
        <Routes>
          <Route  path="/" exact element={<Home />}  />
          <Route  path="/home" exact element={<Home />}  />
          <Route  path="home/products/:id" exact element={<Products/>}/>
          <Route  path="home/admin" exact element={<Admin/>}/>
          <Route  path="/home/products/Hierbas/car/:id" exact element={<Cart/>}/>
        </Routes>
        {openOver === true && <Overlay over={(e)=>{setOpenOver(e)}}/>}
      <Footer />
    </div>
  );
}

export default App;