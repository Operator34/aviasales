import React from 'react';
import format from 'date-fns/format';

import cl from './ticket.module.scss';

const Ticket = ({ ticket }) => {
  const transformPrice = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const transformFlightTime = (min) => {
    const hours = Math.floor(min / 60);
    const otherMin = min % 60;
    return `${hours}ч ${otherMin}м`;
  };

  const tranformArivalTime = (departureDate, flightTimeMin) => {
    const date = new Date(format(departureDate, 'yyyy-MM-dd HH:mm:ss.SSSXXX', { timeZone: 'Europe/Moscow' }));
    const newDate = date.getTime() + flightTimeMin * 60000;
    return `${format(date, 'kk:mm')} - ${format(newDate, 'kk:mm')}`;
  };

  return (
    <>
      <div className={cl.ticket}>
        <div className={cl.ticket__header}>
          <p className={cl.ticket__price}>{`${transformPrice(ticket.price)} Р`}</p>
          <img className={cl.ticket__logo} alt="Logo" src={`//pics.avs.io/99/36/${ticket.carrier}.png`} />
        </div>
        {ticket.segments.map((segment, index) => (
          <div key={index} className={cl.ticket__rows}>
            <div className={cl.ticket__columns}>
              <p className={cl.ticket__title}>{`${segment.origin} - ${segment.destination}`}</p>
              <p className={cl.ticket__description}>{tranformArivalTime(segment.date, segment.duration)}</p>
            </div>
            <div className={cl.ticket__columns}>
              <p className={cl.ticket__title}>В пути</p>
              <p className={cl.ticket__description}> {transformFlightTime(segment.duration)}</p>
            </div>
            <div className={cl.ticket__columns}>
              <p className={cl.ticket__title}>
                {segment.stops.length === 0
                  ? 'нет пересадок'
                  : segment.stops.length === 1
                    ? `${segment.stops.length} пересадка`
                    : `${segment.stops.length} пересадки`}
              </p>
              <p className={cl.ticket__description}>{segment.stops.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Ticket;
