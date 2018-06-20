import React, { Component } from "react";
import {
  StyledSideNav,
  StyledSideNavTitle,
  StyledSideNavMenu,
  StyledSideNavMenuItem
} from "../styled/StyledSideNav";

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <StyledSideNav>
          <StyledSideNavTitle>Application Test</StyledSideNavTitle>

          <StyledSideNavMenu>
            <StyledSideNavMenuItem>One</StyledSideNavMenuItem>
            <StyledSideNavMenuItem>Two</StyledSideNavMenuItem>
            <StyledSideNavMenuItem>Three</StyledSideNavMenuItem>
            <StyledSideNavMenuItem>Four</StyledSideNavMenuItem>
            <StyledSideNavMenuItem>Five</StyledSideNavMenuItem>
          </StyledSideNavMenu>
        </StyledSideNav>
      </div>
    );
  }
}

export default SideNav;
