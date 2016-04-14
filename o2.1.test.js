//==========================================================================
// Option 2 Question 1 Test
//==========================================================================

describe("Foo test suite", function() {
  it("Foo will log success", function() {
    spyOn(window, 'doThing').and.callFake(function(callback) {
      callback(null, 'Success');
    });
    
    foo(function(err, res) {
      expect(err).toBe(null);
      expect(res).toBe('Success');
    });
  });
  
  it("Foo will log error", function() {
    spyOn(window, 'doThing').and.callFake(function(callback) {
      callback('Error Message', 'Failed');
    });
    
    foo(function(err, res) {
      expect(err).toBe('Error Message');
      expect(res).toBe('Failed');
    });
  });
});