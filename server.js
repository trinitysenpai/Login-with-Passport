const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.set('view engine', 'ejs');
app.listen(port, console.log(`listening on ${port}`));

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render('index'); // render the login page
}) 

app.post('/signup', (req, res) => {
    const data = req.body;
    console.log(data)
    res.status(200).json('hello!')
})