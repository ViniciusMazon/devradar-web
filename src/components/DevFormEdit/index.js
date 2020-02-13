import React, { useState } from 'react';

import './styles.css';

const DevFormEdit = ({ data, onSubmit }) => {

  const [github_username, setGithub_username] = useState(data.github_username);
  const [techs, setTechs] = useState(data.techs);
  const [latitude, setLatitude] = useState(data.location.coordinates[1]);
  const [longitude, setLongitude] = useState(data.location.coordinates[0]);


  async function handleSubmit(e) {
    e.preventDefault();
    await onSubmit(data._id, {
      github_username,
      techs,
      latitude,
      longitude
    });
  }


  return (
    <form onSubmit={handleSubmit}>
      <strong>Editar</strong>
      <div className="input-block">
        <label htmlFor="github_username">Usuário do Github</label>
        <input name="github_username" id="github_username" value={github_username} onChange={e => setGithub_username(e.target.value)} required />
      </div>
      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input name="techs" id="techs" value={techs} onChange={e => setTechs((e.target.value).toLowerCase())} required />
      </div>
      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input type="number" name="latitude" id="latitude" value={latitude} onChange={e => setLatitude(e.target.value)} required />
        </div>
        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input type="number" name="longitude" id="longitude" value={longitude} onChange={e => setLongitude(e.target.value)} required />
        </div>
      </div>
      <button type="submit">Salvar</button>
    </form>
  )
};

export default DevFormEdit;
