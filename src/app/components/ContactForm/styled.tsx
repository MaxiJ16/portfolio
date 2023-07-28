import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FormDiv = styled.div`
  margin-bottom: 2rem;
  height: 4rem;
  position: relative;
`;

export const FormTextareaContainer = styled.div`
  margin-bottom: 2rem;
  height: 11rem;
  position: relative;
`;

export const Input = styled.input`
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
    color: var(--first-color);
    font-weight: bold;
    transition: border-color 0.4s;
    border: 3px solid var(--first-color);
  }
`;

export const Label = styled.label`
  position: absolute;
  top: -0.75rem;
  left: 1.25rem;
  font-size: var(--smaller-font-size);
  padding: 0.25rem;
  background-color: var(--body-color);
  z-index: 10;
`;

export const Textarea = styled.textarea`
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
