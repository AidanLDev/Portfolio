import { Project } from "../../interfaces/projectInterfaces.types";

export const projects: Project[] = [
  {
    img: "Free-QR-Gen-Project.webp",
    title: "Free QR Gen",
    link: "https://freeqrgen.net",
    gitHubLink: "https://github.com/AidanLDev",
    date: "2024/08/21",
    description:
      "Free QR Gen is a customisable QR code generator, you can create a unique code for any link you choose. Customiseable options; size, foreground colour, background colour and any icon/logo can be used as part of the code.",
    tags: ["Next.js", "AWS", "TypeScript"],
  },
  {
    img: "dev-daily-hub.webp",
    title: "Dev Daily Hub",
    link: "https://devdailyhub.com",
    gitHubLink: "https://github.com/AidanLDev",
    date: "2024/09/16",
    description:
      "My technical blog site, where I write articals about programming, software engineering and general self-help. Written with Astro to get those top performance ratings.",
    tags: ["Astro", "TypeScript", "Tailwind"],
  },
  {
    img: "Portfolio.webp",
    title: "Personal Portfolio",
    link: "https://aidanlowson.com",
    gitHubLink: "https://github.com/AidanLDev/Portfolio",
    description:
      "My portfolio website, guess what, it's what you're looking at now! Where I showcase my projects, link to my socials and describe who I am for anyone interested. It's written using Next, and uses Cypress and React Testing library that're integrating into an AWS CI/CD pipeline.",
    date: "2019/07/23",
    tags: ["Next.js", "TypeScript"],
  },
  {
    img: "DoubleATeamBlog.webp",
    title: "Double A Team blog",
    link: "https://blog.aidanlowson.com",
    gitHubLink: "https://github.com/AidanLDev/doubleateam",
    description:
      "Our blog. Double A Team stands for Aidan and Arni, my wife and fellow blogger, we will write about whatever we feel people would like to know, sharing what we know with those who want to know. Written in Astro for that all-important SEO performance. Deployed to AWS CloudFront to allow quick access to our content no matter your location.",
    date: "2021/10/18",
    tags: ["Astro", "AWS", "TypeScript"],
  },
  {
    img: "Data_visualisation.webp",
    title: "Carbon Data Visualisation",
    link: "https://carbon-data-visualisation.vercel.app/",
    gitHubLink: "https://github.com/AidanLDev/carbon_data_visualisation",
    description:
      "A project created for a technical exercise, I demonstrated my approach to calling an API to get carbon data and visualising that data in a web application. I went for a Next app to hit the ground running using the create-next-app template meaning I had TypeScript and Tailwind configured out of the box. For the graph I use a library called chart.js to create a line graph to display the data.",
    date: "2023/11/09",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
];

/*
  Old projects
    {
    img: 'ChatPDF.webp',
    title: 'ChatPDF',
    link: 'https://chat-pdf-xi.vercel.app/',
    gitHubLink: 'https://github.com/AidanLDev/chat-pdf',
    description:
      "An AI application to answer questions or provide information in the context of a PDF you upload. Using Drizzle ORM type saftey, Neon DB to store chats, AWS S3 to store the PDFs and of course OpenAI's powerful language model GPT3.5 Turbo. There's an option to go pro and pay a monthly subsciption to unlock unlimited PDFs using Stripe.",
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
    img: 'Supa_Smoothies.webp',
    title: 'Supa Smoothies',
    link: 'https://supasmoothy-aidanldev.vercel.app/',
    gitHubLink: 'https://github.com/AidanLDev/supasmoothy',
    description:
      'A project used to get the hang of Supabase, the Open Source Postgres database, using React, TypeScript to build a fun Smoothy themed UI. Utalising the main CRUD functions of a database (Create, Read, Update, Delete).',
    date: '2023/07/03',
    tags: ['Supabase', 'React', 'TypeScript', 'Vite'],
  },
  {
    img: 'svelte-todo.webp',
    title: 'Svelte TODO',
    link: 'https://svelte-todo-xi.vercel.app/',
    gitHubLink: 'https://github.com/AidanLDev/svelte-todo',
    description:
      'A project for learning Svelte. After creating a basic TODO app with Svelte I thought it would be neat to add authentication and a database so TODOs could persist, so I added a Supabase db to store data and handle authentication.',
    date: '2023/06/25',
    tags: ['Svelte', 'Supabase', 'TypeScript'],
  },
  {
    img: 'MusicLibraryProject.webp',
    title: 'Song Search',
    link: 'https://song-search-ten.vercel.app/',
    gitHubLink: 'https://github.com/AidanLDev/Song_Search',
    description:
      'What used to be a hubmle Node.js backend project has evolved to use the migthy Next... Utilising Tailwind and TypeScript, this project has a "database" of songs you can search for visa the track name or if you want to see all songs by a particular artist, there\'s a dropdown for that',
    date: '2020/05/16',
    tags: ['Next', 'TypeScript', 'Tailwind'],
  },
  {
    img: 'BurgerBuilder.webp',
    title: 'Burger Builder',
    link: 'https://aidans-burger-builder.firebaseapp.com/',
    gitHubLink: 'https://github.com/AidanLDev/Training-Burger-Builder',
    description:
      'One of my first React projects, a burger building application using React and Redux. With a Firebase backend to store burger orders.',
    date: '2019/04/06',
    tags: ['React', 'Firebase', 'Redux'],
  },
*/
