import styled from "styled-components";

const StyledSideNav = styled.div`
  overflow: hidden;
  background-color: #8c6100;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 30%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  z-index: 1000;
  padding-top: 20px;
  padding-left: 20px;
  color: white;
`;

const StyledSideNavTitle = styled.div`
  font-size: 1.6em;
`;

const StyledSideNavMenu = styled.div`
  font-size: 1.6em;
  padding: 15px;
`;

const StyledSideNavMenuItem = styled.div`
  text-decoration: none;
  display: block;
  font-size: 1.2em;
`;

export {
  StyledSideNav,
  StyledSideNavTitle,
  StyledSideNavMenu,
  StyledSideNavMenuItem
};
