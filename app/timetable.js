const fs = require('fs');

exports.timetable = function(filename) {    
    const content = fs.readFileSync(`./data/${filename}`);
    return JSON.parse(content);
}

// TODO Provide additional functions for further timetable files!