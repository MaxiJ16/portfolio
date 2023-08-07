import styled from "styled-components";

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
    margin-bottom: 80px;
  }

  @media (min-width: 768px) {
    width: 270px;
    height: 270px;
    
  }

  @media (min-width: 1024px) {
    width: 280px;
    height: 280px;
    margin-bottom: 0px;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 4px solid var(--first-color);
    box-shadow: 0 0 5px 0 var(--first-color);
    object-fit: cover;
  }

  @media (min-width: 768px) {
    img {
      width: 250px;
      height: 250px;
    }
  }

  @media (min-width: 1024px) {
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const HomeData = styled.div`
  grid-column: 1/3;

  h3 {
    font-size: var(--h3-font-size);
    color: var(--first-color);
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

  @media (min-width: 768px) {
    grid-column: initial;
  }
`;
