import styled from "styled-components";

// h1,h2,h3,h4 color title color font weight font semi bold

export const Title = styled.h1`
  font-size: 48px;
  color: var(--title-color);
  font-weight: var(--font-semi-bold);
`;

export const SubTitle = styled(Title).attrs({ as: "h2" })`
  font-size: 32px;
  font-weight: var(--font-medium);
  color: ${(props) => props.color};
`;

export const LargeText = styled(Title).attrs({ as: "h3" })`
  font-size: 32px;
  color: ${(props) => props.color};
`;

export const MediumText = styled(Title).attrs({ as: "h4" })`
  font-size: 32px;
  color: ${(props) => props.color};
`;

export const BodyText = styled.p`
  font-size: 18px;
`;
