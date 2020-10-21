import React from 'react';
import { useHistory } from 'react-router-dom';

import doneImage from '../images/done-image.svg';

import '../styles/pages/orphanage-done.css';

function OrphanageDone() {
  const history = useHistory();

  function handleGoBackToMap() {
    history.push('/app');
  }

  return (
    <div id="page-orphanage-done">
      <div className="content-wrapper">
        <main>
          <h1>Ebaaa!</h1>
          <p>
            O cadastro deu certo e foi enviado ao administrador para ser
            aprovado. Agora é só esperar :)
          </p>
          <button onClick={handleGoBackToMap}>Voltar para o mapa</button>
        </main>
        <img src={doneImage} alt="Feito!" />
      </div>
    </div>
  );
}

export default OrphanageDone;
