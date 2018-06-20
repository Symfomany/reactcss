import React, { Component } from "react";

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return <div className={classes.root} />;
  }
}

export default SideNav;
