import styled from "styled-components";
export const SkillSection = styled.section``;

export const SkillsContainer = styled.div`
  row-gap: 2rem;
  padding-top: 1rem;
`;

export const SkillsContent = styled.div`
  background-color: var(--container-color);
  padding: 1.5rem;
  border-radius: 1.25rem;

  .skills__title {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
    color: var(--first-color);
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .skills__box {
    display: flex;
    justify-content: center;
    column-gap: 2.5rem;
  }

  .skills__group {
    display: grid;
    row-gap: 1rem;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }

  .skills__data {
    display: flex;
    column-gap: 0.5rem;
    row-gap: 1rem;
    align-items: center;

    svg {
      height: 1.5rem;
      width: 1.5rem;
    }

    .skills__name {
      font-size: var(--normal-font-size);
      font-weight: var(--font-medium);
      line-height: 18px;
    }
  }
`;
