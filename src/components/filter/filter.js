import React from 'react';
import Form from 'react-bootstrap/Form';

import cl from './filter.module.scss';

const Filter = () => {
  return (
    <div className={cl.filter}>
      <Form className={cl.form}>
        <h5 className={cl.title}>Количество пересадок</h5>
        {['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'].map((type, index) => (
          <div key={index} className="mb-2">
            <Form.Check // prettier-ignore
              id={index}
              label={`${type}`}
            />
          </div>
        ))}
      </Form>
    </div>
  );
};
export default Filter;
