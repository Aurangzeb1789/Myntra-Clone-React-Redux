import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Product from "./Components/Product";
import { useState } from "react";
import Bags from "./Components/Bag";

function App() {
  const [bag, setbag] = useState(true);

  return (
    <>
      <Header setbag={setbag}></Header>
      <main>{bag ? <Product></Product> : <Bags></Bags>}</main>
      <Footer></Footer>
    </>
  );
}

export default App;
