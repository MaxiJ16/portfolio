import styled from "styled-components";

export const MenuContainer = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

export const MenuTrigger = styled.div`
  svg {
    stroke: white;
    position: absolute;
    top: 20px;
    right: 20px;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
  }
`;

export const DropdownMenu = styled.div`
  position: fixed;
  top: 100px;
  right: 20px;
  background-color: var(--body-color);
  border-radius: 0rem 0rem 1.5rem 1.5rem; // CHEQUEAR
  padding: 10px;
  width: 210px;
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);

  :before {
    content: "";
    position: absolute;
    top: -5px;
    right: 20px;
    height: 20px;
    width: 20px;
    transform: rotate(45deg);
  }

  /* .greeting {
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: var(--black);
    width: 100%;
    text-align: center;
    font-size: 17px;
    padding: 15px 0;
    font-weight: 500;
    line-height: 1.2rem;
  } */

  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: 500ms ease;
  }

  &.inactive {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: 500ms ease;
  }
`;
export const NavList = styled.ul`
  padding: 0;
  margin: 0 auto;
`;

export const DropdownItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  padding: 5px 0;
  margin: 8px auto;
  font-size: var(--small-font-size);
  color: var(--title-color);
  font-weight: var(--font-medium);
  border-top: 1px solid #e6e3e3;
  border-radius: var(--border-radius);

  &:hover {
    background-color: var(--first-color-lighter);
  }

  svg {
    max-width: 20px;
    margin-right: 6px;
    opacity: 0.5;
    transition: 500ms;
    stroke: var(--first-color-second);
  }

  &:hover a {
    color: var(--first-color-second);
    cursor: pointer;
  }

  &:hover svg {
    stroke: var(--first-color-second);
    opacity: 1;
    cursor: pointer;
  }

  & a {
    width: 92px;
    margin-left: 10px;
    transition: 500ms;
    font-weight: 500;
  }
`;
