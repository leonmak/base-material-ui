import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Faqs = new Mongo.Collection('Faqs');

Faqs.schema = new SimpleSchema({
  flightId: {
    type: String,
  },
  faq: {
    type: String,
  }
});

Faqs.attachSchema(Faqs.schema);
