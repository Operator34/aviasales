import React from 'react';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';

import cl from './filter.module.scss';

const Filter = ({ filter, changeFilter }) => {
  return (
    <div className={cl.filter}>
      <Form className={cl.form}>
        <h5 className={cl.title}>Количество пересадок</h5>
        {[
          { label: 'Все', id: 'all', checked: filter.all },
          { label: 'Без пересадок', id: 'withoutTransfers', checked: filter.withoutTransfers },
          { label: '1 пересадка', id: 'oneTransfer', checked: filter.oneTransfer },
          { label: '2 пересадки', id: 'twoTransfer', checked: filter.twoTransfer },
          { label: '3 пересадки', id: 'threeTransfer', checked: filter.threeTransfer },
        ].map((type, index) => (
          <div key={index} className="mb-2">
            <Form.Check
              id={type.id}
              label={`${type.label}`}
              checked={type.checked}
              onChange={() => {
                console.log('change id', type.id);
                changeFilter(type.id);
              }}
            />
          </div>
        ))}
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    filter: state.filter,
  };
};

export default connect(mapStateToProps, actions)(Filter);
