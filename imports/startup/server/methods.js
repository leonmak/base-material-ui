var request = require('superagent');

Meteor.methods({

  updateDelay: (flightId, posttype, val) => {
    check(posttype, String);
    check(flightId, String);
    check(val, String);

    request
    .post('https://afternoon-everglades-21984.herokuapp.com/api/announce?'+'flightId='+flightId+'&val='+val+'&posttype='+posttype)
    .end(function(err, res){
      console.log(res.body)
    });
  },

  updateFlight: (flightId, posttype) => {
    check(posttype, String);
    check(flightId, String);

    request
    .post('https://afternoon-everglades-21984.herokuapp.com/api/announce?'+'flightId='+flightId+'&posttype='+posttype)
    .end(function(err, res){
      console.log(res.body)
    });
  }

})
