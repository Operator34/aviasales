import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

import Ticket from '../ticket/ticket';

import cl from './ticket-list.module.scss';

const TicketList = ({ tickets, isLoading }) => {
  const allCountTickets = tickets.length;
  console.log(allCountTickets);
  const allTickets = 7229;
  const countProgress = Math.floor((allCountTickets / allTickets) * 100);
  console.log(countProgress);
  const newTickets = tickets.filter((el, index) => {
    return index <= 5;
  });
  //console.log('TTicketList state', newTickets);
  return (
    <div className={cl.ticketList}>
      {isLoading ? <ProgressBar countProgress={countProgress} /> : null}

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
    isLoading: state.isLoading,
  };
};

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center mb-4">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Загрузка...</span>
      </div>
    </div>
  );
};

const ProgressBar = ({ countProgress }) => {
  return (
    <div
      className="progress mb-3"
      role="progressbar"
      aria-label="Animated progress bar"
      aria-valuenow="75"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div
        className="progress-bar progress-bar-striped progress-bar-animated"
        style={{ width: `${countProgress}%` }}
      >{`${countProgress}%`}</div>
    </div>
  );
};

export default connect(mapStateToProps)(TicketList);
