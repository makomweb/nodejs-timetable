const express = require('express');
const app = express();
const timetable = require('./timetable');
const ical = require('ical-generator');
const events = require('./events');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/achard-6-c.json', function(req, res) {
  const achard_6_c = timetable.achard_6_c();
  res.send(achard_6_c);
});

app.get('/achard-6-c.ical', function(req, res) {
  const achard_6_c = timetable.achard_6_c();
  const cal = ical({
    domain: 'emkay',
    prodId: { company: 'emkay.org', product: 'timetable-ical' },
    name: 'Timetable iCal', 
    timezone: 'Europe/Berlin'
  });

  // iterate over the 5 days ( 0 = Monday ... 4 = Friday )
  for (var i = 0; i < 5; i++) {
    cal.events(events.weekday(achard_6_c, i));
  }  
  
  cal.serve(res);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
