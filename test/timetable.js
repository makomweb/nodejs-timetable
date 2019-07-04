const expect = require("chai").expect;
const timetable = require("../app/timetable");

describe("Timetable", function() {
  describe("Reading JSON for Toni should succed", function() {
    it("run", function() {
      const table = timetable.toni();
      expect(table).to.be.deep.property('Weekdays').not.null;
    });
  });
});