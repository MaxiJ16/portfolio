import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  border-top: 3px solid var(--first-color);
`;

export const Navbar = styled.nav`
  padding: 1rem 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nameNavbar {
    font-size: 24px;
  }

  p:hover {
    color: var(--first-color);
  }

  @media (min-width: 769px) {
    padding: 2rem 3.25rem 4rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem 6.25rem 4rem;
  }
`;

export const NavMenu = styled.div`
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
