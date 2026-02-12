import { ISkill } from "@/interfaces/skillsInterfaces.types";

interface ISkillCardProps {
  skillObject: ISkill;
}

export default function SkillCard({ skillObject }: Readonly<ISkillCardProps>) {
  return (
    <div>
      <h3>{skillObject.skill}</h3>
    </div>
  );
}
