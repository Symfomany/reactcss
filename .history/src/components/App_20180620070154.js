import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Liste from "./Liste";
import TopBar from "./TopBar";
import SideNav from "./SideNav";
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TopBar />
        <SideNav />
        <Liste />
      </div>
    );
  }
}

export default withStyles(styles)(App);
