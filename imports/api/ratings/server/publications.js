import { Meteor } from 'meteor/meteor';
import { Ratings } from '../ratings';

Meteor.publish('ratings', () => Ratings.find());
