import React from 'react';
import { pageStyle } from './RemotePage.module.scss';

type RemotePageProps = {
  title: string;
  description: string;
};

const RemotePage: React.FC<RemotePageProps> = ({ title, description }: RemotePageProps) => {
  React.useEffect(() => {
    console.log('RemotePage test 🙌');
    document.documentElement.setAttribute('data-remote-page-mounted', '1');
  }, []);

  return (
    <div className={pageStyle}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default RemotePage;
