//ref to https://reactstrap.github.io/components/modals/
//Modal is an interactive panel for user interfaces, we use it in
//order to create a form to insert data (name and email)

import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addUser } from '../actions/userActions.js';
//import uuid from 'uuid'; // uuid generates random id

class UserModal extends Component {

    state = {
        modal: false,
        name:'',
        email: ''
    };
    
    //------------------------------------------------------------------------------------------------

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            //name refers to the name attribute defined in <Button> jsx code
            //down in the render(){} method
        })

        console.log(event.target.name , ': ' , event.target.value);        
    };
    
    //------------------------------------------------------------------------------------------------

    onSubmit =(event) => {
        event.preventDefault();
        
        const newUser ={
            //id: uuid(),
            name: this.state.name,
            email: this.state.email
        }

        //addUser method coded in ../actions/userActions.js
        this.props.addUser(newUser);
        console.log('newUser: ', newUser);

        //toggle modal panel (close it automatically after new user has been submitted)
        this.toggle();
    };
    
   //------------------------------------------------------------------------------------------------    

    toggle = () => {
        this.setState({
            modal: !this.state.modal // toggles modal value (in state) from false to true or viceversa
        });
    };
    
    //------------------------------------------------------------------------------------------------
    
    render(){
        return(
            <div>
              <Button
                color="dark"
                style={{ marginBottom:'2rem' }}
                onClick={this.toggle}                
              >
                Add User
              </Button>
              <Modal //ref to https://reactstrap.github.io/components/modals/

                isOpen={this.state.modal}
                toggle={this.toggle}
              >
                <ModalHeader toggle={this.toggle} > Add User to list </ModalHeader>
                <ModalBody>
                  <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                      <Label for = "user" > User </Label>
                      <Input
                        type = "text"
                        name = "name"
                        id = "user"
                        placeholder = "Add User Name"
                        onChange = {this.onChange}
                      />
                      <Input
                        type = "text"
                        name = "email"
                        id = "user"
                        placeholder = "Add User Email"
                        onChange = {this.onChange}
                      />

                      <Button
                        color = "dark"
                        style = {{marginTop:'2rem'}}
                        block 
                      >
                       Submit
                      </Button>
                                         
                    </FormGroup>
                  </Form>
                </ModalBody>
              </Modal>
            </div>
        )
    };
};

const mapStateToProps = (state) =>({
    user: state.user
}) 

export default connect(
    mapStateToProps,
    {addUser}
)(UserModal);

