import {Chart} from 'react-google-charts';
import React from 'react'

export default class FeedbackTable extends React.Component {
  constructor(props){
    super(props);
    this.state={
      options:{
        title: 'Feedback',
        page: 'enable'
      },
      data:[
            ['Feedback', 'Sentiment'],
          ['The service was amazing!', true],
          ['There was a really noisy passenger beside me',false],
          ['The in-flight meals were delicious, look forward to flying with SIA again!', true],
          ['Thank you for upgrading me to business class!', true]
      ]
    };
  }
  render() {
      return (
        <Chart chartType="Table" data={this.state.data} options={this.state.options} graph_id="BarChart"  width={"100%"} height={"20%"}  legend_toggle={true} />
      );
  }
};