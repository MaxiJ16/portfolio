import styled from "styled-components";

export const HomeSection = styled.section``;

export const HomeContainer = styled.div`
  gap: 1rem;
`;

export const HomeContent = styled.div`
  grid-template-columns: 0.5fr 3fr;
  padding-top: 1rem;
  align-items: center;

  @media (min-width: 769px) {
    padding-top: 3.5rem;
    grid-template-columns: max-content 1fr 1fr;
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

  @media(min-width: 769px){
    margin-right: 8rem;
  }
`;

// // Home__blob
// width: 180px;
// fill: var(--first-color);

// // Home__blobl-img -> agrego x=12 y=18 en la etiqueta image
// width: 170px;

export const HomeImg = styled.div`
  .home__blob {
    width: 200px;
    fill: var(--first-color);
  }

  @media (min-width: 769px) {
    order: 1;
    justify-self: center;
  }

  .home__blob-img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 6px solid var(--first-color);
    object-fit: cover;
    /* box-shadow: 2px 2px 2px 1px var(--first-color); */
  }

  @media (min-width: 769px) {
    .home__blob-img {
      width: 300px;
      height: 300px;
    }
  }
`;

export const HomeData = styled.div`
  grid-column: 1/3;

  h1 {
    font-size: var(--big-font-size);
  }

  h3 {
    font-size: var(--h3-font-size);
    color: var(--text-color);
    font-weight: var(--font-medium);
    margin-bottom: var(--mb-0-75);
  }

  .home__description {
    margin-bottom: var(--mb-2);
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

  @media (min-width: 769px) {
    grid-column: initial;
  }
`;

export const HomeScroll = styled.div`
  display: none;

  width: 300px;

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
    font-size: var(--small-font-size);
    color: var(--title-color);
    font-weight: var(--font-medium);
    margin-right: var(--mb-0-25);
  }
`;

// 36:14
