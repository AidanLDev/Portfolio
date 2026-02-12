type SkillCategory = "frontend" | "backend" | "devops";

export type DatesUsedRange = [Date, Date];

export interface ISkill {
  skill: string;
  datesUsed: DatesUsedRange[];
  category: SkillCategory;
  experienceDetails: string[]; // e.g. "2 years CP"
}
