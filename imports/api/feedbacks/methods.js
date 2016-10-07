import { Feedbacks } from './feedbacks';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { rateLimit } from '../../modules/rate-limit.js';

export const insertFeedback = new ValidatedMethod({
  name: 'feedback.insert',
  validate: new SimpleSchema({
    flightId: { type: String },
    feedback: { type: String },
    sentiment:{ type: Boolean},
    passenger:{ type: Object, blackbox: true},

  }).validator(),
  run(feedback) {
    Feedbacks.insert(feedback);
  },
});

export const removeFeedback = new ValidatedMethod({
  name: 'feedback.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Feedbacks.remove(_id);
  },
});

rateLimit({
  methods: [
    insertFeedback,
    removeFeedback,
  ],
  limit: 5,
  timeRange: 1000,
});
