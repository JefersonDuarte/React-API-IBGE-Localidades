import React, { useState, useEffect } from "react";
import Endereco from './endereco/endereco'

const Cadastro = () => {

  const [name, setName] = useState('');

  return (
    <>
      <center>
        <fieldset>
          <input ></input>
        </fieldset>
        <Endereco />
      </center>
    </>
  );
}

export default Cadastro;
