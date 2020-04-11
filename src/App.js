import React from 'react'
import NotFound from './pages/NotFound'
import Header from './Header'
import About  from './pages/About'
import Contacts from './Contacts'
import {Provider} from './context'
import AddContact from './AddContact';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <Provider>
      <Router>
       <div className="App">
        <Header branding = 'My contact App'/>
          <div className = 'container'>
            <Switch>
              <Route exact path = '/' component = {Contacts}/>
              <Route exact path = '/contact/add' component = {AddContact}/>
              <Route exact path = '/about' component = {About}/>
              <Route component = {NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
   
  );
}

export default App;
