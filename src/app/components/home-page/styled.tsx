import styled from "styled-components";

export const HomeSection = styled.section``;

export const HomeContainer = styled.div`
  gap: 3rem;

  @media (min-width: 769px) {
    row-gap: 5rem;
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
    padding: 3.5rem 6.5rem 0;
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
    transform: translateX(-6rem);
  }
`;

export const HomeImg = styled.div`
  width: 270px;
  height: 270px;

  @media (min-width: 568px) {
    order: 1;
    justify-self: center;
  }

  .home__blob-img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 6px solid var(--first-color);
    object-fit: cover;
  }

  @media (min-width: 769px) {
  }

  @media (min-width: 1024px) {
    width: 320px;
    height: 320px;

    .home__blob-img {
      width: 300px;
      height: 300px;
      object-fit: cover;
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

  .home__description {
    margin-bottom: var(--mb-2);
    font-size: var(--normal-font-size);
    color: var(--text-color-light);
  }

  @media (min-width: 1024px) {
    .home__description {
      font-size: 18px;
      padding: 0 1rem 0 0;
    }
  }

  .button {
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

  .button:hover {
    background-color: var(--first-color-alt);
  }

  @media (min-width: 568px) {
    grid-column: initial;
  }

  @media (min-width: 1024px) {
    grid-column: initial;
    max-width: 500px;
    margin: 0 auto;
  }
`;

export const HomeScroll = styled.div`
  display: none;

  a {
    color: var(--first-color);
    transition: 0.3s;
    display: flex;
    align-items: center;
  }

  a:hover {
    transform: translateY(0.25rem);
  }

  .home__scroll-name {
    /* font-size: var(--small-font-size); */
    color: var(--title-color);
    font-weight: var(--font-medium);
    margin-right: var(--mb-0-25);
  }

  @media (min-width: 1024px) {
    display: block;
    padding: 0 9.2rem;
  }

  @media (min-width: 1600px) {
    display: block;
    padding: 0 14rem;
  }
`;
