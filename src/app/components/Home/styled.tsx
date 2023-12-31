import styled from "styled-components";

export const HomeSection = styled.section`
  padding: 50px 0 100px;

  @media (min-width: 1200px) {
    section {
      padding: 80px 0 120px;
    }
  }
`;

export const HomeContainer = styled.div`
  gap: 3rem;

  @media (min-width: 768px) {
    row-gap: 5rem;
  }

  @media (min-width: 1024px) {
    row-gap: 3rem;
  }

  .scrollButton {
    color: var(--first-color);
    transition: 0.3s;
    display: none;

    &:hover {
      transform: translateY(0.25rem);
    }

    p {
      font-weight: 500;
      margin-right: var(--mb-0-25);
      margin-left: var(--mb-0-25);
    }

    svg {
      height: 28px;
      width: 28px;
    }

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
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

    @media (min-width: 2000px) {
      margin-left: 29rem;
    }
  }
`;

export const HomeContent = styled.div`
  grid-template-columns: 0.25fr 3fr;
  align-items: center;

  @media (min-width: 568px) {
    padding-top: 1.5rem;
    grid-template-columns: max-content 1fr 1fr;
  }

  @media (min-width: 768px) {
    padding-top: 3.5rem;
    column-gap: 2rem;
  }

  @media (min-width: 1024px) {
    padding: 2.5rem 4rem 0;
    grid-template-columns: max-content 1.2fr 1fr;
  }

  @media (min-width: 1200px) {
    padding-left: 12rem;
    grid-template-columns: max-content 1fr 1fr;
  }

  @media (min-width: 1500px) {
    padding: 6rem 16rem;
  }

  @media (min-width: 2000px) {
    padding: 8rem 26rem;
  }
`;
