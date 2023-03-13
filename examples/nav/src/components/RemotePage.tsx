import React from 'react';
import { pageStyle } from './RemotePage.module.scss';

type RemotePageProps = {
  title: string;
  description: string;
};

const RemotePage: React.FC<RemotePageProps> = ({ title, description }: RemotePageProps) => {
  React.useEffect(() => {
    console.log('RemotePage testando 🙌');
    document.documentElement.setAttribute('data-remote-page-mounted', '1');
  }, []);

  return (
    <div>
      {/* Nav bar */}
      <nav>
        <ul>
          <li><a href="#">Home okok</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Ajuda</a></li>
        </ul>
      </nav>

      {/* Conteúdo da página */}
      <div className={pageStyle}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default RemotePage;
