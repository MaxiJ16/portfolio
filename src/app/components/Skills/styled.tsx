import styled from "styled-components";
export const SkillSection = styled.section``;

export const SkillsContainer = styled.div`
  row-gap: 2rem;

  @media (min-width: 320px) {
    padding: 1rem;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 400px);
    column-gap: 3rem;
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(3, 400px);
  }
`;
