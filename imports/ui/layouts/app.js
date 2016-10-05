import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';
import AppNavigation from '../containers/app-navigation';
import AppBar from 'material-ui/AppBar';
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

  toggleMobile() {
    this.setState({mobileWidth: !this.state.mobileWidth})
  }

  render() {

    return <div>

    <SideMenu isOpen={!this.state.mobileWidth} isMobile={isMobile()}/>

    <div className={!this.state.mobileWidth && !isMobile() && 'desktop-width'}>

      <AppBar
        style={{textAlign: 'center'}}
        title={<span className="app-title">SIA Concierge</span>}
        onLeftIconButtonTouchTap={this.toggleMobile.bind(this)}/>
      {/*<AppNavigation />*/}

      <Grid>
        { this.props.children }
      </Grid>

    </div>
    </div>
  }
};
