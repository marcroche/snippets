//==========================================================================
// Option 2 Question 2 - http://jsbin.com/rurufa/7/edit?js,console,output
// Assumes Q is loaded
//==========================================================================

function remoteMathService(cb) {
  var one;
  var two;
  
  return Q.all([
  
    callOneService(function(err, num) {
      one = num;
    }),
  
    callTwoService(function(err, num) {
      two = num;
    })])
    .done(function() {
      return cb(undefined, one + two);  
    });
}

function callOneService(cb) {
  var deferred = Q.defer();
  
  setTimeout(function() {
    deferred.resolve(cb(undefined, 1));
  }, 1000);
  
  return deferred.promise;
}

function callTwoService(cb) {
  var deferred = Q.defer();
  
  setTimeout(function() {
    deferred.resolve(cb(undefined , 2));
  }, 1500);
  
  return deferred.promise;
}

remoteMathService(function(err, answer) {
  if (err) console.log("error ", err);
  
  if (answer !== 3 ) {
    console.log("wrong answer", answer);
  } else {
    console.log("correct");
  }
});
