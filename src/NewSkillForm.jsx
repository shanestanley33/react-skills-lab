import { useState } from "react";

export default function NewSkillForm( {addSkill} ) {
  const [newSkill, setNewSkill] = useState("")

  function handleAddSkill(event) {
    event.preventDefault()
    addSkill(newSkill);
    setNewSkill("")
  }

  return (
    <>
      <h2>New Skill</h2>
      <form onSubmit={handleAddSkill}>
          <input
              value={newSkill}
              onChange={(event) => setNewSkill(event.target.value)}
              placeholder="New Skill"
              required
              pattern=".{3,}"
          />
          <button type="submit">ADD NEW SKILL</button>
      </form>
    </>
  )
}
