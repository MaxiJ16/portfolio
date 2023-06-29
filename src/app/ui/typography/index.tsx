import styled from "styled-components";

export const Title = styled.h1`
  font-size: var(--h1-font-size);
  color: var(--title-color);
  font-weight: var(--font-semi-bold);

  @media (min-width: 769px) {
    font-size: var(--big-font-size);
  }
`;

export const SubTitle = styled(Title).attrs({ as: "h2" })`
  font-size: var(--h2-font-size);
  font-weight: var(--font-semi-bold);
  color: ${(props) => props.color};
`;

export const LargeText = styled(Title).attrs({ as: "h3" })`
  font-size: 28px;
  color: ${(props) => props.color};
`;

export const BodyText = styled.p`
  font-size: var(--normal-font-size);
  color: var(--title-color);
`;
