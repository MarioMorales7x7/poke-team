import PokeAPI from "../api/PokeAPI"

const PokemonList = (props) => {
  const {pokemonData} = props
  
  const sendToTeam = async () => {
    console.log('sendToTeam button is working!')
    const pokeId = await PokeAPI.getAllPokemon()
    console.log(pokeId)
    for (let i = 0; i < pokeId.length; i++){
      console.log(pokeId[i])
    }
  }


  return (
    <div>
      <ul>
        {props.pokemonData.map((pokemon) => (
           <div key={pokemon.namePokemon}>
           <li key={pokemon.namePokemon}>
             {pokemon.namePokemon}
           </li>
           <img src={pokemon.spritePokemon}></img>
           <div>{pokemon.descriptionPokemon}</div>
           <button onClick={ sendToTeam }>Add to Team</button>
         </div>
        ))}
      </ul>
    </div>
  )
}

export default PokemonList;