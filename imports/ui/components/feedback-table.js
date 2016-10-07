import {Chart} from 'react-google-charts';
import React from 'react'
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

export default class FeedbackTable extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Table
        height={'300px'}
        fixedHeader={true}
        fixedFooter={true}
        selectable={true}
        multiSelectable={false}
      >
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
          enableSelectAll={false}
        >
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Feedback</TableHeaderColumn>
            <TableHeaderColumn>Sentiment</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={true}
          deselectOnClickaway={true}
          showRowHover={false}
          displayRowCheckbox={false}
          stripedRows={false}
        >
          {this.props.feedbacks.map( (row, index) => (
            <TableRow key={index} selected={row.selected}>
              <TableRowColumn>{row.passenger.fullName}</TableRowColumn>
              <TableRowColumn>{row.feedback}</TableRowColumn>
              <TableRowColumn>{row.sentiment ? 'Positive' : 'Negative'}</TableRowColumn>
            </TableRow>
            ))}
        </TableBody>
    </Table>
    );
  }
};
