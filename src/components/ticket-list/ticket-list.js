import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

import Ticket from '../ticket/ticket';

import cl from './ticket-list.module.scss';

const TicketList = ({ tickets }) => {
  const newTickets = tickets.filter((el, index) => {
    return index <= 5;
  });
  console.log('TTicketList state', newTickets);
  return (
    <div className={cl.ticketList}>
      {newTickets.map((ticket, index) => (
        <Ticket key={index} ticket={ticket} />
      ))}

      <Button className={cl.ticketList_btn} variant="primary">
        Показать еще 5 билетов
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    tickets: state.tickets,
  };
};

export default connect(mapStateToProps)(TicketList);
