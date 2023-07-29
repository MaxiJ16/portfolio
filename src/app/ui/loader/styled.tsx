import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.div`
  margin: 0 auto;
  width: 20px;
  height: 20px;
  border: 3px solid white;
  border-color: white transparent;
  border-radius: 50%;
  animation: girar 1.3s linear infinite;

  @keyframes girar {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
