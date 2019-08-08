const expect = require('chai').expect;
const timetable = require('../app/timetable');
const helper = require('../app/helper');

describe("Timetable", function() {
  describe("Reading JSON for Toni should succed", function() {
    it("run", function() {
      const table = timetable.toni();
      expect(table).to.be.deep.property('Weekdays').not.null;
    });
  });
  describe("Getting Monday for Toni should succeed", function() {
    it ("run", function() {
      const table = timetable.toni();
      const Monday = helper.getNestedObject(table, ['Weekdays'])[0];
      expect(Monday).to.be.deep.property('Name').equal('Monday');
    });
  });
});