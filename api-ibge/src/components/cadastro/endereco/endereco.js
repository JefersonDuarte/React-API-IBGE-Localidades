import React, { useState, useEffect } from "react";

const Endereco = () => {

  document.title = 'API IBGE';

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
  }

  useEffect(async () => {
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${sigla}/municipios`);
    const data = await response.json();

    setCidades(data);
  }, [sigla]);

  return (

    <>
      <label>Estado: </label>
      <select className="estados" onChange={e => handlingSigla(e)}>
        {estados.map(estado => (
          <option key={estado.id} value={estado.sigla} className={estado.nome}>{estado.nome}</option>
        ))}
      </select>
      <br/>
      <label>Cidade: </label>
      <select className="cidades">
        {cidades.map(cidade => (
          <option key={cidade.id} value={cidade.nome} className={cidade.nome}>{cidade.nome}</option>
        ))}
      </select>
    </>
  );
}

export default Endereco;
