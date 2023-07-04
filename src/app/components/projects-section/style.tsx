import Image from "next/image";
import styled from "styled-components";

export const ProjectSection = styled.section`
  margin-top: 340px;

  h2 {
    text-align: center;
  }
`;

export const Container = styled.div`
  padding-top: 1rem;
  overflow: initial;

  .description {
    margin-bottom: var(--mb-0-75);
  }

  .containerButton {
    display: flex;
    gap: 5px;
    justify-content: space-between;
  }
`;

export const Filters = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.75rem;
  margin-bottom: 2rem;
`;

export const Item = styled.span`
  cursor: pointer;
  color: var(--title-color);
  padding: 0.25rem 0.75rem;
  font-weight: var(--font-medium);
  border-radius: 0.5rem;
`;

export const Card = styled.div`
  background-color: var(--container-color);
  padding: 1rem;
  border-radius: 1rem;

  img {
    border-radius: 1rem;
    margin-bottom: 0.75rem;
  }
`;

export const Img = () => {
  return (
    <Image src={"/image.png"} alt="project-img" width={265} height={265} />
  );
};

export const Title = styled.h3`
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb-0-5);
`;

export const Button = styled.a`
  width: max-content;
  padding:  0.5rem 2.5rem;
  border-radius: .5rem;
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
