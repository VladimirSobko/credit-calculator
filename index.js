const express = require('express');
const app = express()
const path = require('path')

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/styleguide.html'))
})

app.get('/example', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/example.html'))
})

app.listen(3002, function () {
  console.log('Styleguide will be served on port 3002');
});

app.use('/public', express.static(path.join(__dirname, '/public')))
app.use('/src', express.static(path.join(__dirname, '/src')))
