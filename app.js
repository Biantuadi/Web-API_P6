const exppress = require('express');
const res = require('express/lib/response');
const app = exppress();

app.use((req,res)=>{
    res.end("Hello World");
})

// exportation du module
module.exports = app;