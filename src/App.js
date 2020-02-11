import React, { useState, useEffect } from 'react';
import api from './services/api';

import './css/global.css';
import './css/App.css';
import './css/sidebar.css';
import './css/Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

function App() {

  const [devs, setDevs] = useState([]);

  //Load devs from api
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('devs');
      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {

    const response = await api.post('/devs', data);
    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>

      <main>
        <ul>
          {
            devs.map(dev => (
              <DevItem key={dev._id} dev={dev} />
            ))
          }
        </ul>
      </main>
    </div>
  );
}

export default App;
