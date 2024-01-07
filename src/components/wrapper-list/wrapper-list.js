import React from 'react';

import Tabs from '../tabs';
import TicketList from '../ticket-list';

import cl from './wrapper-list.module.scss';

const WrapperList = () => {
  return (
    <div className={cl.wrapperList}>
      <Tabs />
      <TicketList />
    </div>
  );
};

export default WrapperList;
