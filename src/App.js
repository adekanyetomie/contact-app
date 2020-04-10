import React from 'react'
import Header from './Header'
import Contacts from './Contacts'
import {Provider} from './context'
import AddContact from './AddContact';


function App() {
  return (
    <Provider>
       <div className="App">
       <Header branding = 'My contact App'/>
       <div className = 'container'>
         <AddContact/> 
          <Contacts/>
       </div>
    </div>
    </Provider>
   
  );
}

export default App;
