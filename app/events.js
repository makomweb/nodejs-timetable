const fs = require('fs');
const week = require('./week');
const helper = require('./helper');

exports.weekday = function(timetable, index) {
    const startTimes = helper.getNestedObject(timetable, ['BlockStartTimes']);
    const day = helper.getNestedObject(timetable, ['Weekdays'])[index];
    const blocks = helper.getNestedObject(day, ['Blocks']);
    const first = week.firstDayOfWeek(new Date(), 1); // now, 0 = Sunday, 1 = Monday is first day of a week
    const date = new Date(first.getFullYear(), first.getMonth(), first.getDate() + index);
    const blockLength = blockLength(timetable);

    return blocks.map((block, index, array) => {

        const year = date.getFullYear();
        const month = date.getMonth() + 1; // month counting starts at 0 (0 = January)
        const day = date.getDate();
        const startString = `${year}, ${month}, ${day}, ${startTimes[index]}`;        
        const start = new Date(startString);
        const end = new Date(start.getTime() + blockLength)
        const subject = block.Name;

        return {
            start: start,
            end: end,
            summary: subject
        }
    });
}

exports.blockLength = function(timetable) {
    return 2700000; // + 45 min
}