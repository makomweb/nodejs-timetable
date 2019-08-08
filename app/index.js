const express = require('express');
const app = express();
const timetable = require('./timetable');
const ical = require('ical-generator');
const events = require('./events');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/toni.json', function(req, res) {
  const toni = timetable.toni();
  res.send(toni);
});

app.get('/toni.ical', function(req, res) {
  const toni = timetable.toni();
  const cal = ical({
    domain: 'emkay',
    prodId: { company: 'emkay.org', product: 'timetable-ical' },
    name: 'Timetable iCal', 
    timezone: 'Europe/Berlin'
  });
  
  cal.events(events.weekday(toni, 0));
  cal.events(events.weekday(toni, 1));
  cal.events(events.weekday(toni, 2));
  cal.events(events.weekday(toni, 3));
  cal.events(events.weekday(toni, 4));
  
  cal.serve(res);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
