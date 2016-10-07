var request = require('superagent');
var moment = require('moment');

Meteor.methods({

  updateDelay: (flightId, posttype, val) => {
    check(posttype, String);
    check(flightId, String);
    check(val, Date);

    const formatDate = moment(val).format("h:mm a")
    console.log(formatDate)

    request
    .post('https://afternoon-everglades-21984.herokuapp.com/api/announce?'+'flightId='+flightId+'&val='+formatDate  +'&posttype='+posttype)
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
