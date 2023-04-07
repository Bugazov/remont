
import './App.scss';
import { Suspense, useEffect } from 'react';
import { AppRouter } from './providers/router';

import { useDispatch, useSelector } from 'react-redux';
import { getInited, userActions } from 'entinies/User';

function App() {
  const inited = useSelector(getInited)

  const dispatch =useDispatch()
  useEffect(() => {
    dispatch(userActions.initAuthData());
}, [dispatch]);
  return (
    <div className="App">
      <Suspense fallback=''>
      {inited && <AppRouter/>}
      </Suspense>
      
    </div>
  );
}

export default App;
