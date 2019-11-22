import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar.js';
import UsersList from './components/UsersList.js';
import { Container } from 'reactstrap'
import { Provider } from 'react-redux';
import store from './store.js'

import UserModal from './components/UserModal.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
    render (){
        return (
            <Provider store = { store }> {/* ref Redux doc */}
              <div className="App">
                <AppNavbar />
                <Container>
                  <UserModal/>
                  <UsersList/>   
                </Container>
              </div>
            </Provider>
            
        );        
    }    
}

export default App;



//https://www.youtube.com/watch?v=TO6akRGXhx8 21:44


     
