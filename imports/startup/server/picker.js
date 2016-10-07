var bodyParser = require('body-parser')
import { Documents } from '../../api/documents/documents';
import { insertDocument } from '../../api/documents/methods';
import { insertFaq } from '../../api/faqs/methods';
import { insertFeedback } from '../../api/feedbacks/methods';
import { insertRating } from '../../api/ratings/methods';

Picker.middleware( bodyParser.json() );
Picker.middleware( bodyParser.urlencoded( { extended: false } ) );

var postRoutes = Picker.filter(function(req, res) {
  return req.method == "POST";
});

postRoutes.route('/api/flights/', function(params, req, res, next) {
  const errHandler = (error) => { error && console.log(error.reason, 'danger') };
  console.log('content: ', req.body)
  // var doc = Documents.findOne(params._id);
  const content = req.body;
  const passenger = content.context.passengerData;
  const flightId = passenger.airlineCode + passenger.flightNum + passenger.flightDate;
  switch (content.key) {
    case 'faq':
      insertFaq.call({flightId, faq: content.context.faq}, errHandler)
    break;

    case 'rating':
      insertRating.call({flightId, rating: content.context.rating}, errHandler)
    break;

    case 'feedback':
      insertFeedback.call({flightId, feedback: content.context.feedback, sentiment: content.context.feedbackSentiment, passenger}, errHandler)
    break;

    case 'rawrequest':
      insertDocument.call({flightId, title: content.context.request, seat: passenger.seatNum, passenger}, errHandler)
    break;

    default:
    break;
  }



  res.end('OK')
});
