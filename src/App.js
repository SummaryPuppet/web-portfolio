import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import ContactForm from './components/ContactForm'
import NavbarC from './components/Navbar'

function App() {
  return (
    <Router>
      <NavbarC/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/contact">
          <ContactForm/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
