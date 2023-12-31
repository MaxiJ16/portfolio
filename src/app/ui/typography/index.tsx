import styled from "styled-components";

export const Title = styled.h1`
  font-size: var(--h1-font-size);
  /* color: var(--title-color); */
  font-weight: var(--font-semi-bold);

  @media (min-width: 768px) {
    font-size: var(--big-font-size);
  }
`;

export const SubTitle = styled(Title).attrs({ as: "h2" })`
  font-size: var(--h2-font-size);
  font-weight: var(--font-semi-bold);
`;

export const LargeText = styled(Title).attrs({ as: "h3" })`
  font-size: 1.5rem;
  font-weight: var(--font-medium);
  /* color: #575757; */
`;

export const BodyText = styled.p`
  font-size: var(--normal-font-size);
  text-wrap: balance;

  @supports not (text-wrap: balance) {
    p {
      white-space: none;
    }
  }
`;

export const TinyText = styled.span`
  font-size: var(--small-font-size);
`;

export const SectionTitle = styled(SubTitle)`
  font-size: var(--h1-font-size);
  color: var(--first-color);
  text-align: center;
  margin-bottom: var(--mb-3);
`;

export const SectionSubtitle = styled(LargeText)`
  display: block;
  text-align: center;
  font-size: var(--small-font-size);
  font-weight: 400;
`;
