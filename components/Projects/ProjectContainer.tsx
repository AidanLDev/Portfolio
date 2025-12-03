import { Box, Center, Heading } from '@chakra-ui/react'
import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from './projectList'
import style from './style.module.scss'

export default function ProjectContainer() {
  return (
    <div className={`${style.projectContainer}`}>
      <Center>
        <Heading p='4rem 0' id='projects-header'>
          Projects
        </Heading>
      </Center>
      <Box className={style.projWrapper}>
        {projects.map(({ title, img, link, gitHubLink, description, date, tags }, idx) => (
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
        ))}
      </Box>
    </div>
  )
}
