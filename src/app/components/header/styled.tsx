import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  border-top: 3px solid var(--first-color);

  @media (min-width: 769px) {
    padding: 10px 20px;
  }
`;

export const Navbar = styled.nav`
  padding: 0.4rem;
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

export const NavMenu = styled.div``;

export const NavList = styled.ul`
  display: none;

  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
  }
`;

export const NavItem = styled.li``;
