import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import * as Icon from  '../../util/icon';

const goTo = url => () => browserHistory.push(url);
export const Index = () => (
  <div>
  <Jumbotron className="text-center">
    <h2>Dashboard for <Link to="http://m.me/313103322397034">Messenger Bot</Link></h2>
    <p>View the latest analytics from the SIA Concierge messnger bot</p>
    <p style={ { fontSize: '16px', color: '#aaa' } }>Team Student Travel Cloud</p>
  </Jumbotron>
  <Row className="text-center">
  <Col xs={12} md={6}>
    <RaisedButton className="dashboard-btn" label='View Flights Today - Admin' primary={true} icon={Icon.MUI('date_range')}
      onTouchTap={goTo('flights')}/>
  </Col>
  <p> </p>
  <Col xs={12} md={6}>
    <RaisedButton className="dashboard-btn" label='View Your Current Flight' primary={true} icon={Icon.MUI('flight_takeoff')}
      onTouchTap={goTo('flights/'+1)}/>
      {/*onTouchTap={goTo('flights/'+Meteor.user().flightNum)}/>*/}
  </Col>
  </Row>
  </div>
);
