import React from 'react';

import Logo from './Logo.svg';
import cl from './header-app.module.scss';

const HeaderApp = () => {
  return (
    <div className={cl.headerApp}>
      <img src={Logo} alt="Логотип компании Aviasales" />
    </div>
  );
};

export default HeaderApp;
