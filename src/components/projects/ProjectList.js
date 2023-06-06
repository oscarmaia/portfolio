import styled from "styled-components";
import Project from "./Project";

export default function ProjectList() {
  return (
    <ProjectListContainer>
      <Project
        title={"MyWallet"}
        description={
          "Um App para auxiliar nos gastos diários dos usuários mais loucosUm App para auxiliar nos gastos diários dos usuários mais loucos"
        }
        image={"qqrimagem"}
        techs={"array de techs"}
        key={"id"}
      />
      <Project
        title={"CineFlex"}
        description={
          "Um App para auxiliar nos gastos diáriar nos gastos diários dos usuários mais loucos"
        }
        image={"qqrimagem"}
        techs={"array de techs"}
        key={"id"}
      />
      <Project
        title={"CineFlex"}
        description={
          "Um App para auxiliar nos gastos diáriar nos gastos diários dos usuários mais loucos"
        }
        image={"qqrimagem"}
        techs={"array de techs"}
        key={"id"}
      />
      <Project
        title={"CineFlex"}
        description={
          "Um App para auxiliar nos gastos diáriar nos gastos diários dos usuários mais loucos"
        }
        image={"qqrimagem"}
        techs={"array de techs"}
        key={"id"}
      />
      <Project
        title={"CineFlex"}
        description={
          "Um App para auxiliar nos gastos diáriar nos gastos diários dos usuários mais loucos"
        }
        image={"qqrimagem"}
        techs={"array de techs"}
        key={"id"}
      />
    </ProjectListContainer>
  );
}

const ProjectListContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: green;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;
