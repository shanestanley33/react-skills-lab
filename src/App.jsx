import './App.css'
import SkillList from './SkillList'
import NewSkillForm from './NewSkillForm'

const initialskills = [
  'Earth',
  'Fire',
  'Wind',
  'Water',
  'Heart'
]


//import
function App() {

  return (
    <>
     <h1>"By your powers combined"</h1> 
     <SkillList />
     <hr></hr>
     <NewSkillForm />
     <hr />
    </>
  )
}

export default App
