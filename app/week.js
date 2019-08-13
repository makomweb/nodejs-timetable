/*
Takes a date as first parameter and the desired first day of the week as second parameter (0 for Sunday, 1 for Monday, etc.).
Note: the hour, minutes and seconds are set to 0 to have the beginning of the day.
https://stackoverflow.com/a/51918448/1468898
*/
exports.firstDayOfWeek = function(dateObject, firstDayOfWeekIndex) {

    const dayOfWeek = dateObject.getDay(),
        firstDayOfWeek = new Date(dateObject),
        diff = dayOfWeek >= firstDayOfWeekIndex ?
            dayOfWeek - firstDayOfWeekIndex :
            6 - dayOfWeek;

    firstDayOfWeek.setDate(dateObject.getDate() - diff);
    firstDayOfWeek.setHours(0,0,0,0);

    return firstDayOfWeek;
}

/*
Determine if today is an odd week or not.
https://stackoverflow.com/a/27125580/1468898
*/
exports.is_odd = function(today) {
    const january_first = new Date(today.getFullYear(), 0, 1);
    const millisecsInDay = 86400000;
    week = Math.ceil( (((today - january_first) / millisecsInDay) + january_first.getDay() + 1) / 7 );    
    return week % 2 !== 0;
}