import React from 'react'
import Header from './Header'
import Contacts from './Contacts'
import {Provider} from './context'


function App() {
  return (
    <Provider>
       <div className="App">
       <Header branding = 'My contact App'/>
       <div className = 'container'>
          <Contacts/>
       </div>
    </div>
    </Provider>
   
  );
}

export default App;
