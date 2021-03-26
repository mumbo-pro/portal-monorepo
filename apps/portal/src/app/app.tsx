import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'

import 'bootstrap/dist/css/bootstrap.min.css'
import LoginPage from './pages/auth/Login'
import RegisterPage from './pages/auth/Register'
import Index from './pages/Jobs/Index'
import Preferences from './pages/Preferences'
import Dashboard from './pages/Dashboard'

export function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <LoginPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
          <Route path="/jobs">
            <Index />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
