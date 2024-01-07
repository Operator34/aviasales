import React from 'react';
import Button from 'react-bootstrap/Button';

import Ticket from '../ticket/ticket';

import cl from './ticket-list.module.scss';

const TicketList = () => {
  return (
    <div className={cl.ticketList}>
      <Ticket />
      <Button className={cl.ticketList_btn} variant="primary">
        Показать еще 5 билетов
      </Button>
    </div>
  );
};

export default TicketList;
