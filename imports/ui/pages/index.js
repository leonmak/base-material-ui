import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router';

export const Index = () => (
  <Jumbotron className="text-center">
    <h2>Dashboard for <Link to="http://m.me/313103322397034">Messenger Bot</Link></h2>
    <p>View the latest analytics from the SIA Concierge messnger bot</p>
    <p style={ { fontSize: '16px', color: '#aaa' } }>Team Student Travel Cloud</p>

  </Jumbotron>
);
