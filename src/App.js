import React from 'react'
import "./App.css"
// import Chat from './components/Chat'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Error from './pages/error/Error'
import Team from './pages/team/Team'
import Services from './pages/services/Services'
import Details from './pages/details/Details'
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
            <Route exact path='/services' component={Services}/>
            <Route exact path='/work' component={Details}/>
            <Route exact path='*' component={Error}/>
          </Switch>
       </Router>
      </>
  )
}

export default App
