
//==========================================================================
// Tests
// Assumes o2.2.js and jasmine are loaded
//==========================================================================
describe("remoteMathService test suite", function() {
  
  it("callOneService returns one", function(done) {
    callOneService(function(err, res) {
      expect(res).toBe(1);
      done();
    });
  });
  
  it("callTwoService returns two", function(done) {
    callTwoService(function(err, res) {
      expect(res).toBe(2);
      done();
    });
  });
  
  it("remoteMathService gets 3", function(done) {
    var service = remoteMathService(function(err, answer) {
      expect(answer).toBe(3);
      done();
    });
  });
});