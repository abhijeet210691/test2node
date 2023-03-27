const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res)=>{
    res.send('<h1>Hello second time');
});

app.listen(port, ()=>{
    console.log(`App id lisening on port ${port}`)
})