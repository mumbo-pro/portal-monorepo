import React from 'react';

import styles from './app.module.css';

import { Route, Link } from 'react-router-dom';

const Home = () => (
  <div>
    This is the generated root route.{' '}
    <Link to="/page-2">Click here for page 2.</Link>
  </div>
);
const About = () => (
  <div>
    <Link to="/">Click here to go back to root page.</Link>
  </div>
);
// function About (){ return () }

export function App() {
  return (
    <div className={styles.app}>
      <header className="flex">
        <h1>portal!</h1>
      </header>

      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>

      <Route path="/" exact render={Home} />
      <Route path="/page-2" exact render={About} />
    </div>
  );
}

export default App;
