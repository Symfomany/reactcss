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
    this.state = {
      open: false
    };
    this.toggleVisible = this.toggleVisible.bind(this);
  }

  toggleVisible() {
    this.setState({ open: true });
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TopBar toggleVisible={this.toggleVisible} />
        {this.state.open && <SideNav toggleVisible={this.toggleVisible} />}
        <Liste />
      </div>
    );
  }
}

export default withStyles(styles)(App);
