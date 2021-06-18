import {Route} from 'react-router-dom';
import Login from './pages/Login';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import "./assets/scss/main.scss"
import CreateCollection from './pages/Create-collections';

function App() {

  const [StatusAuth, setStatusAuth] = useState(localStorage.getItem('authorize') === 'true' ? true : false);
  const { isAuth } = useSelector(({ user }) => user);

  const toggleAuth = () => {
    setStatusAuth(localStorage.getItem('authorize') === 'true' ? true : false);
  }

  const logOut = () => {
    setStatusAuth(false);
    localStorage.removeItem('token');
    localStorage.removeItem('authorize');

  }

  console.log(StatusAuth);
  return (
    <div className="App">
    {
       isAuth || StatusAuth ? <Route path="/" component={() => (<CreateCollection logOut={logOut}/>)} exact/> : <Login toggleAuth={toggleAuth}/>
    }

    </div>
  );
}

export default App;
