import styled from "styled-components";
import Project from "./Project";
import drivent from "../../resources/images/projects/drivent.png";
import mywallet from "../../resources/images/projects/mywallet.png";
import cineflex from "../../resources/images/projects/cineflex.png";
import trackit from "../../resources/images/projects/trackit.png";
import zaprecall from "../../resources/images/projects/zaprecall.png";
import forca from "../../resources/images/projects/forca.png";
import instagram from "../../resources/images/projects/instagram.png";
import { useTranslation } from "react-i18next";

export default function ProjectList() {
  const { t } = useTranslation();
  const projects = [
    {
      title: "Driven.t",
      description: t("projects.drivent.desc"),
      image: drivent,
      techs: [
        "TypeScript",
        "JavaScript",
        "ReactJS",
        "NodeJS",
        "PostgreSQL",
        "Redis",
        "Prisma",
        "Jest",
        "SuperTest",
      ],
      github: "https://github.com/teamdrivent/drivent-frontend",
      deploy: "https://drivent-frontend-oscarfgmaia.vercel.app/",
    },
    {
      title: "MyWallet",
      description: t("projects.mywallet.desc"),
      image: mywallet,
      techs: ["JavaScript", "ReactJS", "NodeJS", "MongoDB"],
      github: "https://github.com/oscarmaia/projeto14-mywallet-front",
      deploy: "https://projeto14-mywallet-front-five.vercel.app/",
    },
    {
      title: "CineFlex",
      description: t("projects.cineflex.desc"),
      image: cineflex,
      techs: ["JavaScript", "ReactJS", "NodeJS", "MongoDB"],
      github: "https://github.com/oscarmaia/projeto10-cineflex",
      deploy: "http://projeto10-cineflex-pi-ten.vercel.app/",
    },
    {
      title: "TrackIt",
      description: t("projects.trackit.desc"),
      image: trackit,
      techs: ["JavaScript", "ReactJS", "NodeJS"],
      github: "https://github.com/oscarmaia/projeto11-trackit",
      deploy: "http://projeto11-trackit-chi.vercel.app/",
    },
    {
      title: "ZapRecall",
      description: t("projects.zaprecall.desc"),
      image: zaprecall,
      techs: ["JavaScript", "ReactJS", "NodeJS"],
      github: "https://github.com/oscarmaia/projeto9-zaprecall",
      deploy: "http://projeto9-zaprecall-rho.vercel.app/",
    },
    {
      title: t("projects.forca.title"),
      description: t("projects.forca.desc"),
      image: forca,
      techs: ["JavaScript", "ReactJS", "NodeJS"],
      github: "https://github.com/oscarmaia/projeto8-jogoforca",
      deploy: "http://projeto8-jogoforca-c187.vercel.app/",
    },
    {
      title: t("projects.instagram.title"),
      description: t("projects.instagram.desc"),
      image: instagram,
      techs: ["JavaScript", "ReactJS", "NodeJS"],
      github: "https://github.com/oscarmaia/projeto7-instagramreact",
      deploy: "http://projeto7-instagramreact-five.vercel.app/",
    },
  ];
  return (
    <ProjectsContainer>
      {projects.map((p, index) => (
        <Project
          title={p.title}
          description={p.description}
          image={p.image}
          techs={p.techs}
          key={index}
          github={p.github}
          deploy={p.deploy}
        />
      ))}
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  justify-items: center;
  align-items: stretch; /* Forces all cards in a row to the same height */
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr; /* Single column on very small screens */
    gap: 1rem;
  }
`;
