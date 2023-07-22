import styled from "styled-components";
import { Burguer } from "./styled";
import { MoonIcon } from "../icons";

export const BaseButton = styled.button``;

type BurguerProps = {
  open: boolean;
};

export const BurguerButton = (props: BurguerProps) => {
  return (
    <Burguer>
      <div className={`icon nav-icon-5 ${props.open ? `open` : ``}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Burguer>
  );
};

export const ToggleButton = ({ handleClick }: any) => {
  return <MoonIcon onClick={handleClick}></MoonIcon>;
};
