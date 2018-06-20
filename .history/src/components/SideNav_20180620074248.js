import React, { Component } from "react";
import {
  StyledSideNav,
  StyledSideNavTitle,
  StyledSideNavMenu,
  StyledSideNavMenuItem,
  StyledSideNavClose
} from "../styled/StyledSideNav";
import Clear from "@material-ui/icons/Clear";
import { VelocityComponent, VelocityTransitionGroup } from "velocity-react";
import "velocity-animate";
import "velocity-animate/velocity.ui";

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ visible: true }), 100);
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
            <VelocityTransitionGroup
              enter={{
                animation: "transition.slideLeftIn",
                stagger: "100",
                duration: "400"
              }}
              leave={{
                animation: "transition.slideLeftOut",
                backwards: "350"
              }}
            >
              {this.state.visible &&
                [1, 2, 3, 4, 5, 6].map(elt => (
                  <StyledSideNavMenuItem>Item {elt}</StyledSideNavMenuItem>
                ))}
            </VelocityTransitionGroup>
          </StyledSideNavMenu>
        </StyledSideNav>
      </div>
    );
  }
}

export default SideNav;
