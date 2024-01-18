import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

import Ticket from '../ticket/ticket';

import cl from './ticket-list.module.scss';

const TicketList = ({ tickets, isLoading, filter }) => {
  const [count, setCount] = useState(4);
  const [localTickets, setLocalTickets] = useState(tickets);

  useEffect(() => {
    let filterCount = [];
    if (filter.all) {
      filterCount = [1, 2, 3, 0];
    } else {
      if (filter.oneTransfer) {
        filterCount.push(1);
      }
      if (filter.twoTransfer) {
        filterCount.push(2);
      }
      if (filter.threeTransfer) {
        filterCount.push(3);
      }
      if (filter.withoutTransfers) {
        filterCount.push(0);
      }
    }
    const resArr = [];
    for (let i = 0; i < tickets.length; i++) {
      const newArr = [];
      for (let j = 0; j < tickets[i].segments.length; j++) {
        const res = filterCount.some((el) => el === tickets[i].segments[j].stops.length);
        if (res) {
          newArr.push(res);
        }
      }
      if (newArr.length === 2) {
        resArr.push(tickets[i]);
      }
    }

    setLocalTickets(resArr);
  }, [filter, tickets]);

  const updateCount = (num) => {
    setCount((prev) => prev + num);
  };

  const allTickets = 7229;
  const countProgress = Math.floor((tickets.length / allTickets) * 100);
  const newTickets = localTickets.filter((el, index) => {
    return index <= count;
  });
  const viewTickets = newTickets.map((ticket, index) => <Ticket key={index} ticket={ticket} />);
  return (
    <div className={cl.ticketList}>
      {isLoading ? <ProgressBar countProgress={countProgress} /> : null}

      {viewTickets.length > 0 ? viewTickets : <TextInfo />}
      {viewTickets.length > 0 ? <ButtonViewTicket updateCount={updateCount} /> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
    isLoading: state.isLoading,
    filter: state.filter,
  };
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

const TextInfo = () => {
  return (
    <div className="info">
      <p>Рейсов, подходящих под заданные фильтры, не найдено</p>
    </div>
  );
};

const ButtonViewTicket = ({ updateCount }) => {
  return (
    <Button className={cl.ticketList_btn} onClick={() => updateCount(5)} variant="primary">
      Показать еще 5 билетов
    </Button>
  );
};
