import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';
import AppNavigation from '../containers/app-navigation';
import SideMenu from '../containers/side-menu';

const isMobile = () => $(window).width() < 960

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mobileWidth: isMobile()
    }
  }

  componentDidMount() {
    $( window ).resize(() => {
      this.setState({mobileWidth: isMobile()})
    });
  }

  render() {

    return <div className={!this.state.mobileWidth && 'desktop-width'}>

      <SideMenu />

      <AppNavigation mobileWidth={this.state.mobileWidth}/>
      <Grid>
        { this.props.children }
      </Grid>

    </div>
  }
};
