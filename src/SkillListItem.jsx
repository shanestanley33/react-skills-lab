import './SkillListItem.css'

export default function SkillListItem({name, skill}) {
  return (
    <>
    <li className="SkillListItem">{skill.name} {skill.level}</li>
    </>
  )
}
