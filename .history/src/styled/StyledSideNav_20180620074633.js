import styled from "styled-components";

const StyledSideNav = styled.div`
  overflow: hidden;
  background-color: #8c6100;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 40%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
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
