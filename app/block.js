const helper = require('./helper');

exports.length = function(timetable) {
    
    const startTimes = helper.getNestedObject(timetable, ['BlockStartTimes']);    
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // month counting starts at 0 (0 = January)
    const day = date.getDate();
    const firstBlockString = `${year}, ${month}, ${day}, ${startTimes[0]}`;
    const nextBlockString = `${year}, ${month}, ${day}, ${startTimes[1]}`;
    
    const first = new Date(firstBlockString);
    const next = new Date(nextBlockString);
    const diff = next.getTime() - first.getTime();
    
    if (diff < 90 * 60 * 1000) {
        return 45 * 60 * 1000; // 45 min
    }

    return 90 * 60 * 1000; // 90 min
}