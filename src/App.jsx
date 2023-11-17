import './App.css'
import SkillList from './SkillList'
import NewSkillForm from './NewSkillForm'
import { useState } from 'react'

const initialSkills = [
  'Earth',
  'Fire',
  'Wind',
  'Water',
  'Heart'
]


function App() {
  const [skills, setSkills] = useState(initialSkills)
  const [showSkills, setShowSkills] = useState(true)
  
function addSkill(skill) {
  setSkills([...skills, skill])
}


  return (
    <>
     <h1>"By your powers combined"</h1>
      <button onClick={() => setShowSkills(!showSkills)}>{showSkills ? 'Hide me' : 'Show me'}</button>
      {showSkills && <SkillList skills={skills}/>}
      <hr />
      <NewSkillForm addSkill={addSkill} />

    </>
  )

}

export default App
