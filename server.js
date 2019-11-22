const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');

const myUsers = require('./routes/api/usersroute.js');
const testRoute = '/testUrl'

const app = express();

// Bodyparser Middleware

app.use(bodyParser.json());
//turn data to jsaon
//https://www.npmjs.com/package/body-parser

// DB Connection Config

const dbAccess = require('./config/keys.js').mongoURI;
//open the file where db access credentials are stored

//connect to Mongodb

mongoose
    .connect(dbAccess ,
             { useNewUrlParser: true, // this is total hack, refer to https://github.com/Automattic/mongoose/issues/8156
               useUnifiedTopology: true // total hack again
             },
            )
    .then( () => {
        console.log('MongoDB connected with credentials: ' , dbAccess)
    })
    .catch( (err) => console.log(err));

const port = process.env.PORT || 5000;
//// if process.env.PORT is undefined the connection port is 5000
//// this takes care of eventual environmental variable


// Routes definition
app.use('/api/userslist' , myUsers);
// myUsers is  defined in './routes/api/usersroute.js'
// NB '/api/userslist' becomes actual part of the url, in this case will be http://localhost:5000/api/userslist/ 

app.get(testRoute , (req, res) => {
    res.send('testUrl reached !!');    
});

// Listen
app.listen(port, () => console.log('Server started on port: ', port));
//app.listen(port, () => console.log(`Server started on port: ${port}`));

