import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import HeaderApp from '../header-app';
import MainApp from '../main-app';
import { getTicketsAction } from '../../store/actions';

import cl from './App.module.scss';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTicketsAction());
  }, []);

  return (
    <div className={cl.App}>
      <HeaderApp />
      <MainApp />
    </div>
  );
}

export default App;
