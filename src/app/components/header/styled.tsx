import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  border-top: 3px solid var(--first-color);

  @media (min-width: 769px) {
    padding: 10px 20px;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 769px) {
    padding: 0.4rem 3rem;
  }

  h2:hover {
    color: var(--first-color);
  }

  .nameNavbar {
    font-size: 30px;
  }
`;

export const NavMenu = styled.div`
  padding: 2rem 0.25rem 4rem;

  @media (min-width: 769px) {
    margin-left: auto;
  }
`;

export const NavList = styled.ul`
  display: none;

  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    column-gap: 2rem;
  }
`;

export const NavItem = styled.li``;
