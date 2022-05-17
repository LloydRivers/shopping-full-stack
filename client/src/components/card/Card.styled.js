import styled from "styled-components";

export const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 1em;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
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
  left: 0;
  width: 70%;
  height: 100%;
`;
export const CardBody = styled.div``;
export const CardTitle = styled.h2`
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Span = styled.span`
  background: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : null};
  color: #d93f0b;
  padding: ${({ padding }) => (padding ? padding : null)};
  display: ${({ isBlock }) => (isBlock ? "block" : null)};
`;
