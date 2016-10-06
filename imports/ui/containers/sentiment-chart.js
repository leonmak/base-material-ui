import { composeWithTracker } from 'react-komposer';
import { Sentiments } from '../../api/sentiments/sentiments.js';
import  SentimentChart  from '../components/sentiment-chart.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('sentiments');
  if (subscription.ready()) {
    const sentiment = Sentiments.find().fetch();
    onData(null, { sentiment });
  }
};

export default composeWithTracker(composer, Loading)(SentimentChart);
