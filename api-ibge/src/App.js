import React, { useState, useEffect } from "react";
import Cadastro from './components/cadastro/cadastro';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const App = () => {

  document.title = 'API IBGE';


  return (
    <>
      <Header />
      <Cadastro />
      <Footer />
    </>
  );
}

export default App;
