import styled from "styled-components";
import { useTheme, useThemeUpdate } from "../context/ThemeContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { DarkTheme, LightTheme } from "../resources/Theme";
import { Link as LinkScroll } from "react-scroll";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default function Header() {
  const isDarkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

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
            onClick={closeMobileMenu}
          >
            OSCAR MAIA
          </LinkScroll>
        </LeftContainer>

        <NavLinks isOpen={isMobileMenuOpen} isDarkTheme={isDarkTheme}>
          <LinkScroll
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            onClick={closeMobileMenu}
          >
            {t("header.projects")}
          </LinkScroll>

          <LinkScroll
            activeClass="active"
            to="contacts"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={closeMobileMenu}
          >
            {t("header.contacts")}
          </LinkScroll>
        </NavLinks>

        <ControlsContainer>
          <LanguageSelect value={i18n.language.split('-')[0] || 'en'} onChange={handleLanguageChange} isDarkTheme={isDarkTheme}>
            <option value="en">🇺🇸 EN</option>
            <option value="pt">🇧🇷 PT</option>
          </LanguageSelect>
          <DarkModeSwitch
            checked={!isDarkTheme}
            onChange={toggleTheme}
            size={28}
            sunColor={isDarkTheme ? DarkTheme.fg : LightTheme.fg}
            moonColor={isDarkTheme ? DarkTheme.fg : LightTheme.fg}
          />
          <MobileMenuIcon onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </MobileMenuIcon>
        </ControlsContainer>
      </CenterContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  a {
    color: inherit;
    text-decoration: inherit;
    position: relative;
    padding-bottom: 0.2rem;
    cursor: pointer;
    font-weight: 500;
    transition: color 0.3s ease;
    
    ::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${(props) =>
    props.isDarkTheme ? DarkTheme.accent : LightTheme.accent};
      transition: width 0.3s ease;
    }

    :hover::after, &.active::after {
      width: 100%;
    }
    
    :hover {
      color: ${(props) =>
    props.isDarkTheme ? DarkTheme.accent : LightTheme.accent};
    }
  }
  
  background-color: ${(props) =>
    props.isDarkTheme ? DarkTheme.glass : LightTheme.glass};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: ${(props) =>
    props.isDarkTheme ? DarkTheme.fg : LightTheme.fg};
  height: 60px;
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  z-index: 999;
  border-bottom: 1px solid ${(props) =>
    props.isDarkTheme ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'};
  transition: background-color 0.3s ease, border-bottom 0.3s ease;

  @media screen and (max-width: 768px) {
    height: 60px;
  }
`;

const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  position: relative;
`;

const LeftContainer = styled.div`
  a {
    font-family: 'Outfit', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 1px;
    z-index: 1001;
    position: relative;
    ::after {
      display: none;
    }
    :hover {
      color: ${(props) =>
    props.isDarkTheme ? DarkTheme.fg : LightTheme.fg};
      transform: scale(1.02);
      transition: transform 0.2s ease;
    }
  }
  
  @media screen and (max-width: 768px) {
    a {
      font-size: 1.1rem;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${(props) => (props.isOpen ? '0' : '-100%')};
    width: 100%;
    height: 100vh;
    background-color: ${(props) =>
    props.isDarkTheme ? DarkTheme.bg : LightTheme.bg};
    transition: left 0.4s cubic-bezier(0.175, 0.885, 0.32, 1);
    gap: 2rem;
    z-index: 1000;
    
    a {
      font-size: 1.5rem;
      padding: 0.5rem;
    }
  }
`;

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 1001; /* Above mobile menu */

  @media screen and (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const LanguageSelect = styled.select`
  background: transparent;
  border: 1px solid ${(props) =>
    props.isDarkTheme ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'};
  color: ${(props) => (props.isDarkTheme ? DarkTheme.fg : LightTheme.fg)};
  border-radius: 4px;
  padding: 0.2rem 1.8rem 0.2rem 0.5rem;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${(props) => props.isDarkTheme ? '%23f8fafc' : '%231e293b'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>');
  background-repeat: no-repeat;
  background-position: right 0.2rem center;
  background-size: 1rem;

  option {
    background: ${(props) => (props.isDarkTheme ? DarkTheme.bg : LightTheme.bg)};
    color: ${(props) => (props.isDarkTheme ? DarkTheme.fg : LightTheme.fg)};
    font-size: 1rem;
  }

  &:hover {
    background-color: ${(props) =>
    props.isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'};
  }

  @media screen and (max-width: 768px) {
    padding: 0.1rem 1.2rem 0.1rem 0.3rem;
    font-size: 0.85rem;
    background-size: 0.8rem;
    background-position: right 0.1rem center;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;
  
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
