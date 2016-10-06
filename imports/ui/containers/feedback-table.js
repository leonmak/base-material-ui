import { composeWithTracker } from 'react-komposer';
import { Feedbacks } from '../../api/feedbacks/feedbacks.js';
import  FeedbackTable  from '../components/feedback-table.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('feedbacks');
  if (subscription.ready()) {
    const feedbacks = Feedbacks.find().fetch();
    onData(null, { feedbacks });
  }
};

export default composeWithTracker(composer, Loading)(FeedbackTable);
