const express = require('express');

const path =require('path');

const app = express();

app.get('/api',(req, res) =>  {
    res.json('HTTP GET request received')
})

app.use('/', express.static(path.join(__dirname, 'react_apps/hii/build')));


app.use('/website', express.static(path.join(__dirname, '/public')));

app.use((req, res) => {
    res.status(404);
    res.send('<h1> Error 404: resources not found</h1>');
} )

app.listen(3000, () => {
  console.log("App listening  on port 3000");
})