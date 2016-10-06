import { Ratings } from './ratings';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { rateLimit } from '../../modules/rate-limit.js';

export const insertRating = new ValidatedMethod({
  name: 'ratings.insert',
  validate: new SimpleSchema({
    flightId: { type: String },
    rating: { type: Number}
  }).validator(),
  run: function run(rating) {
    Ratings.insert(rating);
  },
});

export const updateRating = new ValidatedMethod({
  name: 'ratings.update',
  validate: new SimpleSchema({
    flightId: { type: String },
    rating: { type: Number},
      _id: { type: String },
    'update.rating': { type: Number},
  }).validator(),
  run({ _id, update }) {
    Ratings.update(_id, { $set: update });
  },
});

export const removeRating = new ValidatedMethod({
  name: 'ratings.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Ratings.remove(_id);
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
