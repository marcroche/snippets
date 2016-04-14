//==========================================================================
// Option 2 Question 1
//==========================================================================

function doThing(callback) {
  try {
    consolme.log('Doing some things...');
    callback(null, 'Success');
  } catch(e) {
    callback(e.message, 'Failed');
  }
}

function foo(callback) {
  doThing(function(err, res) {
    if (err) {
      callback(err, res);
    } else {
      callback(null , res);
    }
  });
}

foo(function(err, res) {
  if (err) {
      console.log('Done!', res, err);
    } else {
      console.log('Done!', res);
    }
});
