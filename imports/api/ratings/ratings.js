import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Ratings = new Mongo.Collection('Ratings');

Ratings.schema = new SimpleSchema({
  flightId: {
    type: String,
    //label: 'The title of the document.',
  },
   rating: {
     type: Number,
    }
});

Ratings.attachSchema(Ratings.schema);