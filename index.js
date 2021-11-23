const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.send({hi_Lindsey:'I love you so much and I am sorry!});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);