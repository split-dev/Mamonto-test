import {Route} from 'react-router-dom';
import Login from './pages/Login';
import React, {useState} from 'react';

import "./assets/scss/main.scss"
import CreateCollection from './pages/Create-collections';

function App() {

  const [StatusAuth, setStatusAuth] = useState(localStorage.getItem('authorize') === 'true' ? true : false);

  const toggleAuth = () => {
    setStatusAuth(!StatusAuth);
    
		console.log(StatusAuth);
  }

  const logOut = () => {
    toggleAuth();
    localStorage.removeItem('token');
    localStorage.removeItem('authorize');
  }

  console.log(StatusAuth);
  return (
    <div className="App">
    {
        StatusAuth ? <Route path="/" component={() => (<CreateCollection logOut={logOut}/>)} exact/> : <Login toggleAuth={toggleAuth}/>
    }
      
      
    </div>
  );
}

export default App;
