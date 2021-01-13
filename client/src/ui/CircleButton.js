import { useState } from 'react';
import styled from 'styled-components';

export default (props) => {
  const [hover, setHover] = useState(false);

  return (
    <Button
      {...props}
      hover={hover}
      onFocus={() => setHover(true)}
      onMouseEnter={() => setHover(true)}
      onBlur={() => setHover(false)}
      onMouseLeave={() => setHover(false)}
    >
      <ButtonBorder
        hover={hover}
        size={props.size}
        color={props.color}
        hoverColor={props.hoverColor}
      />
      {props.children}
    </Button>
  );
};

const ButtonBorder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  
  ${({ hover }) => !hover} {
    left: -20%;
    top: -20%;
    width: 140%;
    height: 140%;
    border: calc(${({ size }) => size}/12) solid ${({ hoverColor }) => hoverColor};
  }
  
  transition: background 0.2s,
    border 0.2s,
    left 0.2s,
    top 0.2s,
    width 0.2s,
    height 0.2s;
`;

const Button = styled.button`
  position: relative;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border: 0;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  font-size: calc(${({ size }) => size}/2);
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ hover }) => !hover} {
    background-color: ${({ hoverColor }) => hoverColor};
  }

  transition: background 0.2s,
    border 0.2s,
    left 0.2s,
    top 0.2s
`;
