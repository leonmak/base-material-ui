var bodyParser = require('body-parser')
import { Documents } from '../../api/documents/documents';
import { insertDocument } from '../../api/documents/methods';
import { insertFaq } from '../../api/faqs/methods';
import { insertFeedback } from '../../api/feedbacks/methods';
import { insertRating } from '../../api/ratings/methods';
import { Bert } from 'meteor/themeteorchef:bert';

Picker.middleware( bodyParser.json() );
Picker.middleware( bodyParser.urlencoded( { extended: false } ) );

var postRoutes = Picker.filter(function(req, res) {
  return req.method == "POST";
});

const BertHandler = (error) => { error && Bert.alert(error.reason, 'danger') };


postRoutes.route('/api/flights/', function(params, req, res, next) {
  console.log('content: ', req.body)
  // var doc = Documents.findOne(params._id);
  const content = req.body;
  const passenger = content.context.passengerData;
  const flightId = passenger.airlineCode + passenger.flightNum + passenger.flightDate;
  switch (content.key) {
    case 'faq':
      insertFaq.call({flightId, faq: content.context.faq}, BertHandler)
    break;

    case 'rating':
      insertRating.call({flightId, rating: content.context.rating}, BertHandler)
    break;

    case 'feedback':
      insertFeedback.call({flightId, feedback: content.context.feedback, sentiment: content.context.feedbackSentiment, passenger}, BertHandler)
    break;

    case 'rawrequest':
      insertDocument.call({flightId, title: content.context.request, seat: passenger.seatNum, passenger}, BertHandler)
    break;

    default:
    break;
  }



  res.end('OK')
});
