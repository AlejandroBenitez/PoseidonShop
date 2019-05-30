const express = require('express')
const path    = require("path");
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Routes
// import routes
const customerRoutes = require('./routes/index');
app.use('/', customerRoutes);

//static files
app.use(express.static(path.join(__dirname,'public')));


// starting server
const port = app.get('port');

app.listen(port,()=>{
    console.log(`Server on port ${port}`);
});