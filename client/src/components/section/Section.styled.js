import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 24%);
  justify-content: space-between;

  @media (max-width: 780px) {
    grid-template-columns: repeat(2, 48%);
  }
  a,
  a:hover {
    text-decoration: none;
    color: #000;
  }
  @media (max-width: 376px) {
    grid-template-columns: repeat(1, 96%);
  }
`;
export const Container = styled.div``;
export const Title = styled.h4``;