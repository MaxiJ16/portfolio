import styled from "styled-components";

export const ProjectSection = styled.section`
  width: 100%;

  h2 {
    text-align: center;
    font-size: var(--h1-font-size);
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 4rem .5rem;
  overflow: initial;
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, max-content);
    gap: 3rem;
  }
`;
