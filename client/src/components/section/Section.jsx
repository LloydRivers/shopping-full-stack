import React from "react";
import ShoppingCard from "../card/ShoppingCard";
import { Grid, Container, Title } from "./Section.styled";

function Section({ data, title }) {
  console.log(data);
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>
        {data.map((product) => (
          <div key={product._id}>
            <ShoppingCard className="line-clamp" product={product} />
          </div>
        ))}
      </Grid>
    </Container>
  );
}

export default Section;
