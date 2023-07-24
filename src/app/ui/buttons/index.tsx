import styled from "styled-components";
import { Burguer } from "./styled";

export const BaseButton = styled.button``;

type BurguerProps = {
  open: boolean;
  handleClick: () => void;
};

export const BurgerButton = (props: BurguerProps) => {
  return (
    <Burguer onClick={props.handleClick}>
      <div className={`icon nav-icon-5 ${props.open ? `open` : ``}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Burguer>
  );
};
