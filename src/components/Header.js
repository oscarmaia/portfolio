import styled from "styled-components";
import { useTheme, useThemeUpdate } from "../context/ThemeContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { DarkTheme, LightTheme } from "../resources/Theme";
import { Link as LinkScroll } from "react-scroll";

export default function Header() {
  const isDarkTheme = useTheme();
  const toggle = useThemeUpdate();

  return (
    <HeaderContainer isDarkTheme={isDarkTheme}>
      <CenterContainer>
        <LeftContainer>
        <LinkScroll
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            OSCAR MAIA
          </LinkScroll>
        </LeftContainer>
        <RightContainer>
          <LinkScroll
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            Projetos
          </LinkScroll>

          <LinkScroll
            activeClass="active"
            to="contacts"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contatos
          </LinkScroll>

          <DarkModeSwitch
            checked={!isDarkTheme}
            onChange={toggle}
            size={35}
            sunColor={isDarkTheme === true ? DarkTheme.fg : LightTheme.fg}
            moonColor={isDarkTheme === true ? DarkTheme.fg : LightTheme.fg}
          />
        </RightContainer>
      </CenterContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  a {
    color: inherit;
    text-decoration: inherit;
    :hover {
      filter: brightness(0);
    }
  }
  background-color: ${(props) =>
    props.isDarkTheme === true ? DarkTheme.detailBg : LightTheme.detailBg};
  color: ${(props) =>
    props.isDarkTheme === true ? DarkTheme.fg : LightTheme.fg};
  height: 50px;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0rem 1rem 0rem;
  z-index: 999;

  @media screen and (max-width: 767px) {
    /* Styles for small mobile devices (up to 767px) */
    /* Add your small mobile-specific styles here */
    width: 100%;
    background-color: inherit;
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    /* Styles for medium-sized mobile devices (between 768px and 991px) */
    /* Add your medium mobile-specific styles here */
  }

  @media screen and (min-width: 992px) {
    /* Styles for larger mobile devices (992px and above) */
    /* Add your large mobile-specific styles here */
  }
`;

const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

const LeftContainer = styled.div``;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  button {
    margin-left: 0.5rem;
  }
  a {
    padding-left: 1rem;
  }
  svg {
    margin-left: 1rem;
    :hover {
      height: 34px;
    }
  }
`;
