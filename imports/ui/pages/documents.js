import React from 'react';
import { Row, Col } from 'react-bootstrap';
import DocumentsList from '../containers/documents-list.js';
import { AddDocument } from '../components/add-document.js';
import {Chart} from 'react-google-charts'

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

export const Documents = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Documents</h4>
      <AddDocument />
      <DocumentsList />

      <LineChart data={chartData} options={chartOptions} width="600" height="250"/>
      <Chart chartType="ScatterChart" data={[     ['Age', 'Weight'], [ 8,      12], [ 4,      5.5]]} options={{}} graph_id="ScatterChart"  width={"100%"} height={"400px"}  legend_toggle={true} />

    </Col>
  </Row>
);
