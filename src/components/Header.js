import styled from "styled-components";
import { useTheme, useThemeUpdate } from "../context/ThemeContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";
export default function Header() {
  const isDarkTheme = useTheme();
  const toggle = useThemeUpdate();
  return (
    <HeaderContainer isDarkTheme={isDarkTheme}>
      <CenterContainer>
        <LeftContainer>OSCAR MAIA</LeftContainer>
        <RightContainer>
          <span>Home</span>
          <span>Projetos</span>
          <span>Contato</span>
          <DarkModeSwitch
            checked={isDarkTheme}
            onChange={toggle}
            size={35}
            sunColor="black"
            moonColor="black"
          />
        </RightContainer>
      </CenterContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  background-color: ${(props) =>
    props.isDarkTheme === false ? "grey" : "white"};
  color: ${(props) => (props.isDarkTheme === false ? "black" : "black")};
  height: 3rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 1rem;
`;
const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const LeftContainer = styled.div``;
const RightContainer = styled.div`
display: flex;
align-items: center;
  span {
    padding-left: 0.5rem;
  }
  button {
    margin-left: 0.5rem;
  }
  svg{
    margin-left: 1rem;
  }
`;
