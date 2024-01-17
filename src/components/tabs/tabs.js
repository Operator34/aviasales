import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';

import cl from './tabs.module.scss';

const Tabs = ({ onSortLowPrice, onSortHightSpeed, onSortOptimal }) => {
  const [activeButton, setActiveButton] = useState(null);
  const changeActiveButton = (id) => setActiveButton(id);
  return (
    <div className={cl.tabs}>
      <ButtonGroup className={cl.btnGroup} size="lg" aria-label="Basic example">
        <Button
          className={activeButton === 1 ? `${cl.btn} ${cl.active}` : `${cl.btn} `}
          onClick={() => {
            onSortLowPrice();
            changeActiveButton(1);
          }}
        >
          Самый дешевый
        </Button>
        <Button
          className={activeButton === 2 ? `${cl.btn} ${cl.active}` : `${cl.btn} `}
          onClick={() => {
            changeActiveButton(2);
            onSortHightSpeed();
          }}
        >
          Самый быстрый
        </Button>
        <Button
          className={activeButton === 3 ? `${cl.btn} ${cl.active}` : `${cl.btn} `}
          onClick={() => {
            changeActiveButton(3);
            onSortOptimal();
          }}
        >
          Оптимальный
        </Button>
      </ButtonGroup>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { sorted: state.sorted };
};
export default connect(mapStateToProps, actions)(Tabs);
