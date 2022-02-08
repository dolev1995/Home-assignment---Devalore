
'use strict';

const { stringify } = require("querystring");

let
    path = require("path"),
    express = require('express'),
    router = require('./router'),
    mongoose = require('mongoose'),
    app = express();
    dotenv = require('dotenv');
	dotenv.config();

    mongoose.connect("mongodb+srv://dolev1995:dolev1995@cluster0.754pe.mongodb.net/pets?retryWrites=true&w=majority", {useNewUrlParser: true})
    .then(() => console.log(("connected to mongoose")))
    .catch((err) => console.log(err));

    app.use(express.json());



app.listen(8000, console.log(`Server is running...  Port: 8000`));
