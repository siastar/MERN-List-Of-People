const express = require('express');
const router = express.Router();

// take the Item model
// data will be routed using the specific format defined in models/Item.js
const User = require('../../models/User.js');

// @route   GET api/userslist
// @descr   Get All Users
// @access  Public

//search all users in the DB and returns them in json format defined in the model file User.js
//by sorting them for date in descending order  "sort({ date: -1})"
//NOTICE THAT find and sort are mongoose method which is not required by this module
//because already incapsulated in User.js (I feel like Alice in objectsland...)

router.get('/' , (req, res) => {
    User.find()
        .sort({ date: -1})
        .then(userslist => res.json(userslist));
    });

// @route   GET api/userlist/_id 
// @descr   Get (get a user by his _id)
// @access  Public

router.get('/:id' , (req, res) => {
    User.findById(req.params.id)
        .then(user =>  res.json(user))
        .catch(err => res.status(404).json({userfound: false}));
    });

// @route   POST api/userslist
// @descr   Add an user to DB (e.g. post or upload something, generally speaking)
// @access  Public

router.post('/' , (req, res) => {
    console.log('req.body:' , req.body) //
    
    const newUser = new User( {    
        name: req.body.name,
        email: req.body.email,
    })//new User is a new instance of the data object prototype defined in '../../models/User.js';

    newUser.save()
        .then(user => res.json({useradded: true}))
        .catch(err => res.status(404).json({useradded: false}));
       
    console.log('new user added: ' , newUser);
    console.log('req.params: ' , req.params);
});

// @route   PATCH api/userslist
// @descr   update an user in DB (grabs it by its mongo db _id value)
// @access  Public

//router.patch('/:id' , ( req, res ) => {
//    User.findById(req.params.id)
//        .then()
//})



// @route   DELETE api/userslist
// @descr   delete an user from DB (grabs it by its mongo db _id value)
// @access  Public

router.delete('/:id' , (req, res) => {
    console.log('req.params: ' , req.params); //req.params:  { id: '5da62ceac47411555b3752f0' }
    User.findById(req.params.id)
        .then(user => user.remove().then( () => res.json({userdeleted: true})))
        .catch(err => res.status(404).json({userdeleted: false}));
    
});




module.exports = router;
