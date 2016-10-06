import { composeWithTracker } from 'react-komposer';
import { Feedbacks } from '../../api/feedbacks/feedbacks.js';
import  FeedbackTable  from '../components/feedback-table.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('feedbacks');
  if (subscription.ready()) {
    const ratings = Feedbacks.find().fetch();
    onData(null, { feedback });
  }
};

export default composeWithTracker(composer, Loading)(Feedbacks);
