import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'

function App() {
    const [team, setTeam] = useState (["Charizard", "Pikachu", "Jigglypuff"])
 return(
  <>
  <Counter team={team} setTeam={setTeam}/>
  </>
 );
}

export default App;
