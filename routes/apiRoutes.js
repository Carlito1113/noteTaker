const path = require('path')
const OUTPUT_DIR = path.resolve(__dirname, "../db");
const outputPath = path.join(OUTPUT_DIR, "db.json");
const fs = require('fs');

let notesArray = [];
let savedNotes = [];
module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        savedNotes = [];
        fs.readFile(outputPath, 'utf-8', (err, data) => {
            if (err) throw err;
            data = JSON.parse(data)
            for (i = 0; i < data.length; i++) {
                savedNotes.push(data[i])
            }
            res.send(savedNotes);
        });
    });

    
}