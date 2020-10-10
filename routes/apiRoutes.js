const path = require('path')
const OUTPUT_DIR = path.resolve(__dirname, "../db");
const outputPath = path.join(OUTPUT_DIR, "db.json");
const fs = require('fs');

let notesArray = [];
let savedNotes = [];
module.exports = function(app) {
    
}