
import './App.scss';
import { Suspense, useEffect } from 'react';
import { AppRouter } from './providers/router';

import { useDispatch } from 'react-redux';
import { userActions } from 'entinies/User';

function App() {

  const dispatch =useDispatch()
  useEffect(() => {
    dispatch(userActions.initAuthData());
}, [dispatch]);
  return (
    <div className="App">
      <Suspense fallback=''>
      <AppRouter/>
      </Suspense>
      
    </div>
  );
}

export default App;
