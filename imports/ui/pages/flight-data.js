import React from 'react';
import { Row, Col } from 'react-bootstrap';
import DocumentsList from '../containers/documents-list.js';
import BarChart from "../containers/bar-chart.js";
import SentimentChart from "../containers/sentiment-chart.js";
import FeedbackTable from "../containers/feedback-table.js"
import { AddDocument } from '../components/add-document.js';
import {Chart} from 'react-google-charts'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';

var LineChart = require("react-chartjs").Line;
var chartData =  {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false,
        }
    ]
};

var chartOptions = {
  options: {
    responsive: false
  }
};

const initialState = { value: '', delayed: false, takeOff: false, touchDown: false };

export class FlightData extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.handleChange=this.handleChange.bind(this);
    this.sendAnnouncement=this.sendAnnouncement.bind(this);
    this.delayFlight=this.delayFlight.bind(this);
    this.takeOff=this.takeOff.bind(this);
    this.touchDown=this.touchDown.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  sendAnnouncement(postType, value) {
    if(value)
      Meteor.call('updateDelay', this.props.params.id, postType, value)
    else
      Meteor.call('updateFlight',this.props.params.id, postType)

    this.setState({delayed: false})
  }

  delayFlight() {
    this.setState({
      delayed:!this.state.delayed,
      value: ''
    })
  }

  takeOff() {
    if(!this.state.takeOff)
      this.sendAnnouncement('startflight');
    this.setState({takeOff:!this.state.takeOff})
  }

  touchDown() {
    if(!this.state.touchDown)
      this.sendAnnouncement('endflight');
    this.setState({touchDown: !this.state.touchDown})
  }

  render() {
    return (
    <Row>
      <Col xs={ 12 }>
      {this.props.params.id && <h4 className="page-header">In-Flight Data Anayltics for Flight: {this.props.params.id}</h4> }

      <div style={{ maxWidth: 250 }}>
        <Toggle label="Flight Delay" toggled={this.state.delayed} onTouchTap={this.delayFlight}/>
        {this.state.delayed && <div>
        <TextField id="text-field-announcement" hintText="Enter new time of flight" value={this.state.value} onChange={this.handleChange}/>
        <RaisedButton label="Announce" primary={true} onTouchTap={()=>this.sendAnnouncement('flightdelay', this.state.value)}/>
        </div>}

        <Toggle label="Flight Take Off" toggled={this.state.takeOff} onTouchTap={this.takeOff}/>
        <Toggle label="Flight Touch Down" toggled={this.state.touchDown} onTouchTap={this.touchDown}/>
      </div>

        <DocumentsList />
        <BarChart />
        <SentimentChart />
        <FeedbackTable />

        <LineChart data={chartData} options={chartOptions} width="600" height="250"/>
        <Chart chartType="ScatterChart" data={[     ['Age', 'Weight'], [ 8,      12], [ 4,      5.5]]} options={{}} graph_id="ScatterChart"  width={"100%"} height={"400px"}  legend_toggle={true} />

      </Col>
    </Row>
    )
  }
}
