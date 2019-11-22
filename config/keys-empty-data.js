//rename this file keys.js

module.exports = {
    mongoURI: 'mongodb+srv://user_name:user_password@cluster_name-fcvtr.mongodb.net/db_name?retryWrites=true&w=majority'};
//             ##############....#........#.............###################......############################


// this referes to atlas db account https://cloud.mongodb.com/user#/atlas/login

// user_name            is the database-user's name, admins and users are managed in mongo shell or in this case directly in atlas mongo db login page
// user_password        is user_name's password to access the database
// cluster_name   is the cluster which contains databases (you create this e.g. in atlas mongo db user, or with mongo shell)
// db_name          is the database name
//

// for the moment ignore all other parameters

// into db_name there can be multiple collections of items which are defined according to the model file

