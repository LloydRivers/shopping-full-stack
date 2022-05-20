import styled from "styled-components";

export const Button = styled.button`
  font-size: 20px;
  background-color: transparent;
  color: ${({ color }) => (color ? color : null)};
  padding: 8px 16px;
  border-radius: 10px;
  border: 2px solid rgb(200, 200, 200);
  width: 100%;
  text-transform: uppercase;
`;

export const ProductTile = styled.h1`
  font-size: 29px;
`;
