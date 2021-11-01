const express = require('express');

const expressEjsLayouts = require('express-ejs-layouts');

const app = express();

const path = require('path');

// Set Template Engine

app.use(expressEjsLayouts);

app.set('views', path.join(__dirname,'/resources/views'));

app.set('view engine', 'ejs');


// Assets

app.use(express.static('public'));



// routes

require('./routes/web')(app);






const PORT=process.env.PORT||3000;

app.listen(PORT, ()=>
{
console.log(`Listening on Port ${PORT}`);
});