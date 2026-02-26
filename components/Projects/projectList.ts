import { Project } from '../../interfaces/projectInterfaces.types'

export const projects: Project[] = [
  {
    img: 'Free-QR-Gen-Project.webp',
    title: 'Free QR Gen',
    link: 'https://freeqrgen.net',
    gitHubLink: 'https://github.com/AidanLDev',
    date: '2024/08/21',
    description:
      'Free QR Gen is a customisable QR code generator, you can create a unique code for any link you choose. Customiseable options; size, foreground colour, background colour and any icon/logo can be used as part of the code.',
    tags: ['Next.js', 'AWS', 'TypeScript'],
  },
  {
    img: 'dev-daily-hub.webp',
    title: 'Dev Daily Hub',
    link: 'https://devdailyhub.com',
    gitHubLink: 'https://github.com/AidanLDev',
    date: '2024/09/16',
    description:
      'My technical blog site, where I write articals about programming, software engineering and general self-help. Written with Astro to get those top performance ratings.',
    tags: ['Astro', 'TypeScript', 'Tailwind'],
  },
  {
    img: 'Portfolio.webp',
    title: 'Personal Portfolio',
    link: 'https://aidanlowson.com',
    gitHubLink: 'https://github.com/AidanLDev/Portfolio',
    description:
      "My portfolio website, guess what, it's what you're looking at now! Where I showcase my projects, link to my socials and describe who I am for anyone interested. It's written using Next, and uses Cypress and React Testing library that're integrating into an AWS CI/CD pipeline.",
    date: '2019/07/23',
    tags: ['Next.js', 'TypeScript'],
  },
  {
    img: 'DoubleATeamBlog.webp',
    title: 'Double A Team blog',
    link: 'https://blog.aidanlowson.com',
    gitHubLink: 'https://github.com/AidanLDev/doubleateam',
    description:
      'Our blog. Double A Team stands for Aidan and Arni, my wife and fellow blogger, we will write about whatever we feel people would like to know, sharing what we know with those who want to know. Written in Astro for that all-important SEO performance. Deployed to AWS CloudFront to allow quick access to our content no matter your location.',
    date: '2021/10/18',
    tags: ['Astro', 'AWS', 'TypeScript'],
  },
  {
    img: 'Data_visualisation.webp',
    title: 'Carbon Data Visualisation',
    link: 'https://carbon-data-visualisation.vercel.app/',
    gitHubLink: 'https://github.com/AidanLDev/carbon_data_visualisation',
    description:
      'A project created for a technical exercise, I demonstrated my approach to calling an API to get carbon data and visualising that data in a web application. I went for a Next app to hit the ground running using the create-next-app template meaning I had TypeScript and Tailwind configured out of the box. For the graph I use a library called chart.js to create a line graph to display the data.',
    date: '2023/11/09',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
  },
]
