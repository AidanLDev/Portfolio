import { ISkill, DatesUsedRange } from "@/interfaces/skillsInterfaces.types";

const currentlyUsingText = "Currently using at ProcessVision";

const contactPartnersExperienceRange: DatesUsedRange = [
  new Date("2018/02/01"),
  new Date("2020/12/01"),
];
const daviesExperienceRange: DatesUsedRange = [
  new Date("2020/12/01"),
  new Date("2024/04/01"),
];
const processVisionExperienceRange: DatesUsedRange = [
  new Date("2024/04/01"),
  new Date(),
];

export const frontEndSkills: ISkill[] = [
  {
    skill: "React",
    datesUsed: [
      contactPartnersExperienceRange,
      daviesExperienceRange,
      processVisionExperienceRange,
    ],
    category: "frontend",
    experienceDetails: [
      "2 Years Contact Partners",
      "4 Years Davies",
      currentlyUsingText,
    ],
  },
  {
    skill: "Next",
    datesUsed: [processVisionExperienceRange],
    category: "frontend",
    experienceDetails: [currentlyUsingText],
  },
  {
    skill: "Angular",
    datesUsed: [
      contactPartnersExperienceRange,
      [new Date("2023/01/01"), new Date("2024/01/01")],
    ],
    category: "frontend",
    experienceDetails: ["2 Years Contact Partners", "1 Year Davies"],
  },
  {
    skill: "TypeScript",
    datesUsed: [daviesExperienceRange, processVisionExperienceRange],
    category: "frontend",
    experienceDetails: ["4 Years at Davies", currentlyUsingText],
  },
  {
    skill: "Redux (Toolkit)",
    datesUsed: [
      [new Date("2021/01/01"), new Date("2024/01/01")],
      processVisionExperienceRange,
    ],
    category: "frontend",
    experienceDetails: ["3 Years at Davies", currentlyUsingText],
  },
  {
    skill: "CSS (SASS/Tailwind)",
    datesUsed: [
      contactPartnersExperienceRange,
      daviesExperienceRange,
      processVisionExperienceRange,
    ],
    category: "frontend",
    experienceDetails: [
      "2 Years at ContactPartners",
      "4 Years at Davies",
      currentlyUsingText,
    ],
  },
  {
    skill: "Testing (Jest/Cypress/Playwright)",
    datesUsed: [
      [new Date("2019/01/01"), new Date("2020/01/01")],
      [new Date("2022/01/01"), new Date("2024/01/01")],
      processVisionExperienceRange,
    ],
    category: "frontend",
    experienceDetails: [
      "1 Year at ContactPartners",
      "2 Years at Davies",
      currentlyUsingText,
    ],
  },
];

export const backendSkills: ISkill[] = [
  {
    skill: "Node.js (Koa/Express)",
    datesUsed: [daviesExperienceRange, processVisionExperienceRange],
    category: "backend",
    experienceDetails: ["4 Years at Davies", currentlyUsingText],
  },
  {
    skill: "C# / .NET",
    datesUsed: [[new Date("2021/01/01"), new Date("2024/04/01")]],
    category: "backend",
    experienceDetails: ["3 Years at Davies"],
  },
  {
    skill: "GraphQL (AppSync)",
    datesUsed: [processVisionExperienceRange],
    category: "backend",
    experienceDetails: [currentlyUsingText],
  },
  {
    skill: "SQL (MS SQL / PostgreSQL / MySQL)",
    datesUsed: [contactPartnersExperienceRange, daviesExperienceRange],
    category: "backend",
    experienceDetails: ["2 Years at ContactPartners", "4 Years at Davies"],
  },
  {
    skill: "DynamoDB",
    datesUsed: [processVisionExperienceRange],
    category: "backend",
    experienceDetails: [currentlyUsingText],
  },
  {
    skill: "Python",
    datesUsed: [[new Date("2024/06/01"), new Date()]],
    category: "backend",
    experienceDetails: ["Used for ML image processing at ProcessVision"],
  },
];

export const devOpsSkills: ISkill[] = [
  {
    skill: "AWS",
    datesUsed: [
      contactPartnersExperienceRange,
      daviesExperienceRange,
      processVisionExperienceRange,
    ],
    category: "devops",
    experienceDetails: [
      "2 Years DevOps at ContactPartners",
      "4 Years AWS-hosted systems at Davies",
      currentlyUsingText,
    ],
  },
  {
    skill: "CI/CD (CodeBuild, CodePipeline, CodeDeploy)",
    datesUsed: [contactPartnersExperienceRange, daviesExperienceRange],
    category: "devops",
    experienceDetails: [
      "2 Years DevOps at ContactPartners",
      "4 Years at Davies",
    ],
  },
  {
    skill: "Docker",
    datesUsed: [[new Date("2019/01/01"), new Date("2024/04/01")]],
    category: "devops",
    experienceDetails: ["Used across DevOps & backend workflows"],
  },
  {
    skill: "Linux (Arch / Ubuntu)",
    datesUsed: [
      contactPartnersExperienceRange,
      daviesExperienceRange,
      processVisionExperienceRange,
    ],
    category: "devops",
    experienceDetails: [
      "Daily development environment",
      "Production server management",
      currentlyUsingText,
    ],
  },
  {
    skill: "Git",
    datesUsed: [
      contactPartnersExperienceRange,
      daviesExperienceRange,
      processVisionExperienceRange,
    ],
    category: "devops",
    experienceDetails: ["Version control across all roles", currentlyUsingText],
  },
  {
    skill: "Serverless (Lambda, EventBridge)",
    datesUsed: [processVisionExperienceRange],
    category: "devops",
    experienceDetails: ["Serverless architecture at ProcessVision"],
  },
  {
    skill: "Monitoring (CloudWatch, X-Ray)",
    datesUsed: [contactPartnersExperienceRange, daviesExperienceRange],
    category: "devops",
    experienceDetails: [
      "2 Years DevOps at ContactPartners",
      "4 Years monitoring AWS systems at Davies",
    ],
  },
];
