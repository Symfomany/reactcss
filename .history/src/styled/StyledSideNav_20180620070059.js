import styled from "styled-components";

const StyledSideNav = styled.div`
  overflow: hidden;
  background-color: #eee;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
`;

const StyledSideNavTitle = styled.div`
  background-color: #222;
  font-size: 1.6em;
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
  color: white;
`;

const StyledSideNavMenu = styled.div`
  background-color: #222;
  font-size: 1.6em;
`;

const StyledSideNavMenuItem = styled.div``;

export {
  StyledSideNav,
  StyledSideNavTitle,
  StyledSideNavMenu,
  StyledSideNavMenuItem
};
