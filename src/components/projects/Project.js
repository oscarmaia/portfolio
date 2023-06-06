import styled from "styled-components";
import Tech from "./Tech";

export default function Project({ title, description, image, techs }) {
  return (
    <Container>
      <h1>{title}</h1>
      <ImageContainer>{image}</ImageContainer>
      <DescriptionContainer>{description}</DescriptionContainer>
      <TechsContainer>
        <Tech name={"JavaScript"} />
        <Tech name={"Node.js"} />
        <Tech name={"React.js"} />
        <Tech name={"postgreSQL"} />
        <Tech name={"TypeScript"} />
        <Tech name={"Prisma"} />
        <Tech name={"MongoDB"} />
        <Tech name={"Jest e SuperTest"} />
      </TechsContainer>
    </Container>
  );
}

const Container = styled.div`
  max-width: 20rem;
  padding: 0.5rem;
  background-color: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    height: 1em;
  }
  border-radius: 0.5rem;
  flex-wrap: wrap;
`;
const DescriptionContainer = styled.div`
  background-color: grey;
  height: 5em;
  padding: 0.1rem;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 13.5rem;
  background-color: red;
`;

const TechsContainer = styled.div`
  width: 100%;
  height: 3.5rem;
  background-color: purple;
  display: flex;
  align-items: flex-start;
  overflow-x: auto;
  overflow-y: hidden;
`;
