const week = require('./week');

exports.alternate = function(today, even_week_table, odd_week_table) {
    const is_odd = week.is_odd(today);
    if (is_odd) {
        return odd_week_table;
    }
    
    return even_week_table;
}