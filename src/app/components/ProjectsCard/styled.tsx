import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: calc(100% - 1rem);
  padding: 1rem;
  box-shadow: rgba(57, 57, 57, 0.1) 0px 30px 60px;
  background-color: var(--container-color);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0 auto;

  @media (min-width: 375px) {
    width: 350px;
    padding: 1rem;
  }

  @media (min-width: 769px) {
    height: 500px;
    gap: 0px;
  }

  @media (min-width: 1024px) {
    gap: 3rem;
  }


`;

export const CardContent = styled.div`
  max-width: 100%;
  p {
    margin-bottom: var(--mb-0-75);
    font-size: var(--smaller-font-size);
  }
`;
export const Title = styled.h3`
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb-0-5);
`;

export const ButtonLink = styled.a`
  max-width: 100%;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  background-color: var(--first-color);
  color: var(--body-color);
  font-size: var(--small-font-size);
  display: flex;
  align-items: center;
  column-gap: 0.25rem;

  &:hover {
    background-color: var(--first-color-alt);
  }

  svg {
    width: 1rem;
    height: 1rem;
    transition: 0.4s;
  }
`;

export const ContainerImg = styled.div`
  height: 100%;
  width: 100%;

  img {
    width: 300px;
    height: 220px;
    object-fit: cover;
    border-radius: 1rem;
    margin: 0 auto 1rem;
    box-shadow: rgba(57, 57, 57, 0.1) 0px 30px 60px;
  }
`;

export const ContainerButtons = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-around;
  gap: 5px;
`;
