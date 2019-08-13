const expect = require('chai').expect;
const week = require('../app/week');

describe("Week", function() {
  describe("Determining first day of week should succeed", function() {
    it("run", function() {
      const first = week.firstDayOfWeek(new Date(), 1);
      expect(first.toString()).contains('Mon ');
    });
  });
  describe("Determining if week is even should succeed", function() {
    it("run", function() {
      const today = new Date('August 6, 2019');
      const is_odd = week.is_odd(today);
      expect(is_odd).to.be.false;
    });
  });
  describe("Determining if week is odd should succeed", function() {
    it("run", function() {
      const today = new Date('August 13, 2019');
      const is_odd = week.is_odd(today);
      expect(is_odd).to.be.true;
    });
  });
});