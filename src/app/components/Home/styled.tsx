import styled from "styled-components";

export const HomeSection = styled.section`
  margin-top: 60px;
`;

export const HomeContainer = styled.div`
  gap: 3rem;

  @media (min-width: 769px) {
    row-gap: 5rem;
  }

  @media (min-width: 1200px) {
    row-gap: 3rem;
  }
`;

export const HomeContent = styled.div`
  grid-template-columns: 0.25fr 3fr;
  align-items: center;

  @media (min-width: 568px) {
    padding-top: 1.5rem;
    grid-template-columns: max-content 1fr 1fr;
  }

  @media (min-width: 769px) {
    padding-top: 3.5rem;
    column-gap: 2rem;
  }

  @media (min-width: 1024px) {
    padding: 2.5rem 4rem 0;
  }

  @media (min-width: 1200px) {
    padding: 2rem 12rem 4rem;
  }

  @media (min-width: 1500px) {
    padding: 6rem 16rem;
  }
`;

export const HomeSocial = styled.div`
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1rem;

  svg {
    stroke: var(--first-color);
  }

  svg:hover {
    stroke: var(--first-color-alt);
  }

  @media (min-width: 1024px) {
    transform: translateX(-4rem);
  }
`;

export const HomeImg = styled.div`
  @media (min-width: 568px) {
    order: 1;
    justify-self: center;
  }

  @media (min-width: 769px) {
    width: 270px;
    height: 270px;
  }

  @media (min-width: 1024px) {
    width: 320px;
    height: 320px;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 6px solid var(--first-color);
    object-fit: cover;
  }

  @media (min-width: 769px) {
    img {
      width: 270px;
      height: 270px;
    }
  }
`;

export const HomeData = styled.div`
  grid-column: 1/3;

  h3 {
    font-size: var(--h3-font-size);
    color: var(--text-color);
    font-weight: var(--font-medium);
    margin-bottom: var(--mb-0-75);
  }

  p {
    margin-bottom: var(--mb-2);
    color: var(--text-color-light);
  }

  a {
    display: flex;
    align-items: center;
    width: fit-content;
    background-color: var(--first-color);
    color: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
    font-weight: var(--font-medium);

    svg {
      width: 20px;
      height: 20px;
      margin-left: var(--mb-0-5);
      transition: 0.3s;
    }
  }

  a:hover {
    background-color: var(--first-color-alt);
  }

  @media (min-width: 568px) {
    grid-column: initial;
  }

  @media (min-width: 769px) {
    grid-column: initial;
  }
`;

export const ScrollButton = styled.button`
  display: none;
  border: none;
  background-color: transparent;

  a {
    color: var(--first-color);
    transition: 0.3s;
    display: flex;
    align-items: center;
  }

  a:hover {
    transform: translateY(0.25rem);
  }

  p {
    color: var(--title-color);
    font-weight: var(--font-medium);
    margin-right: var(--mb-0-25);
  }

  @media (min-width: 769px) {
    display: block;
    margin-left: 3rem;
  }

  @media (min-width: 1024px) {
    margin-left: 7rem;
  }

  @media (min-width: 1200px) {
    margin-left: 15rem;
  }

  @media (min-width: 1500px) {
    margin-left: 19rem;
  }
`;
