import { Meteor } from 'meteor/meteor';
import { Feedbacks } from '../feedbacks';

Meteor.publish('feedbacks', () => Feedbacks.find());
