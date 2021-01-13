import React from 'react';
// import styles from './app.module.css';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

import AppNavbar from './components/AppNavbar';
// import { Container } from 'reactstrap';

// import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export function App() {
  return (
    <>
    {/* <div className={styles.app}> */}
      {/* <header className="flex">
        <h1>portal!</h1>
      </header> */}

      <AppNavbar />
      {/* <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div> */}

      <div className="App">
        <Route path="/" exact render={Home} />
        <Route path="/page-2" exact render={About} />
      </div>
    </>
  );
}

export default App;
