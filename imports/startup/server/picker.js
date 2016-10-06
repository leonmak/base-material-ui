var bodyParser = require('body-parser')
import { Documents } from '../../api/documents/documents';

Picker.middleware( bodyParser.json() );
Picker.middleware( bodyParser.urlencoded( { extended: false } ) );

var postRoutes = Picker.filter(function(req, res) {
  return req.method == "POST";
});


postRoutes.route('/flights/:_id', function(params, req, res, next) {
  console.log('id: ',params._id)
  console.log('content: ', res.body)
  // var doc = Documents.findOne(params._id);
  // res.end(doc.content);
});
