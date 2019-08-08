const fs = require('fs');

exports.achard_6_c = function() {    
    const content = fs.readFileSync('./data/achard-6-c.json');
    return JSON.parse(content);
}

// TODO Provide additional functions for further timetable files!