import ProjectCard from "./ProjectCard";
import { projects } from "./projectList";
import style from "./style.module.scss";

export default function ProjectContainer() {
  return (
    <div className={style.projectContainer}>
      <div className={style.projectHeader}>
        <h2 className={style.projectTitle} id="projects-header">
          Projects
        </h2>
      </div>
      <div className={style.projWrapper}>
        {projects.map(
          ({ title, img, link, gitHubLink, description, date, tags }, idx) => (
            <ProjectCard
              key={`${title}__${idx}`}
              img={img}
              title={title}
              link={link}
              gitHubLink={gitHubLink}
              description={description}
              date={date}
              tags={tags}
            />
          ),
        )}
      </div>
    </div>
  );
}
