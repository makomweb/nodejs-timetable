const fs = require('fs');

exports.fromJson = function(path) {
    const raw = fs.readFileSync(path);
    return JSON.parse(raw);
}