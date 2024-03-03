import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { FaGithub, FaMedium } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState();

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    try {
      const info = await axios.get(
        "https://my-json-server.typicode.com/yjshin229/cs391/projects"
      );
      console.log(info.data);
      setProjects(info.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderProjects = () => {
    if (!projects) return <div>loading...</div>;
    return (
      <StyledProjectContainer>
        {projects.map((project) => (
          <StyledProject key={project.id}>
            <StyledProjectHeader>
              <h3>{project.title}</h3>
              <StyledLink to={project.github} target="_blank">
                <FaGithub size={24} />
              </StyledLink>
              {project?.article && (
                <StyledLink to={project.article} target="_blank">
                  <FaMedium size={24} />
                </StyledLink>
              )}
            </StyledProjectHeader>

            <p>
              <span>Tech Stack: </span>
              {project.body.techStack}
            </p>
            <p>
              <span>Language: </span>
              {project.body.language}
            </p>
          </StyledProject>
        ))}
      </StyledProjectContainer>
    );
  };
  return renderProjects();
};

export default Projects;

const StyledProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem;
`;

const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  border-width: 2px;
  border-style: dashed;
  border-color: #faf0af;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  background-color: #fffdeb;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-inline: 0.5rem;
`;

const StyledProjectHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
