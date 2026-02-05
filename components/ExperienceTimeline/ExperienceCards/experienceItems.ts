import { ITimelineItem } from "@/interfaces/timelineInterfaces.types";

export const experienceItems: ITimelineItem[] = [
  {
    roleName: "Full Stack Developer",
    companyName: "Process Vision",
    startDate: "April 2024",
    endDate: "Present",
    description:
      "Developing and maintaining Next.js Portal for managing IoT devices and integrating with AWS services.",
    bullets: [
      "Reduced page load times by 90% through client side caching with Redux Toolkit and reducing GraphQL query sizes.",
      "Implemented e2e testing strategy with Cypress, reducing bugs.",
      "Added many major features including orders & asset management, reporting and user management.",
    ],
    link: "https://www.processvision.com/",
  },
  {
    roleName: "Full Stack Developer",
    companyName: "Davies Group",
    startDate: "December 2020",
    endDate: "April 2024",
    description:
      "Worked with ContactPartners (acquired by Davies Group in 2020) serving clients including insurance companies and the British Government.",
    bullets: [
      "Built government CMS using React TypeScript with Redux Toolkit and ASP .NET API, implementing Mock Service Workers for independent FE development.",
      "Developed claims management solution with C# .NET and Angular for international team.",
      "Worked with AWS services including EC2, S3, Cognito, IAM, CodeBuild, CodePipeline, and Lambda.",
    ],
    link: "https://davies-group.com/",
  },
  {
    roleName: "Full Stack Developer",
    companyName: "ContactPartners",
    startDate: "February 2018",
    endDate: "December 2020",
    description:
      "Developed systems for major UK banks including Lloyds Banking Group and NatWest, serving millions of customers.",
    bullets: [
      "Built public-facing mortgage application forms in Angular.js used by millions of customers, ensuring AA accessibility and IE7 compatibility.",
      "Developed CMS systems for NatWest branch staff to manage customer loans, mortgages, and banking needs using React, Node API, and MS SQL Server.",
      "Created multi-page forms with Salesforce integration and lead management systems hosted on AWS.",
    ],
    link: "https://davies-group.com/knowledge/davies-continues-investment-in-specialist-technology-with-acquisition-of-contactpartners/",
  },
];
