import React from 'react';
import {Product as Product_startFromUpperCase} from "./components/Product";
import {products} from "./data/products";

function App() {
  return (
   <div className="container mx-auto max-w-2xl pt-5">
     <Product_startFromUpperCase product={ products[0] }/>
     <Product_startFromUpperCase product={ products[1] }/>
   </div>
  )
}

export default App;
