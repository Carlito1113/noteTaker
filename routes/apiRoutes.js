// examples for the homework:


const db = require("../db/db.json")
const store = require("../db/store")


module.exports = function (app) {
app.get('/public/index.html', function (req, res) {
    res.json(tableData);
});
app.get('/public/notes.html', function (req, res) {
    res.json(tableData);
});
}




// GET route
//store.getNotes()
// POST route
