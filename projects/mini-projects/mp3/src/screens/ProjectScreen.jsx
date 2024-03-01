import axios from "axios";
import { useState } from "react";

const ProjectScreen = () => {
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
  return <p>Projects</p>;
};

export default ProjectScreen;
