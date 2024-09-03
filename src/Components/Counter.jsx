import { useState, useEffect } from 'react'
import { fetchPokemonData } from '../assets/api/fetchdata';
import React from 'react'

function Counter({team, setTeam}) {

const [count, setCount] = useState(0);
const [pokemon, setPokemon] = useState("")

const handleClick = () => {
    setCount(count +1)
}
const addToList = () => {
  setTeam([
    ...team,
    pokemon
  ])
}

//there are 3 different ways to use a useEffect
//the first way is '[]' empty array inside your useEffect that useEffect will fire once at render.

useEffect(()=>{
const data = fetchPokemonData();
console.log("This is my data", data);
// setMyData(data);
},[])

console.log (pokemon);

  return (
    <div className='m-auto w-6/12 border-red-400 border-4 text-center pt-5 pb-5 bg-zinc-400 rounded-tl-lg ' >
      <h1>Counter Component</h1>
      <h2>Pokemon Name{pokemon}</h2>
      <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300" 
      onClick={addToList}
      >
        Add Pokemon
        </button>
      <form>
        <label htmlFor="pokemon">Pokemon Name: </label>
      <input onChange={(e)=> setPokemon(e.target.value)} type="text" id="pokemon" name="pokemon" value={pokemon}></input>
      </form>
    <div className='pokemons'>
        {
            team.map((value, index)=>{
                return <div key={index}>{value} </div>
              
            })
        }
    </div>
    </div>
  )
}

export default Counter
