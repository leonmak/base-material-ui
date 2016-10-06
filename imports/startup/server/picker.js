var bodyParser = require('body-parser')
import { Documents } from '../../api/documents/documents';

Picker.middleware( bodyParser.json() );
Picker.middleware( bodyParser.urlencoded( { extended: false } ) );

Picker.route('/documents/:_id', function(params, req, res, next) {

  var doc = Documents.findOne(params._id);
  res.end(doc.content);
});
