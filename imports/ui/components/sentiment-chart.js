import {Chart} from 'react-google-charts';
import React from 'react'
var _ = require('lodash');

export default class SentimentChart extends React.Component {
  constructor(props){
    super(props);
    this.state={
      options:{
        animation: {"startup": true,duration:1000,easing:'out',},
        title: 'Sentiment Analysis',
        is3D: true,
        width: 500,
        height: 300,
      },
      flights:[]
    }
  }

  componentDidMount() {
    var obj = _.groupBy(this.props.feedbacks, 'flightId');
    this.setState({flights : Object.keys(obj).map(function (key) { return obj[key]; }) });
  }

  componentWillReceiveProps(nextProps) {
    var obj = _.groupBy(nextProps.feedbacks, 'flightId');
    this.setState({flights : Object.keys(obj).map(function (key) { return obj[key]; }) });
  }


  render() {
    return <div>
    {this.state.flights.map((flight ,idx)=> {
      const sentiment = _.groupBy(flight,'sentiment');
      return(
      <Chart chartType="PieChart" key={idx} data={[['Sentiment','Count'],['Positive', sentiment['true'].length],['Negative',sentiment['false'].length]] }
        options={this.state.options} graph_id={"SentimentChart"+idx}  width={"100%"} height={"400px"}  legend_toggle={true} />
      )
    })}
    </div>
  }
};
