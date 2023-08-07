import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;

  .scrolled {
    box-shadow: rgba(57, 57, 57, 0.1) 0px 30px 60px;

    @media (min-width: 768px) {
      border-radius: 1rem;
    }
  }
`;

export const Navbar = styled.nav`
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg:hover,
  p:hover {
    color: var(--first-color);
  }

  @media (min-width: 375px) {
    padding: 0.6rem 2rem;
    border-radius: 30px;
  }

  @media (min-width: 768px) {
    padding: 1rem 4.25rem;
    .toggle {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    padding: 1rem 4.5rem;
  }

  @media (min-width: 1200px) {
    padding: 1rem 12rem;
  }
  @media (min-width: 1500px) {
    padding: 1rem 16rem;
  }
`;

export const NavMenu = styled.div`
  @media (min-width: 768px) {
    margin-left: auto;
  }
`;

export const NavList = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 2rem;
  }

  li.activeSec {
    border-bottom: 3px solid var(--first-color);
  }

  .activeSec {
    opacity: 1;
  }
`;

export const NavItem = styled.li``;

export const ContainerMoon = styled.div`
  display: flex;
  align-items: center;
`;
