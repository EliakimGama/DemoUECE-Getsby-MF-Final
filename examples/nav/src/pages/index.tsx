import React from 'react';
import RemotePage from '../components/RemotePage';
import { navStyle } from '../components/RemotePage.module.scss';

const App = () => {
  return (
    <>
      {/* Nav bar */}
      <nav className={navStyle}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Ajuda</a></li>
        </ul>
      </nav>

      {/* Conteúdo da página */}
      <h1>Remote App</h1>
      <RemotePage title="Remote Page" description="This is a remote page." />
    </>
  )
}

export default App;
