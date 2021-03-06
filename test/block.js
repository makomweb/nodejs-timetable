const expect = require('chai').expect;
const block = require('../app/block');
const timetable = require('../app/timetable');

describe("Block", function() {
  describe("Determining the length of a regular block should succeed", function() {
    it("run", function() {
      const table = timetable.timetable('Achard-Grundschule-6-C.json');
      const blockLength = block.length(table);
      expect(blockLength).to.be.equal(45 * 60 * 1000); // 45 * 60 s * 1000 ms = 45 min
    });
  });describe("Determining the length of a double block should succeed", function() {
    it("run", function() {
      const table = timetable.timetable('Siemens-Gymnasium-9-C-Woche-A.json');
      const blockLength = block.length(table);
      expect(blockLength).to.be.equal(90 * 60 * 1000); // 90 * 60 s * 1000 ms = 90 min
    });
  });
});