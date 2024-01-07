import React from 'react';

import cl from './ticket.module.scss';
import Logo from './S7_Logo.png';

const Ticket = () => {
  return (
    <>
      <div className={cl.ticket}>
        <div className={cl.ticket__header}>
          <p className={cl.ticket__price}>13 400 P</p>
          <img className={cl.ticket__logo} src={Logo} />
        </div>
        <div className={cl.ticket__rows}>
          <div className={cl.ticket__columns}>
            <p className={cl.ticket__title}>mow - hkt</p>
            <p className={cl.ticket__description}>10:45 - 08:00</p>
          </div>
          <div className={cl.ticket__columns}>
            <p className={cl.ticket__title}>В пути</p>
            <p className={cl.ticket__description}> 21ч 15м</p>
          </div>
          <div className={cl.ticket__columns}>
            <p className={cl.ticket__title}>2 пересадки</p>
            <p className={cl.ticket__description}>HKT, JNB</p>
          </div>
        </div>
        <div className={cl.ticket__rows}>
          <div className={cl.ticket__columns}>
            <p className={cl.ticket__title}>mow - hkt</p>
            <p className={cl.ticket__description}>10:45 - 08:00</p>
          </div>
          <div className={cl.ticket__columns}>
            <p className={cl.ticket__title}>В пути</p>
            <p className={cl.ticket__description}> 21ч 15м</p>
          </div>
          <div className={cl.ticket__columns}>
            <p className={cl.ticket__title}>2 пересадки</p>
            <p className={cl.ticket__description}>HKT, JNB</p>
          </div>
        </div>
      </div>
      <div className={cl.ticket}>
        <div className={cl.ticket__header}>
          <p className={cl.ticket__price}>13 400 P</p>
          <img className={cl.ticket__logo} src={Logo} />
        </div>
        <div className={cl.ticket__rows}>
          <div className={cl.ticket__columns}>
            <p className={cl.ticket__title}>mow - hkt</p>
            <p className={cl.ticket__description}>10:45 - 08:00</p>
          </div>
          <div className={cl.ticket__columns}>
            <p className={cl.ticket__title}>В пути</p>
            <p className={cl.ticket__description}> 21ч 15м</p>
          </div>
          <div className={cl.ticket__columns}>
            <p className={cl.ticket__title}>2 пересадки</p>
            <p className={cl.ticket__description}>HKT, JNB</p>
          </div>
        </div>
        <div className={cl.ticket__rows}>
          <div className={cl.ticket__columns}>
            <p className={cl.ticket__title}>mow - hkt</p>
            <p className={cl.ticket__description}>10:45 - 08:00</p>
          </div>
          <div className={cl.ticket__columns}>
            <p className={cl.ticket__title}>В пути</p>
            <p className={cl.ticket__description}> 21ч 15м</p>
          </div>
          <div className={cl.ticket__columns}>
            <p className={cl.ticket__title}>2 пересадки</p>
            <p className={cl.ticket__description}>HKT, JNB</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
