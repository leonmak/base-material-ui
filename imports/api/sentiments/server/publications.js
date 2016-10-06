import { Meteor } from 'meteor/meteor';
import { Sentiments } from '../sentiments';

Meteor.publish('sentiments', () => Sentiments.find());
