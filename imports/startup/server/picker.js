var bodyParser = require('body-parser')
import { Documents } from '../../api/documents/documents';

Picker.middleware( bodyParser.json() );
Picker.middleware( bodyParser.urlencoded( { extended: false } ) );

var postRoutes = Picker.filter(function(req, res) {
  return req.method == "POST";
});


postRoutes.route('/api/flights/', function(params, req, res, next) {
  console.log('content: ', req.body)
  // var doc = Documents.findOne(params._id);
  const content = req.body;
  switch (content.key) {
    case 'faq':
    break;

    case 'rating':
    break;

    case 'feedback':
    break;

    case 'rawrequest':
    break;

    default:
    break;
  }



  res.end('OK')
});
