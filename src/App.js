import React, { useState, useEffect } from 'react';
import api from './services/api';

import './css/global.css';
import './css/App.css';
import './css/sidebar.css';
import './css/Main.css';

import DevForm from './components/DevForm';
import DevFormEdit from './components/DevFormEdit';
import DevItem from './components/DevItem';

function App() {

  const [devs, setDevs] = useState([]);
  const [editDevData, setEditDevData] = useState({ isEditing: false, data: {} });

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('devs');
      setDevs(response.data);
    }

    loadDevs();
  }, []);


  async function deleteDev(id) {
    await api.delete(`devs/${id}`);
    setDevs(devs.filter(dev => dev._id !== id));
  }

  function editDev(status, dev) {
    let content = {
      isEditing: status,
      data: dev
    }
    setEditDevData(content);
  }

  async function handleEditDev(id, data) {
    const response = await api.put(`/devs/${id}`, data);
    setEditDevData({ isEditing: false, data: {} })
    setDevs([...devs.filter(dev => dev._id !== id), response.data]);
  }

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);
    setDevs([...devs, response.data]);
  }

    return (
    <div id="app">
      <aside>
        {
          editDevData.isEditing === true ? <DevFormEdit data={editDevData.data} onSubmit={handleEditDev} /> : <DevForm onSubmit={handleAddDev} />
        }
      </aside>

      <main>
        <ul>
          {
            devs.map(dev => (
              <DevItem key={dev._id} dev={dev} deleteDev={deleteDev} editDev={editDev} />
            ))
          }
        </ul>
      </main>
    </div>
  );
}

export default App;
