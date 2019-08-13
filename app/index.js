const express = require('express');
const app = express();
const timetable = require('./timetable');
const ical = require('ical-generator');
const events = require('./events');

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/Achard-Grundschule-6-C.json', function(req, res) {
  const json = timetable.timetable('Achard-Grundschule-6-C.json');
  res.send(json);
});

app.get('/Achard-Grundschule-6-C.ical', function(req, res) {
  const json = timetable.timetable('Achard-Grundschule-6-C.json');
  const cal = ical({
    domain: 'emkay',
    prodId: { company: 'emkay.org', product: 'timetable-ical' },
    name: 'Timetable iCal', 
    timezone: 'Europe/Berlin'
  });

  // iterate over the 5 days ( 0 = Monday ... 4 = Friday )
  for (var i = 0; i < 5; i++) {
    cal.events(events.weekday(json, i));
  }  
  
  cal.serve(res);
});

app.get('/Merian-Schule-9-1.json', function(req, res) {
  const json = timetable.timetable('Merian-Schule-9-1.json');
  res.send(json);
});

app.get('/Merian-Schule-9-1.ical', function(req, res) {
  const json = timetable.timetable('Merian-Schule-9-1.json');
  const cal = ical({
    domain: 'emkay',
    prodId: { company: 'emkay.org', product: 'timetable-ical' },
    name: 'Timetable iCal', 
    timezone: 'Europe/Berlin'
  });

  // iterate over the 5 days ( 0 = Monday ... 4 = Friday )
  for (var i = 0; i < 5; i++) {
    cal.events(events.weekday(json, i));
  }  
  
  cal.serve(res);
});

app.get('/Siemens-Gymnasium-9-C-Woche-A.json', function(req, res) {
  const json = timetable.timetable('Siemens-Gymnasium-9-C-Woche-A.json');
  res.send(json);
});

app.get('/Siemens-Gymnasium-9-C-Woche-A.ical', function(req, res) {
  const json = timetable.timetable('Siemens-Gymnasium-9-C-Woche-A.json');
  const cal = ical({
    domain: 'emkay',
    prodId: { company: 'emkay.org', product: 'timetable-ical' },
    name: 'Timetable iCal', 
    timezone: 'Europe/Berlin'
  });

  // iterate over the 5 days ( 0 = Monday ... 4 = Friday )
  for (var i = 0; i < 5; i++) {
    cal.events(events.weekday(json, i));
  }  
  
  cal.serve(res);
});

app.get('/Siemens-Gymnasium-9-C-Woche-B.json', function(req, res) {
  const json = timetable.timetable('Siemens-Gymnasium-9-C-Woche-B.json');
  res.send(json);
});

app.get('/Siemens-Gymnasium-9-C-Woche-B.ical', function(req, res) {
  const json = timetable.timetable('Siemens-Gymnasium-9-C-Woche-B.json');
  const cal = ical({
    domain: 'emkay',
    prodId: { company: 'emkay.org', product: 'timetable-ical' },
    name: 'Timetable iCal', 
    timezone: 'Europe/Berlin'
  });

  // iterate over the 5 days ( 0 = Monday ... 4 = Friday )
  for (var i = 0; i < 5; i++) {
    cal.events(events.weekday(json, i));
  }  
  
  cal.serve(res);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
