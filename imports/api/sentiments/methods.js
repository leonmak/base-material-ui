import { Sentiments } from './sentiments';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { rateLimit } from '../../modules/rate-limit.js';

export const insertRating = new ValidatedMethod({
  name: 'sentiments.insert',
  validate: new SimpleSchema({
    flightId: { type: String },
    sentiment: { type: Boolean}
  }).validator(),
  run(sentiments) {
    Ratings.insert(sentiment);
  },
});

export const updateSentiment = new ValidatedMethod({
  name: 'sentiments.update',
  validate: new SimpleSchema({
    flightId: { type: String },
    sentiment: { type: Boolean},
      _id: { type: String },
    'update.sentiment': { type: Number},
  }).validator(),
  run({ _id, update }) {
    Sentiments.update(_id, { $set: update });
  },
});

export const removeRating = new ValidatedMethod({
  name: 'ratings.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
     Sentiments.remove(_id);
  },
});

rateLimit({
  methods: [
    insertRating,
    updateRating,
    removeRating,
  ],
  limit: 5,
  timeRange: 1000,
});
