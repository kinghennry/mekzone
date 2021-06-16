import React from 'react'
import "./App.css"
// import Chat from './components/Chat'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/contact/Contact'
import Error from './pages/error/Error'
import Team from './pages/team/Team'
// components
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
function App() {
  
  return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/team' component={Team}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='*' component={Error}/>
          </Switch>
       </Router>
      </>
  )
}

export default App
