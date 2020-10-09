// Require express
const express = require('express');

// Initialize the app and create port
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true }))

app.use(express.static("public"));

// require("./routes/apiRoutes")(app);
require('./routes/htmlRoutes')(app);


app.listen(PORT, () => console.log(`Listen on PORT: http://localhost:${PORT}`));

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
})