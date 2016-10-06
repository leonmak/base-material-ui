import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Sentiments = new Mongo.Collection('Sentiments');

Sentiments.schema = new SimpleSchema({
  flightId: {
    type: String,
    //label: 'The title of the document.',
  },
   sentiment: {
     type: Boolean,
    }
});

Sentiments.attachSchema(Sentiments.schema);