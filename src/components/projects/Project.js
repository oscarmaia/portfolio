import styled from "styled-components";
import Tech from "./Tech";
import { DarkTheme, LightTheme } from "../../resources/Theme";
import { useTheme } from "../../context/ThemeContext";

export default function Project({ title, description, image, techs }) {
  const isDarkTheme = useTheme();
  return (
    <Container isDarkTheme={isDarkTheme}>
      <h1>{title}</h1>
      <ImageContainer>
        <img src={image} alt={`${title} site`}></img>
      </ImageContainer>
      <DescriptionContainer isDarkTheme={isDarkTheme}>
        <span>{description}</span>
      </DescriptionContainer>
      <TechsContainer isDarkTheme={isDarkTheme}>
        {techs.map((tech, index) => (
          <Tech name={tech} key={index} />
        ))}
      </TechsContainer>
    </Container>
  );
}

const Container = styled.div`
  max-width: 18rem;
  padding: 0.5rem;
  background-color: ${(props) =>
    props.isDarkTheme === true ? DarkTheme.detailBg : LightTheme.detailBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-weight: 700;
    padding: 0.2rem;
    height: 1.3em;
  }
  border-radius: 0.5rem;
  flex-wrap: wrap;
  margin: 2px;
`;

const ImageContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 13.5rem;
  img {
    border-radius: 0.5rem;
    width: 100%;
    height: 100%;
  }
`;

const DescriptionContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) =>
    props.isDarkTheme === true ? DarkTheme.bg : LightTheme.bg};
  height: 5em;
  padding: 0.4rem;
  overflow: auto;
  word-wrap: normal;
  span {
    font-size: 0.9em;
    font-weight: 500;
  }
`;

const TechsContainer = styled.div`
  box-sizing: border-box;
  border-radius: 0.5rem;
  background-color: ${(props) =>
    props.isDarkTheme === true ? DarkTheme.bg : LightTheme.bg};
  width: 100%;
  height: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  overflow: auto;
  justify-items: center;
  align-items: center;
`;
