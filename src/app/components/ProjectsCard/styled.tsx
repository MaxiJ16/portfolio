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

  &:hover {
    box-shadow: var(--first-color) 0px 5px 20px;
  }

  @media (min-width: 375px) {
    width: 350px;
    padding: 1rem;
    box-sizing: border-box;
  }

  @media (min-width: 769px) {
    width: 420px;
    height: auto;
    gap: 0px;
  }

  @media (min-width: 1024px) {
    gap: 1rem;
  }

  @media (min-width: 1200px) {
    width: 480px;
  }
`;

export const CardContent = styled.div`
  max-width: 100%;
  height: auto;

  p {
    margin-bottom: var(--mb-0-75);
    font-size: var(--smaller-font-size);
  }

  @media (min-width: 1024px) {
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
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
  width: 100%;

  img {
    height: auto;
    width: 100%;
    object-fit: cover;
    border-radius: 1rem;
    margin: 0 auto 1rem;
    box-shadow: rgba(57, 57, 57, 0.1) 0px 30px 60px;
  }

  @media (min-width: 769px) {
    img {
      height: 300px;
    }
  }
`;

export const ContainerButtons = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-around;
  gap: 5px;

  @media(min-width: 769px){
    height: 70px;
  }

  @media(min-width: 1024px){
    gap: 30px;
  }
`;
