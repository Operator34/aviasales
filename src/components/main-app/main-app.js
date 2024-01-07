import React from 'react';

import Filter from '../filter';
import WrapperList from '../wrapper-list';

import cl from './main-app.module.scss';

const MainApp = () => {
  return (
    <div className={cl.MainApp}>
      <Filter />
      <WrapperList />
    </div>
  );
};

export default MainApp;
