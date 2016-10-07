import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

export const Documents = new Mongo.Collection('Documents');

Documents.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Documents.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Documents.schema = new SimpleSchema({
  flightId: {
    type: String,
  },
  title: {
    type: String,
    label: 'The title of the document.',
  },
  seat: {
    type: String
  },
  passenger: {
    type: Object,
    blackbox: true
  }
});

Documents.attachSchema(Documents.schema);

Factory.define('document', Documents, {
  title: () => faker.hacker.phrase(),
});
