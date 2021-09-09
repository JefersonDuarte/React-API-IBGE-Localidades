import React, { useState, useEffect } from "react";
import Endereco from './endereco/endereco'

const Cadastro = () => {


  const fieldsetStyle = {
    border: 'none'
  }

  const [name, setName] = useState('');


  return (
    <>
      <form>
        <center>
          <fieldset style={fieldsetStyle}>
            <label for="name">Nome: </label>
            <input id="name" name="name"></input>
          </fieldset>
          <fieldset style={fieldsetStyle}>
            <label for="surname">Sobreome: </label>
            <input id="surname" name="surname"></input>
          </fieldset>
          <fieldset style={fieldsetStyle}>
            <label for="age">Idade: </label>
            <input id="age" name="age"></input>
          </fieldset>
          <Endereco />
          <fieldset style={fieldsetStyle}>
            <input type="submit" value="Enviar" />
          </fieldset>
        </center>
      </form>
    </>
  );
}

export default Cadastro;
