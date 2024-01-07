import HeaderApp from '../header-app';
import MainApp from '../main-app';

import cl from './App.module.scss';

function App() {
  return (
    <div className={cl.App}>
      <HeaderApp />
      <MainApp />
    </div>
  );
}

export default App;
