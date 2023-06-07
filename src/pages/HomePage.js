import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import pdf from "../resources/Oscar_Maia_CV.pdf";
import { useTheme } from "../context/ThemeContext";
import { DarkTheme, LightTheme } from "../resources/Theme";

export default function HomePage() {
  const openPdf = () => {
    window.open(pdf, "_blank");
  };
  const isDarkTheme = useTheme();
  return (
    <ApresentationContainer>
      <div>
        <h1>
          Olá, eu sou <strong>Oscar Maia</strong>
        </h1>
        <br />
        <h2>
          Um Desenvolvedor <strong>Full Stack!</strong>
        </h2>
        <span>
          Aqui você encontrará alguns dos meus projetos.
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
            <button>Projetos</button>
          </LinkScroll>
          <button onClick={openPdf}>Currículo</button>
        </ButtonsContainer>
      </div>
    </ApresentationContainer>
  );
}

const ApresentationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const ButtonsContainer = styled.div`
  button {
    cursor: pointer;
    padding: 0.3rem;
    margin: 0.1rem;
    border-radius: 0.2rem;
    background-color: ${(props) =>
      props.isDarkTheme ? DarkTheme.detailBg : LightTheme.detailBg};
    span {
      font-size: 0.8em;
    }
    :hover {
      box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.6);
    }
  }
`;
