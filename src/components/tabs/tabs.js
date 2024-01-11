import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';

import cl from './tabs.module.scss';

const Tabs = ({ onSortLowPrice, onSortHightSpeed, onSortOptimal }) => {
  return (
    <div className={cl.tabs}>
      <ButtonGroup className={cl.btnGroup} size="lg" aria-label="Basic example">
        <Button className={`${cl.btn} ${cl.active}`} onClick={onSortLowPrice}>
          Самый дешевый
        </Button>
        <Button className={cl.btn} onClick={onSortHightSpeed}>
          Самый быстрый
        </Button>
        <Button className={cl.btn} onClick={onSortOptimal}>
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
