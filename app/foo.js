const timetable = require('./timetable');
const events = require('./events');
const toni = timetable.toni();

function print(timetable, index) {
    const day = events.weekday(timetable, index);
    day.map((item, index, array) => {
        console.log(item);
    });
}

console.log("MONTAG:"); print(toni, 0);
console.log("DIENSTAG:"); print(toni, 1);
console.log("MITTWOCH:"); print(toni, 2);
console.log("DONNERSTAG:"); print(toni, 3);
console.log("FREITAG:"); print(toni, 4);