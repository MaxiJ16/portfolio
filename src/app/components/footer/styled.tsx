import styled from "styled-components";

export const FooterContainer = styled.footer`
  margin-top: 4rem;
  background-color: var(--first-color);
  padding: 2rem 0 6rem;

  h1,
  a {
    color: var(--body-color);
  }

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const FooterList = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const FooterLi = styled.li``;
export const FooterSocial = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 1.25rem;

  a {
    background-color: var(--body-color);
    color: var(--first-color);
    padding: 0.25rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    display: inline-flex;
  }
`;

export const FooterCopy = styled.span`
  display: block;
  margin-top: 4.5rem;
  color: var(--container-color);
  text-align: center;
  font-size: var(--smaller-font-size);
`;
