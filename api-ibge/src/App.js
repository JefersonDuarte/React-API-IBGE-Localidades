import React, { useState, useEffect } from "react";

const App = () => {

  document.title = 'API IBGE';

  const [estados, setEstados] = useState([]);
  const [cidades, selectCidades] = useState([{ id: 1, nome: 'foo' }]);

  useEffect(async () => {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    const data = await response.json();

    data.sort((a, b) =>
      a.sigla > b.sigla ? 1 : b.sigla > a.sigla ? -1 : 0
    );

    setEstados(data);

  }, []);

return (
  <div className="App">
    <h1 className="title">Preencha seu endereço:</h1>
    <form>

    </form>
  </div>
);
}

export default App;
