import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import pdfEN from "../resources/Oscar_Maia_CV_EN.pdf";
import pdfPT from "../resources/Oscar_Maia_CV_PT.pdf";
import { useTheme } from "../context/ThemeContext";
import { DarkTheme, LightTheme } from "../resources/Theme";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t, i18n } = useTranslation();

  const openPdf = () => {
    if (i18n.language.startsWith("pt")) {
      window.open(pdfPT, "_blank");
    } else {
      window.open(pdfEN, "_blank");
    }
  };
  const isDarkTheme = useTheme();
  return (
    <ApresentationContainer isDarkTheme={isDarkTheme}>
      <div>
        <h1>
          {t("home.greeting")}<strong>Oscar Maia</strong>
        </h1>
        <br />
        <h2>
          {t("home.rolePrefix")}<strong>{t("home.roleHighlight")}</strong>
        </h2>
        <span>
          {t("home.description")}
        </span>
        <ButtonsContainer isDarkTheme={isDarkTheme}>
          <LinkScroll
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            <button>{t("home.projectsBtn")}</button>
          </LinkScroll>
          <button onClick={openPdf}>{t("home.resumeBtn")}</button>
        </ButtonsContainer>
      </div>
    </ApresentationContainer>
  );
}

const ApresentationContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 1rem 4rem 1rem; /* Added top padding to account for fixed header */
  box-sizing: border-box;
  
  > div {
    max-width: 800px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
  
  h1 {
    font-family: 'Outfit', sans-serif;
    font-size: 3.5rem;
    font-weight: 300;
    margin: 0;
    line-height: 1.2;
    
    strong {
      font-weight: 800;
      background: linear-gradient(135deg, ${(props) =>
    props.isDarkTheme ? DarkTheme.detail2 : LightTheme.detail2}, ${(props) =>
      props.isDarkTheme ? DarkTheme.accent : LightTheme.accent});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: 400;
    color: ${(props) =>
    props.isDarkTheme ? 'rgba(248, 250, 252, 0.8)' : 'rgba(15, 23, 42, 0.8)'};
      
    strong {
      font-weight: 600;
      color: ${(props) =>
    props.isDarkTheme ? DarkTheme.fg : LightTheme.fg};
    }
  }

  span {
    font-size: 1.1rem;
    color: ${(props) =>
    props.isDarkTheme ? 'rgba(248, 250, 252, 0.6)' : 'rgba(15, 23, 42, 0.6)'};
    max-width: 500px;
    margin-top: 0.5rem;
    line-height: 1.6;
  }
  
  @media screen and (max-width: 768px) {
    min-height: 70vh;
    padding-top: 5rem;
    
    h1 { 
      font-size: 2.5rem; 
    }
    h2 { 
      font-size: 1.4rem; 
      padding: 0 1rem;
    }
    span {
      font-size: 1rem;
      padding: 0 1rem;
    }
  }

  @media screen and (max-width: 480px) {
    h1 { 
      font-size: 2rem; 
    }
    h2 { 
      font-size: 1.2rem; 
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    padding: 0 1.5rem;
    box-sizing: border-box;
    gap: 0.8rem;
  }
  
  button {
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    padding: 0.8rem 1.8rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 2rem;
    border: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    @media screen and (max-width: 480px) {
      width: 100%;
      padding: 1rem;
    }
    
    /* Primary button style */
    &:first-child {
      background: linear-gradient(135deg, ${(props) =>
    props.isDarkTheme ? DarkTheme.detail2 : LightTheme.detail2}, ${(props) =>
      props.isDarkTheme ? DarkTheme.accent : LightTheme.accent});
      color: #ffffff;
      box-shadow: 0 4px 14px 0 ${(props) =>
    props.isDarkTheme ? 'rgba(56, 189, 248, 0.39)' : 'rgba(59, 130, 246, 0.39)'};
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5);
      }
    }
    
    /* Secondary button style */
    &:last-child {
      background-color: transparent;
      color: ${(props) =>
    props.isDarkTheme ? DarkTheme.fg : LightTheme.fg};
      border: 2px solid ${(props) =>
    props.isDarkTheme ? DarkTheme.detailBg : LightTheme.detailBg};
      
      &:hover {
        background-color: ${(props) =>
    props.isDarkTheme ? DarkTheme.detailBg : LightTheme.detailBg};
        transform: translateY(-2px);
      }
    }
  }
`;
