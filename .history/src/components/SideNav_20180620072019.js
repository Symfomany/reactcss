import React, { Component } from "react";
import {
  StyledSideNav,
  StyledSideNavTitle,
  StyledSideNavMenu,
  StyledSideNavMenuItem,
  StyledSideNavClose
} from "../styled/StyledSideNav";
import Clear from "@material-ui/icons/Clear";

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
          <StyledSideNavClose>
            <Clear />
          </StyledSideNavClose>
          <StyledSideNavTitle>Mon Menu</StyledSideNavTitle>

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
