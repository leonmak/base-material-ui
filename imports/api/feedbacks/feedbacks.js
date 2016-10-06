import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Feedbacks = new Mongo.Collection('Feedbacks');

Feedbacks.schema = new SimpleSchema({
  flightId: {
    type: String,
    //label: 'The title of the document.',
  },
   feedback: {
     type: String,
    },
   sentiment: {
      type: Boolean,
   }
});

Feedbacks.attachSchema(Feedbacks.schema);