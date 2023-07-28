import styled from "styled-components";

export const SkillsContent = styled.div`
  width: 260px;
  margin: 0 auto;
  background-color: var(--container-color);
  padding: 1rem .9rem;
  border-radius: 1.25rem;
  box-shadow: rgba(57, 57, 57, 0.1) 0px 30px 60px;
  border: 2px solid var(--first-color);

  @media (min-width: 375px) {
    width: auto;
    padding: 1.5rem 2.6rem;
  }

  @media (min-width: 576px) {
    padding: 2rem 4rem;
  }

  h3 {
    font-size: var(--normal-font-size);
    color: var(--first-color);
    text-align: center;
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

  &:hover {
    box-shadow: rgba(105, 17, 17, 0.1) 0px 30px 60px;
    font-weight: bold;
    border-radius: 10px;
    transform: translateY(0.5rem);
    transition: 0.2s;

    p {
      font-weight: bold;
      font-size: 16px;
    }
  }
`;
