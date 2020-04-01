import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css'

import logoImg from '../../assets/logo.svg'

import api from '../../services/api'

export default function Register() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const longId = localStorage.getItem('ongId');

  const history = useHistory
  async function handleCase(e) {
    e.proventDefault();

    const data = {
      title,
      description,
      value
    };
      
      try {
        await api.post('/incidents', data, {
          headers: {
            Authorizarion: logoId,
          }
        })
        history.push('/profile')
      } catch (error) {
        alert('Erro ao cadastrar caso , tente navamente')
      }

  }
  
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="" />
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>

        </section>
        <form onSubmit={handleCase}>
          <input
            placeholder="Titulo do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button type="submit" className="button"> Cadastrar</button>
        </form>
      </div>
    </div>
  )
}
