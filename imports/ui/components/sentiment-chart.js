import {Chart} from 'react-google-charts';
import React from 'react'

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
      data:[
          ['Sentiment', 'Count'],
          ['Positive',11],
          ['Negative',2],
          ['Neutral',5]
      ]
    };
  }
  render() {
      return (
        <Chart chartType="PieChart" data={this.state.data} options={this.state.options} graph_id="SentimentChart"  width={"100%"} height={"400px"}  legend_toggle={true} />
      );
  }
};
