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
`;

export { StyledSideNav, StyledSideNavTitle };
