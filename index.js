const express = require('express');
const app = express();
var port = 3000;

let classmates = [{

    name : "Gakah",
    Age : 17,
    Rank : 45
},
{
    name : "Lewis",
    Age : 19,
    Rank : 42

}];

app.get('/classmates', (req, res) => {
    res.json(classmates);
});

app.listen(port, () => console.log('Server Started'));



