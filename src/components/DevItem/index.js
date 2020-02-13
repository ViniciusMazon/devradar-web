import React from 'react';
import api from '../../services/api';
import './styles.css';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';

const DevItem = ({ dev, deleteDev, editDev }) => {

  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={`Foto de ${dev.name}`} />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
      <button onClick={() => deleteDev(dev._id)}><Delete /></button>
      <button onClick={() => editDev(true, dev)}><Edit /></button>
    </li>
  );
};

export default DevItem;
