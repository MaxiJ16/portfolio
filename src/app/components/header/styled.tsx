import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  border-top: 3px solid var(--first-color);
  position: sticky;
  top: 0;
  z-index: 100;

  .scrolled {
    background-color: var(--body-color);
    box-shadow: rgba(57, 57, 57, 0.1) 0px 30px 60px;

    @media (min-width: 769px) {
      border-radius: 1rem;
      padding: 2rem 3.25rem;
    }

    @media (min-width: 1024px) {
      padding: 2rem 4.5rem 4rem;
    }

    @media (min-width: 1200px) {
      padding: 2rem 12rem 4rem;
    }

    @media (min-width: 1500px) {
      padding: 2rem 16rem 4rem;
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
    padding: 1rem 2rem 2rem;
  }

  @media (min-width: 769px) {
    padding: 2rem 3.25rem 4rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem 4.5rem 4rem;
  }

  @media (min-width: 1200px) {
    padding: 2rem 12rem 4rem;
  }
  @media (min-width: 1500px) {
    padding: 2rem 16rem 4rem;
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

export const NavItem = styled.li`
  svg {
    width: 24px;
    height: 24px;
  }
`;
