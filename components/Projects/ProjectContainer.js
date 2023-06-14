import { Center, Heading, Box } from '@chakra-ui/react'
import React from 'react'

import style from './style.module.scss'
import ProjectCard from './ProjectCard'

const projects = [
  {
    img: 'DoubleATeamBlog.jpg',
    tooltip: 'Click to view The Double A Team blog',
    link: 'https://blog.aidanlowson.com',
  },
  {
    img: 'MusicLibraryProject.png',
    tooltip: 'Click to view Music library search',
    link: 'https://song-search-web-search.onrender.com/',
    gitHubLink: 'https://github.com/AidanLDev/Song_Search',
  },
  {
    img: 'CityGuideReactBoostrap.jpg',
    tooltip: 'Click to view React city guide made with Bootstrap',
    link: 'http://react-bootstrap-city-guide.s3-website.eu-west-2.amazonaws.com/',
    gitHubLink: 'https://github.com/AidanLDev/React-Bootstrap-City-Guide',
  },
  {
    img: 'FizzBuzzJs.jpg',
    tooltip: 'Click to view FizzBuzz JS edition',
    link: 'http://fizz-buzz.s3-website.eu-west-2.amazonaws.com/',
    gitHubLink: 'https://github.com/AidanLDev/FizzBuzz.js',
  },
]

export default function ProjectContainer() {
  return (
    <div className={`${style.projectContainer}`}>
      <Center>
        <Heading p="4rem 0">Projects</Heading>
      </Center>
      <Box className={style.projWrapper}>
        {projects.map((project, idx) => (
          <ProjectCard
            key={`${project.tooltip}__${idx}`}
            img={project.img}
            tooltip={project.tooltip}
            link={project.link}
            gitHubLink={project.gitHubLink}
          />
        ))}
      </Box>
    </div>
  )
}
