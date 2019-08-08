const fs = require('fs');

exports.toni = function() {    
    const content = fs.readFileSync('./data/toni.json');
    return JSON.parse(content);
}

// TODO Provide additional functions for further timetable files!