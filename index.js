const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./Data/Categories.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('News API runnig');
});

app.get('/news-categories', (req, res) => {
    res.send(categories);
})


app.listen(port, () => {
    console.log('Dragon server runnig on port:', port);
});