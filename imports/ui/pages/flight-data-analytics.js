import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import DocumentsList from '../containers/documents-list.js';
import BarChart from "../containers/bar-chart.js";
import SentimentChart from "../containers/sentiment-chart.js";
import FeedbackTable from "../containers/feedback-table.js"
import { AddDocument } from '../components/add-document.js';
import {Chart} from 'react-google-charts'
import TimePicker from 'material-ui/TimePicker';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';

export class FlightDataAnalytics extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
    <Grid>
    <Row>
      <Col xs={ 12 }>
      {this.props.params.id && <h2 className="text-center page-header">In-Flight Data Analytics for Flight: {this.props.params.id}</h2> }

        <BarChart />

        <FeedbackTable />

      </Col>
    </Row>
    </Grid>
    )
  }
}
