var bodyParser = require('body-parser')

Picker.middleware( bodyParser.json() );
Picker.middleware( bodyParser.urlencoded( { extended: false } ) );

Picker.route('/post/:_id', function(params, req, res, next) {
  var post = Posts.findOne(params._id);
  res.end(post.content);
});
