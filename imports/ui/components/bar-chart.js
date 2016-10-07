import {Chart} from 'react-google-charts';
import React from 'react'

export default class BarChart extends React.Component {
  constructor(props){
    super(props);
    this.state={
      options:{
        animation: {"startup": true,duration:1000,easing:'out',},
          'legend':'left',
          'title':'Overall flight rating',
          'is3D':true,
          'width':500,
          'height':300
      },
      data:[
            ['Rating', 'Rating'],
          ['5', 8],
          ['4', 12],
          ['3', 11],
          ['2', 5],
          ['1', 2]
      ]
    };
  }

  componentDidMount() {
    const obj = _.groupBy(this.props.ratings, 'rating');
    let ratings = [['Rating', 'Rating']];
    for(var i=1; i<6; i++){
      ratings[i] = [i, (obj[i] ? obj[i].length : 0)];
    }
    this.setState({data: ratings});
  }
  render() {
      return (
        <Chart chartType="BarChart" data={this.state.data} options={this.state.options} graph_id="BarChart"  width={"100%"} height={"400px"}  legend_toggle={true} />
      );
  }
};
