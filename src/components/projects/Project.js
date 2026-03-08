import styled from "styled-components";
import Tech from "./Tech";
import { DarkTheme, LightTheme } from "../../resources/Theme";
import { useTheme } from "../../context/ThemeContext";
import { useState, useRef, useEffect } from "react";

export default function Project({
  title,
  description,
  image,
  techs,
  github,
  deploy,
}) {
  const [isActive, setIsActive] = useState(false);
  const [isDescScrollable, setIsDescScrollable] = useState(false);
  const [isTechScrollable, setIsTechScrollable] = useState(false);

  const descRef = useRef(null);
  const techRef = useRef(null);

  useEffect(() => {
    const checkScrollable = () => {
      if (descRef.current) {
        setIsDescScrollable(descRef.current.scrollHeight > descRef.current.clientHeight);
      }
      if (techRef.current) {
        setIsTechScrollable(techRef.current.scrollHeight > techRef.current.clientHeight);
      }
    };

    checkScrollable();

    const observer = new ResizeObserver(checkScrollable);
    if (descRef.current) observer.observe(descRef.current);
    if (techRef.current) observer.observe(techRef.current);

    return () => observer.disconnect();
  }, [description, techs]);

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
      </ImageContainer>
      <DescriptionContainer ref={descRef} isScrollable={isDescScrollable} isDarkTheme={isDarkTheme}>
        <span>{description}</span>
      </DescriptionContainer>
      <TechsContainer ref={techRef} isScrollable={isTechScrollable} isDarkTheme={isDarkTheme}>
        {techs.map((tech, index) => (
          <Tech name={tech} key={index} />
        ))}
      </TechsContainer>
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
    </Container>
  );
}

const Container = styled.div`
  background: ${(props) =>
    props.isDarkTheme ? 'rgba(30, 41, 59, 0.4)' : 'rgba(255, 255, 255, 0.6)'};
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid ${(props) =>
    props.isDarkTheme ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'};
  width: 100%;
  max-width: 22rem;
  height: 100%; /* Stretches to fill the grid cell height */
  padding: 1.2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.2);
    border-color: ${(props) =>
    props.isDarkTheme ? 'rgba(56, 189, 248, 0.3)' : 'rgba(79, 70, 229, 0.3)'};
  }

  h1 {
    font-family: 'Outfit', sans-serif;
    font-weight: 700;
    font-size: 1.3rem;
    padding: 0 0 0.8rem 0;
    margin: 0;
    text-align: center;
    color: ${(props) =>
    props.isDarkTheme ? DarkTheme.fg : LightTheme.fg};
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 12rem;
  overflow: hidden;
  border-radius: 0.8rem;
  margin-bottom: 1rem;
  flex-shrink: 0; /* Prevents image from shrinking */
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${Container}:hover & img {
    transform: scale(1.05);
  }
`;

const DescriptionContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  background-color: ${(props) =>
    props.isDarkTheme === true ? 'rgba(15, 23, 42, 0.5)' : 'rgba(241, 245, 249, 0.5)'};
  height: 6rem;
  padding: 0.8rem;
  overflow-y: auto;
  overscroll-behavior: ${(props) => (props.isScrollable ? 'contain' : 'auto')};
  box-sizing: border-box;
  flex-grow: 1; /* This expands to fill available space, pushing elements below it down */
  
  span {
    font-size: 0.9em;
    font-weight: 400;
    line-height: 1.4;
    color: ${(props) =>
    props.isDarkTheme ? 'rgba(248, 250, 252, 0.8)' : 'rgba(15, 23, 42, 0.8)'};
  }

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) =>
    props.isDarkTheme ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'};
    border-radius: 4px;
  }
`;

const TechsContainer = styled.div`
  border-radius: 0.5rem;
  background-color: transparent;
  width: 100%;
  height: 4.5rem; /* Fixed height for all cards so they align consistently */
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 0.3rem;
  justify-content: center;
  margin-bottom: 1.5rem;
  flex-shrink: 0; /* Prevents tags from shrinking */
  overflow-y: auto;
  overscroll-behavior: ${(props) => (props.isScrollable ? 'contain' : 'auto')};
  
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) =>
    props.isDarkTheme ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'};
    border-radius: 3px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  margin-top: auto;
  
  button {
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0.5rem 1.2rem;
    border-radius: 2rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    border: none;
    background: linear-gradient(135deg, ${(props) =>
    props.isDarkTheme ? DarkTheme.detail2 : LightTheme.detail2}, ${(props) =>
      props.isDarkTheme ? DarkTheme.accent : LightTheme.accent});
    color: white;
    opacity: ${(props) => (props.isActive ? 1 : 0)};
    transform: translateY(${(props) => (props.isActive ? '0' : '10px')});
    
    &:hover {
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
      transform: translateY(-2px);
    }
    
    span {
      font-size: 0.9em;
    }
  }

  @media (max-width: 768px) {
    button {
      opacity: 1;
      transform: none;
    }
  }
`;
