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
  padding: 0.3rem;
  margin: 0.2rem;
  border-radius: 0.2rem;
  background-color: ${(props) =>
    props.isDarkTheme ? DarkTheme.detailBg : LightTheme.detailBg};
  span {
    font-size: 0.8em;
  }
`;
