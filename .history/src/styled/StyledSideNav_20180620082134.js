import styled, { keyframes } from "styled-components";

const bounce = `
     from {transform: translateY(0);}
     to   {transform: translateY(-450px);}
`;

const StyledSideNav = styled.div`
  overflow: hidden;
  background-color: #8c6100;
  transition: all 1s cubic-bezier(0.75, -0.5, 0, 1.75);
  position: fixed;
  width: 400px;
  height: 100%;
  top: 0;
  opacity: ${props => (props.open ? 1 : 0)};
  animation: ${props => (props.open ? "bounce 0.35s ease " : "none")};

  overflow-x: hidden;
  z-index: 1000;
  padding-top: 20px;
  padding-left: 20px;
  color: white;
  box-shadow: 11px 0px 20px 0px rgba(0, 0, 0, 0.3) inset;
  border-right: 1px solid #825901;
`;

const StyledSideNavTitle = styled.div`
  font-size: 1.8em;
  text-align: center;
`;

const StyledSideNavMenu = styled.div`
  padding: 15px;
`;

const StyledSideNavMenuItem = styled.div`
  text-decoration: none;
  display: block;
  margin-top: 20px;
  padding-bottom: 10px;
  font-size: 1.5em;
  text-shadow: 1px 1px 1px #825901;
  border-bottom: 1px solid #825901;
`;

const StyledSideNavClose = styled.span`
  display: block;
  float: right;
  color: #684701;
  font-size: 1.6em;
  position: relative;
  bottom: 7px;
  right: 10px;
  cursor: pointer;
  outline: none;
  svg {
    font-size: 40px;
  }
`;

export {
  StyledSideNav,
  StyledSideNavTitle,
  StyledSideNavMenu,
  StyledSideNavMenuItem,
  StyledSideNavClose
};
