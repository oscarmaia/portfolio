import styled from "styled-components";
import Tech from "./Tech";
import { DarkTheme, LightTheme } from "../../resources/Theme";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";

export default function Project({
  title,
  description,
  image,
  techs,
  github,
  deploy,
}) {
  const [isActive, setIsActive] = useState(false);

  function handleMouseEnter() {
    setIsActive(true);
  }
  function handleMouseLeave() {
    setIsActive(false);
  }

  const isDarkTheme = useTheme();
  return (
    <Container
      isDarkTheme={isDarkTheme}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1>{title}</h1>
      <ImageContainer>
        <img src={image} alt={`${title} site`}></img>
        <ButtonsContainer isActive={isActive} isDarkTheme={isDarkTheme}>
          <a href={github} target="_blank" rel="noreferrer">
            <button>
              <span>Github</span>
            </button>
          </a>

          <a href={deploy} target="_blank" rel="noreferrer">
            <button>
              <span>Deploy</span>
            </button>
          </a>
        </ButtonsContainer>
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
  background: linear-gradient(
    50deg,
    rgba(255, 255, 255, 0.4) 12%,
    rgba(255, 255, 255, 0.1) 77%
  );
  background-blend-mode: ;
  box-shadow: 0px 4px 24px 1px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

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

  :-webkit-scrollbar {
    width: 9px;
  }

  :-webkit-scrollbar-track {
    background: red;
  }

  :-webkit-scrollbar-thumb {
    background-color: red;
    border-radius: 9px;
    border: 1px none #ffffff;
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

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    cursor: pointer;
    position: relative;
    :hover {
      box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.6);
    }
    bottom: 25px;
    transition: opacity 0.5s ease;
    opacity: ${(props) => (props.isActive ? 1 : 0)};

    padding: 0.3rem;
    margin: 0.2rem;
    border-radius: 0.2rem;
    background-color: ${(props) =>
      props.isDarkTheme ? DarkTheme.detailBg : LightTheme.detailBg};
    span {
      font-size: 0.8em;
    }
  }
`;
