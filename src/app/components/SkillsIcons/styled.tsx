import styled from "styled-components";

export const SkillsContent = styled.div`
  background-color: var(--container-color);
  padding: 1rem 0.5rem;
  border-radius: 1.25rem;
  /* border: 1px solid; */
  

  @media(min-width: 576px ){
    padding: 2rem 4rem;
  }

  h3 {
    font-size: var(--normal-font-size);
    color: var(--first-color);
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

export const SkillsBox = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1rem;

`;

export const SkillsGroup = styled.div`
  display: grid;
  row-gap: 1rem;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  min-width: 260px;
  min-height: 260px;
`;

export const SkillsData = styled.div`
  display: flex;
  column-gap: 0.5rem;
  row-gap: 1rem;
  align-items: center;

  svg {
    height: 1.5rem;
    width: 1.5rem;
  }

  p {
    line-height: 18px;
    font-size: var(--small-font-size);
    font-weight: var(--font-medium);
    max-width: 90px;
  }
`;
