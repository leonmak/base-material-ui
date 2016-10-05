import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { SideMenu } from '../components/side-menu';

const composer = (props, onData) => {
  onData(null, { hasUser: Meteor.user() });
};

export default composeWithTracker(composer, {}, {}, { pure: false })(SideMenu);
