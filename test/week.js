const expect = require('chai').expect;
const week = require('../app/week');

describe("Week", function() {
  describe("Determining first day of week should succeed", function() {
    it("run", function() {
      const first = week.firstDayOfWeek(new Date(), 1);
      expect(first.toString()).contains('Mon ');
    });
  });
});