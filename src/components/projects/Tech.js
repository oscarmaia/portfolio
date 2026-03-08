import styled from "styled-components";
import { DarkTheme, LightTheme } from "../../resources/Theme";
import { useTheme } from "../../context/ThemeContext";

export default function Tech({ name }) {
  const isDarkTheme = useTheme();
  return (
    <Container isDarkTheme={isDarkTheme}>
      <span>{name}</span>
    </Container>
  );
}

const Container = styled.div`
  width: fit-content;
  padding: 0.25rem 0.6rem;
  margin: 0.1rem;
  border-radius: 1rem;
  background: ${(props) =>
    props.isDarkTheme
      ? 'linear-gradient(135deg, rgba(30,41,59,0.8), rgba(15,23,42,0.9))'
      : 'linear-gradient(135deg, rgba(241,245,249,0.8), rgba(226,232,240,0.9))'};
  border: 1px solid ${(props) =>
    props.isDarkTheme ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'};
  
  span {
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    font-family: 'Inter', sans-serif;
    color: ${(props) =>
    props.isDarkTheme ? 'rgba(248, 250, 252, 0.9)' : 'rgba(15, 23, 42, 0.9)'};
  }
`;
