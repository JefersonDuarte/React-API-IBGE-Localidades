import React, { useState, useEffect } from "react";
import useForm from "../../hooks/useForm";
import axios from 'axios';

const Cadastro = () => {

  const fieldsetStyle = {
    border: 'none'
  }

  const [{ values, loading }, handleChange, handleSubmit] = useForm();
  const [estados, setEstados] = useState([]);
  const [sigla, setSigla] = useState("");
  const [cidades, setCidades] = useState([]);

  useEffect(async () => {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    const data = await response.json();

    data.sort((a, b) =>
      a.sigla > b.sigla ? 1 : b.sigla > a.sigla ? -1 : 0
    );

    setEstados(data);

  }, []);

  const handlingSigla = (e) => {
    const selectedState = e.target.value;
    setSigla(selectedState);
    handleChange(e);
  }

  useEffect(async () => {
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${sigla}/municipios`);
    const data = await response.json();

    setCidades(data);
  }, [sigla]);


  const submitForm = async () => {
    console.log('values', values);
    console.log('values json', JSON.stringify(values));

    const user = document.querySelector('.user');
    const data = values;
    const response = await axios.post('http://localhost:4000/users', data);
    user.innerHTML = response.data.name;

  }

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <center>
          <fieldset style={fieldsetStyle}>
            <label htmlFor="name">Nome: </label>
            <input onChange={handleChange} id="name" name="name"></input>
          </fieldset>
          <fieldset style={fieldsetStyle}>
            <label htmlFor="surname">Sobreome: </label>
            <input onChange={handleChange} id="surname" name="surname"></input>
          </fieldset>
          <fieldset style={fieldsetStyle}>
            <label htmlFor="birthdate">Data de Nascimento: </label>
            <input onChange={handleChange} type="date" id="birthdate" name="birthdate"></input>
          </fieldset>
          <label>Estado: </label>
          <select name="state" className="estados" onChange={e => handlingSigla(e)}>
            {estados.map(estado => (
              <option key={estado.id} value={estado.sigla} className={estado.nome}>{estado.nome}</option>
            ))}
          </select>
          <br />
          <label>Cidade: </label>
          <select name="city" className="cidades" onChange={handleChange} >
            {cidades.map(cidade => (
              <option key={cidade.id} value={cidade.nome} className={cidade.nome}>{cidade.nome}</option>
            ))}
          </select>
          <fieldset style={fieldsetStyle}>
            <button type="submit" >{loading ? 'Enviando...' : 'Enviar'}</button>
          </fieldset>
        </center>
      </form>
      <div className="user"></div>
    </>
  );
}

export default Cadastro;
