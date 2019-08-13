const express = require('express');
const app = express();
const timetable = require('./app/timetable');
const ical = require('ical-generator');
const events = require('./app/events');
const alternate_table = require('./app/alternate_table');
const PORT = process.env.PORT || 3000

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/Achard-Grundschule-6-C.json', function (req, res) {
  const json = timetable.timetable('Achard-Grundschule-6-C.json');
  res.send(json);
});

app.get('/Achard-Grundschule-6-C.ical', function (req, res) {
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

app.get('/Merian-Schule-9-1.json', function (req, res) {
  const json = timetable.timetable('Merian-Schule-9-1.json');
  res.send(json);
});

app.get('/Merian-Schule-9-1.ical', function (req, res) {
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

app.get('/Siemens-Gymnasium-9-C-Woche-A.json', function (req, res) {
  const json = timetable.timetable('Siemens-Gymnasium-9-C-Woche-A.json');
  res.send(json);
});

app.get('/Siemens-Gymnasium-9-C-Woche-A.ical', function (req, res) {
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

app.get('/Siemens-Gymnasium-9-C-Woche-B.json', function (req, res) {
  const json = timetable.timetable('Siemens-Gymnasium-9-C-Woche-B.json');
  res.send(json);
});

app.get('/Siemens-Gymnasium-9-C-Woche-B.ical', function (req, res) {
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

app.get('/Siemens-Gymnasium-9-C.json', function (req, res) {
  const woche_A = timetable.timetable('Siemens-Gymnasium-9-C-Woche-A.json');
  const woche_B = timetable.timetable('Siemens-Gymnasium-9-C-Woche-B.json');
  const json = alternate_table.alternate(new Date(), woche_A, woche_B);
  res.send(json);
});

app.get('/Siemens-Gymnasium-9-C.ical', function (req, res) {
  const woche_A = timetable.timetable('Siemens-Gymnasium-9-C-Woche-A.json');
  const woche_B = timetable.timetable('Siemens-Gymnasium-9-C-Woche-B.json');
  const json = alternate_table.alternate(new Date(), woche_A, woche_B);
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

app.listen(PORT, function () {
  console.log(`emkay-ical-app is listening on port ${PORT}!`);
});
