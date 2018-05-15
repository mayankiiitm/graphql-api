const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();
var uri = 'mongodb+srv://mayank:mayank25@cluster0-wgedf.mongodb.net/cuddll?retryWrites=true'
mongoose.connect(uri)
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));



app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});