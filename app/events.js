const fs = require('fs');
const week = require('./week');
const helper = require('./helper');

exports.weekday = function(timetable, index) {    
    const day = helper.getNestedObject(timetable, ['Weekdays'])[index];
    const blocks = helper.getNestedObject(day, ['Blocks']);
    const first = week.firstDayOfWeek(new Date(), 1); // now, 0 = Sunday, 1 = Monday is first day of a week
    const date = new Date(first.getFullYear(), first.getMonth(), first.getDate()+index);

    return blocks.map((block, index, array) => {

        const year = date.getFullYear();
        const month = date.getMonth() + 1; // month counting starts at 0 (0 = January)
        const day = date.getDate();
        const startString = `${year}, ${month}, ${day}, ${block.Begin}`;        
        const start = new Date(startString);
        const end = new Date(start.getTime() + 2700000); // + 45 min
        const subject = block.Name;

        return {
            start: start,
            end: end,
            summary: subject
        }
    });
}