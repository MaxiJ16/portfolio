import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: var(--container-color);
  padding: 1rem;
  border-radius: 1rem;

  img {
    border-radius: 1rem;
    margin-bottom: 0.75rem;
  }
`;
export const CardContent = styled.div`
  p {
    margin-bottom: var(--mb-0-75);
  }
`;
export const Title = styled.h3`
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb-0-5);
`;

export const ButtonLink = styled.a`
  width: max-content;
  padding: 0.5rem 2.5rem;
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

export const ContainerButtons = styled.div`
  display: flex;
  gap: 5px;
  justify-content: space-between;
`;
