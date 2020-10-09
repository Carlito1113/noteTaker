// examples for the homework:


const db = require("../db/db.json")
const store = require("../db/store")


module.exports = function (app) {
app.get('/public', function (req, res) {
    res.json(tableData);
});
}




// GET route
store.getNote()
// POST route
