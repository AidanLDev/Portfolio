import { Center, Heading, Box } from '@chakra-ui/react'
import React from 'react'

import style from './style.module.scss'
import ProjectCard, { Project } from './ProjectCard'

const projects: Project[] = [
  {
    img: 'Portfolio.webp',
    title: 'Personal Portfolio',
    link: 'https://aidanlowson.com',
    gitHubLink: 'https://github.com/AidanLDev/Portfolio',
    description:
      "My personal portfolio website, guess what, it's what you're looking at now! Where I showcase my projects, link to my socials and describe who I am for anyone interested. It's written using Next, and uses Cypress and React Testing library that're integrating into an AWS CI/CD pipeline",
    date: '2019/07/23',
    tags: ['Next.js', 'TypeScript'],
  },
  {
    img: 'DoubleATeamBlog.jpg',
    title: 'Double A Team blog',
    link: 'https://blog.aidanlowson.com',
    gitHubLink: 'https://github.com/AidanLDev/doubleateam',
    description:
      'Our personal blog. Double A Team stands for Aidan and Arni, Arni being my wife and fellow blogger, we will write about whatever we feel people would like to know, sharing what we know with those who want to know. Written in Astro to provice that all important SEO performance. Deployed to AWS CloudFront to allow quick access to our content no matter your location',
    date: '2021/10/18',
    tags: ['Astro', 'AWS', 'TypeScript'],
  },
  {
    img: 'ChatPDF.webp',
    title: 'ChatPDF',
    link: 'https://chat-pdf-xi.vercel.app/',
    gitHubLink: 'https://github.com/AidanLDev/chat-pdf',
    description:
      "An AI application using GPT to answer questions or provide information in the context of a PDF you upload. Using Drizzle ORM for that all important type saftey, Neon DB to store chats, AWS S3 to store the PDFs and of course OpenAI's powerful language model GPT3.5 Turbo. There's an option to go pro and pay a monthly subsciption to unlock unlimited PDFs using Stripe.",
    date: '2023/09/23',
    tags: [
      'GPT',
      'Tailwind',
      'AWS',
      'Neon',
      'Drizzle',
      'TypeScript',
      'Next.js',
      'Stripe',
    ],
  },
  {
    img: 'Supa_Smoothies.jpg',
    title: 'Supa Smoothies',
    link: 'https://supasmoothy-aidanldev.vercel.app/',
    gitHubLink: 'https://github.com/AidanLDev/supasmoothy',
    description:
      'A project used to get the hang of Supabase, the Open Source Postgres database, using React, TypeScript to build a fun Smoothy themed UI. Utalising the main CRUD functions of a database (Create, Read, Update, Delete).',
    date: '2023/07/03',
    tags: ['Supabase', 'React', 'TypeScript', 'Vite'],
  },
  {
    img: 'svelte-todo.jpg',
    title: 'Svelte TODO',
    link: 'https://svelte-todo-xi.vercel.app/',
    gitHubLink: 'https://github.com/AidanLDev/svelte-todo',
    description:
      'A project for learning Svelte. After creating a basic TODO app with Svelte I thought it would be neat to add authentication and a database so TODOs could persist, so I added a Supabase db to store data and handle authentication.',
    date: '2023/06/25',
    tags: ['Svelte', 'Supabase', 'TypeScript'],
  },
  {
    img: 'MusicLibraryProject.jpg',
    title: 'Song Search',
    link: 'https://song-search-web-search.onrender.com/',
    gitHubLink: 'https://github.com/AidanLDev/Song_Search',
    description:
      'Search through a small library of music, using a Node.js backend and a React Frontend with Bootstrap to style the components.',
    date: '2020/05/16',
    tags: ['Node', 'React', 'TypeScript', 'Bootstrap'],
  },
  {
    img: 'BurgerBuilder.jpg',
    title: 'Burger Builder',
    link: 'https://aidans-burger-builder.firebaseapp.com/',
    gitHubLink: 'https://github.com/AidanLDev/Training-Burger-Builder',
    description:
      'One of my first React projects, a burger building application using React and Redux. With a Firebase backend to store burger orders',
    date: '2019/04/06',
    tags: ['React', 'Firebase', 'Redux'],
  },
]

export default function ProjectContainer() {
  return (
    <div className={`${style.projectContainer}`}>
      <Center>
        <Heading p="4rem 0">Projects</Heading>
      </Center>
      <Box className={style.projWrapper}>
        {projects.map(
          (
            { title, img, link, gitHubLink, description, date, tags },
            idx
          ) => (
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
          )
        )}
      </Box>
    </div>
  )
}
