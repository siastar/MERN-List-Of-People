import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition , TransitionGroup , } from 'react-transition-group';
//import uuid from 'uuid';
import { connect } from 'react-redux';
import { getUsers, deleteUser } from '../actions/userActions.js';
import PropTypes from 'prop-types'; 

class UsersList extends Component {

    componentDidMount(){
        this.props.getUsers();
        console.log('UsersList.js - this.props:' , this.props);
    }

    onDeleteClick = (id) => {
        this.props.deleteUser(id);
    }
    
    render() {

        // this.props.item.users //
        //ref to userReducer.js -- https://www.youtube.com/watch?v=iI5h4-pChho&t=234s | 27:20

        const { users } = this.props.user;
        
        return( // ref ReactStrap documentation https://reactstrap.github.io/
            <Container>
            
               <ListGroup>                 
                 <TransitionGroup className="users-list"> 
                   {users.map(({_id, name, email}) => ( //_id is the automatic generated item id in mongo db
                      <CSSTransition key={_id} timeout={500} classNames="fade">
                        <ListGroupItem>
                        <Button
                          className="remove-btn"
                          color="danger"
                          size="sm"
                          onClick={this.onDeleteClick.bind(this, _id)}
                          // .bind(this, id) grabs the id parameter in  
                          // <CSSTransition key={id} and send it to the onDelete method                          
                        >
                          &times;
                        </Button>
                           name: {name} / email: {email}
                        </ListGroupItem>
                      </CSSTransition>    
                  ))}                  

                 </TransitionGroup> 
               </ListGroup>               
            </Container>
        )
    }
}

UsersList.propTypes = {
    getUsers: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    user: state.user // defined in src/reducers/index.js
});

export default connect(mapStateToProps, { getUsers, deleteUser })(UsersList);
