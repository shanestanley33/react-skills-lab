import SkillListItem from "./SkillListItem";
import './SkillList.css'
const skills = [
    { name: 'Earth', level: 5 },
    { name: 'Fire', level: 3 },
    { name: 'Wind', level: 4 },
    { name: 'Water', level: 2 },
    { name: 'Heart', level: 1 },
]

export default function SkillList() {

    const skillListItemsArr = skills.map((skill, index) => <SkillListItem skill={skill} key={index}/>)



    return (
      <ul className="SkillList">
        {skillListItemsArr}
      </ul>
    );
  }