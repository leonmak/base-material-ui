import { composeWithTracker } from 'react-komposer';
import { Ratings } from '../../api/ratings/ratings.js';
import  BarChart  from '../components/bar-chart.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('ratings');
  if (subscription.ready()) {
    const ratings = Ratings.find().fetch();
    onData(null, { ratings });
  }
};

export default composeWithTracker(composer, Loading)(BarChart);
