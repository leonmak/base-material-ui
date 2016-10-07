import { Faqs } from './faqs';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { rateLimit } from '../../modules/rate-limit.js';

export const insertFaq = new ValidatedMethod({
  name: 'faqs.insert',
  validate: new SimpleSchema({
    flightId: { type: String },
    sentiment: { type: Boolean}
  }).validator(),
  run(faqs) {
    Faqs.insert(sentiment);
  },
});

export const removeFaq = new ValidatedMethod({
  name: 'faqs.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
     Faqs.remove(_id);
  },
});

rateLimit({
  methods: [
    insertFaq,
    removeFaq,
  ],
  limit: 5,
  timeRange: 1000,
});
