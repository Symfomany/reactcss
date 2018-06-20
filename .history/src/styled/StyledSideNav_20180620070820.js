import styled from "styled-components";

const StyledSideNav = styled.div`
  overflow: hidden;
  background-color: #eee;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 30%;
  z-index: 1000;
`;

const StyledSideNavTitle = styled.div`
  background-color: #222;
  font-size: 1.6em;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
  color: white;
`;

const StyledSideNavMenu = styled.div`
  background-color: #222;
  font-size: 1.6em;
  padding: 15px;
`;

const StyledSideNavMenuItem = styled.div`
  text-decoration: none;
  display: block;
`;

export {
  StyledSideNav,
  StyledSideNavTitle,
  StyledSideNavMenu,
  StyledSideNavMenuItem
};
