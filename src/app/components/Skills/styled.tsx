import styled from "styled-components";
export const SkillSection = styled.section`
  h2 {
    color: var(--first-color);
  }
`;

export const SkillsContainer = styled.div`
  row-gap: 2rem;
  padding: 1rem;

  @media(min-width: 576px ){
    justify-content: center;
  }
`;
