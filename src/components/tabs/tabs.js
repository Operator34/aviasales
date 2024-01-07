import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import cl from './tabs.module.scss';

const Tabs = () => {
  return (
    <div className={cl.tabs}>
      <ButtonGroup className={cl.btnGroup} size="lg" aria-label="Basic example">
        <Button className={`${cl.btn} ${cl.active}`}>Самый дешевый</Button>
        <Button className={cl.btn}>Самый быстрый</Button>
        <Button className={cl.btn}>Оптимальный</Button>
      </ButtonGroup>
    </div>
  );
};

export default Tabs;
