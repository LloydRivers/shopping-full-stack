import styled from "styled-components";

export const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 1em;
  background-color: #fff;
  border-radius: 10px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  text-align: left;
`;
export const ImageContainer = styled.div`
  position: relative;
  padding-bottom: 250px;
  overflow: hidden;
`;
export const CardImage = styled.img`
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 100%;
`;
export const CardBody = styled.div`
  padding: 1em;
`;
export const CardTitle = styled.h3`
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: bold;
`;

export const Span = styled.span`
  background: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : null};
  color: #d93f0b;
  padding: ${({ padding }) => (padding ? padding : null)};
  display: ${({ isBlock }) => (isBlock ? "block" : null)};
  margin: 10px 0;
`;
export const CartButton = styled.button`
  border-radius: 4px;
  border: 1px solid rgb(200, 200, 200);
  padding: 5px 18px;
  color: #d93f0b;
  background-color: transparent;
  margin-bottom: 5px;
  transition: 0.8;

  &:hover {
    opacity: 0.9;
    background-color: #d93f0b;
    color: #fff;
    transition: 0.5s;
    border: 1px solid #d93f0b;
  }
`;
