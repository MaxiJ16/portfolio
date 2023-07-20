import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;

  .scrolled {
    background-color: var(--body-color);
    box-shadow: rgba(57, 57, 57, 0.1) 0px 30px 60px;

    @media (min-width: 769px) {
      border-radius: 1rem;
    }
  }
`;

export const Navbar = styled.nav`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg:hover,
  p:hover {
    color: var(--first-color);
  }

  @media (min-width: 350px) {
    padding: 0.6rem 2rem;
    border-radius: 30px;
  }

  @media (min-width: 769px) {
    padding: 1.5rem 3.25rem;
  }

  @media (min-width: 1024px) {
    padding: 1.5rem 4.5rem;
  }

  @media (min-width: 1200px) {
    padding: 1.5rem 12rem;
  }
  @media (min-width: 1500px) {
    padding: 1.5rem 16rem;
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
    align-items: center;
    column-gap: 2rem;
  }
`;

export const NavItem = styled.li`
  svg {
    width: 24px;
    height: 24px;
  }
`;
