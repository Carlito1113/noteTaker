const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "../db");
const outputPath = path.join(OUTPUT_DIR, "db.json");
const fs = require("fs");

let notesArray = [];
let savedNotes = [];




module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    savedNotes = [];
    fs.readFile(outputPath, "utf-8", (err, data) => {
      if (err) throw err;
      data = JSON.parse(data);
      for (i = 0; i < data.length; i++) {
        savedNotes.push(data[i]);
      }
      res.send(savedNotes);
    });
  });





  app.post("/api/notes", function (req, res) {
      console.log(outputPath);
    notesArray = [];
    notesArray.push(req.body);
    fs.readFile(outputPath, "utf-8", (err, data) => {
      if (err) throw err;
      data = JSON.parse(data);
      console.log(notesArray.length);
      for (let i = 0; i < data.length; i++) {
        notesArray.push(data[i]);
      }
      for (let i = 0; i < notesArray.length; i++) {
        notesArray[i].id = i + 1;
      }
      res.send(notesArray);

      fs.writeFile(outputPath, JSON.stringify(notesArray), function (err) {
        if (err) {
          throw err;
        } else {
        }
      });
    });
    console.log(req.body);
  });




  app.delete("/api/notes/:id", (req, res) => {
    notesArray = [];
    let noteId = req.params.id;
    console.log(noteId);

    fs.readFile(outputPath, "utf-8", (err, data) => {
      if (err) throw err;
      notesArray = JSON.parse(data);

      const newNotesArray = notesArray.filter((note) => note.id != noteId);

      console.log(newNotesArray);

      fs.writeFile(outputPath, JSON.stringify(newNotesArray), (err) => {
        if (err) throw err;
        console.log("deleted");
        res.send(newNotesArray);
      });
    });
  });
};
