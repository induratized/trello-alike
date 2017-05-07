import React, { Component } from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
// Material-UI components
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';

import HeaderComponent from '../components/common/HeaderComponent'
import ListsComponent from '../containers/ListsComponentContainer';

class HomePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleTouchTapLeftIconButton = this.handleTouchTapLeftIconButton.bind(this);

    this.state = {
      navDrawerOpen: false
    };
  }

  handleTouchTapLeftIconButton() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen,
    });
  }

  render() {

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          {/*<AppBar
            title="ixigo"
            onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}
          />
          <Drawer
          docked={false}
          open={ this.state.navDrawerOpen }
          onRequestChange={(navDrawerOpen) => this.setState({navDrawerOpen})}
        >
        </Drawer>*/}
          <HeaderComponent />
          <ListsComponent />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default HomePage;