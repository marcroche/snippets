// This is a mock database implementation with just a connect function
// db.connect will need to be called a total of 10 times before it successfully connects
var counter = 0;
var db = {
  connect: function(cb) {
    console.log('connection attempt' , counter + 1);
    if (counter < 9) {
      counter++;
      return cb('db not ready yet');
    }
    return cb();
  }
};

// Try to connect, log a successful connection & exit
// If we fail to connect, log an error and try again with exponential backoff
var delay = 0;
function connectToDb() {
  db.connect(function (err) {
    if (err) {
      console.error(err);
      delay = Math.max(delay *= 2, 1);
      setTimeout(function() {
          connectToDb();
        }, delay * 1000);
    } else {
      console.log ('successfully connected!');
    }
  });  
}

connectToDb();
