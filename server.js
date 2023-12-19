// Dependencies!
const express = require('express') //import express framework
const { appendFile } = require('fs')
require('dotenv').config // import/load ENV variables
const path = require('path') // import path module
// Import Routers

// App Object
const app = express() // call teh express function
// Middleware

// Routes
// this is our home route
app.get('/', (req, res) => {
    res.send('the app is connected')
})
// Server Listener
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log('Your app is running, better go catch it!')
})

// END