const expect = require('chai').expect;
const timetable = require('../app/timetable');
const helper = require('../app/helper');

describe("Timetable", function() {
  describe("Reading JSON for Achard 6C should succed", function() {
    it("run", function() {
      const table = timetable.achard_6_c();
      expect(table).to.be.deep.property('Weekdays').not.null;
    });
  });
  describe("Getting Monday for Achard 6C should succeed", function() {
    it ("run", function() {
      const table = timetable.achard_6_c();
      const Monday = helper.getNestedObject(table, ['Weekdays'])[0];
      expect(Monday).to.be.deep.property('Name').equal('Monday');
    });
  });
});