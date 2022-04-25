import { useEffect, useState } from 'react';
import PokeAPI from '../api/PokeAPI';
import PokemonList from '../components/PokemonList';

function CreateTeamPage(props){
  
  // states
  const [pokemonData, setPokemonData] = useState([])
  
  //event handler
  const loadPokemon = async () => {
    const filteredPokemonData = await PokeAPI.getAllPokemon()
      // set a data variable, wait for load pokemon to load...then call API here.
      console.log(filteredPokemonData)
      // console.log(data)
      //if data within API call exists then return the values of that data and set it as the current value.
       setPokemonData(filteredPokemonData)
  }

// effects
  useEffect(() => {
    loadPokemon()
  }, [props.username])
  
            
  return (
    <div>
      <h1>Create Team Page</h1>
      <h3>Choose your Pokemon!</h3>
      <PokemonList pokemonData={pokemonData} />
    </div>
  );
}
export default CreateTeamPage;