// var path = require('path');
// import path  from 'path'
import express from 'express';
import { engine } from 'express-handlebars';
const port = 3000
const app = express();

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './src/resouces/views');
// app.set('views', path.join(__dirname, 'views'));
app.use(express.static('./src/public'))
app.get('/', (req, res) => {
    res.render('home');
});
app.get('/news', (req, res) => {
  res.render('news');
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
