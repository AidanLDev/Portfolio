import SkillCard from "./SkillCard";
import { frontEndSkills, backendSkills, devOpsSkills } from "./skillItems";

export default function SkillCards() {
  return (
    <div>
      {frontEndSkills.map((skillObj, idx) => (
        <SkillCard key={`${skillObj.skill}__${idx}`} skillObject={skillObj} />
      ))}
    </div>
  );
}
