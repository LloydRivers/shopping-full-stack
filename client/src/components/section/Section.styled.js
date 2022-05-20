import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 24%);
  justify-content: space-between;
  gap: 1em 0;

  @media (max-width: 780px) {
    grid-template-columns: repeat(2, 48%);
  }
  a,
  a:hover {
    text-decoration: none;
    color: #000;
  }
  @media (max-width: 578px) {
    grid-template-columns: repeat(2, 43%);
  }
  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;
export const Container = styled.div`
  margin: 2.5em 0;
  @media (max-width: 376px) {
    margin: 1.5em;
    h4 {
      text-align: center;
    }
  }
`;
export const Title = styled.h4``;
