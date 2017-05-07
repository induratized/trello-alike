import React, { Component } from 'react';

// Material-UI components
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

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
          <HeaderComponent />
          <ListsComponent />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default HomePage;