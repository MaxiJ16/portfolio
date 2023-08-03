import styled, { keyframes } from "styled-components";

export const FormContain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  .errorText {
    width: 100%;
    top: 63%;
    left: 0;
    position: absolute;
  }

  ::placeholder {
    color: #a7a7a7;
    font-style: italic;
  }
`;

export const ErrorInputText = styled.span`
  margin-top: 63px;
  color: #ed0c0ceb;
  font-size: 14px;
  padding: 5px 20px;
  border-radius: 8px;
  font-weight: 600;
  background-color: #9c9b9b2d;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ErrorText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: #9c9b9b2d;
  color: #f80000e4;
  padding: 10px 5px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
  animation: ${fadeIn} 0.3s ease-in-out; // Agrega la animación de transición
`;

export const SuccessText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: #7e827e1f;
  color: #27be27;
  padding: 10px 5px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
  animation: ${fadeIn} 0.3s ease-in-out; // Agrega la animación de transición
`;

export const FormDiv = styled.div`
  margin-bottom: 2rem;
  height: 4rem;
  position: relative;
  display: flex;
  flex-direction: column;

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid var(--text-color-light);
    background: none;
    color: var(--text-color);
    outline: none;
    padding: 1.5rem;
    border-radius: 0.75rem;
    z-index: 1;
    caret-color: var(--first-color);

    &:focus {
      font-weight: bold;
      transition: border-color 0.4s;
      border: 3px solid var(--first-color);
    }
  }
`;

export const FormTextareaContainer = styled.div`
  margin-bottom: 2rem;
  height: 11rem;
  position: relative;

  textarea {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    height: 11rem;
    resize: none;
    border: 2px solid var(--text-color-light);
    background: none;
    color: var(--text-color);
    outline: none;
    padding: 1.5rem;
    border-radius: 0.75rem;
    z-index: 1;

    &:focus {
      color: var(--first-color);
      font-weight: bold;
      transition: border-color 0.4s;
      border: 3px solid var(--first-color);
    }
  }
`;

export const Label = styled.label`
  position: absolute;
  top: -0.75rem;
  left: 1.25rem;
  font-size: var(--smaller-font-size);
  padding: 0.25rem;
  color: var(--first-color);
  background-color: var(--body-color);
  z-index: 10;
`;

export const Button = styled.button`
  width: 50%;
  border: none;
  display: flex;
  justify-content: center;
  background-color: var(--first-color);
  color: #fff;
  padding: 0.8rem;
  border-radius: 0.5rem;
  font-size: 1rem;

  svg {
    width: 20px;
    height: 20px;
    margin-left: var(--mb-0-5);
    transition: 0.3s;
  }

  &:hover {
    background-color: var(--first-color-alt);
  }
`;
