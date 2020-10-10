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

    app.post("/api/notes", function(req, res) {
        notesArray = [];
        notesArray.push(req.body);
        fs.readFile(outputPath, 'utf-8', (err, data) => {
            if (err) throw err;
            data = JSON.parse(data)
            for (i = 0; i < notesArray.length; i++){
                notesArray.push(data[i])
            }
            for (i = 0; i < notesArray.length; i++){
                notesArray[i].id = i + 1;
            }
            res.send(notesArray);

            fs.writeFile(outputPath, JSON.stringify(notesArray), function(err) {
                if (err) {
                    throw err;
                } else {
                    console.log("floopedy")
                }
            });
        });
        console.log(req.body);
    });

    app.delete("/api/notes/:id", (req, res) => {
        notesArray = [];
        let noteId = req.params.id;

    })
}