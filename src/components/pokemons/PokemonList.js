import PokemonItem from "./PokemonItem";
import classes from "./PokemonList.module.css"
function PokemonList(props){
  return(
   <ul className={classes.list}>
     {props.pokemons.map((pokemon)=>(
      <PokemonItem 
        pokemon.name

        key={pokemon.id}
        image={pokemon.image}
        poke_name={pokemon.poke_name}
        type={pokemon.type}
        description={pokemon.description}
      />
      ))}
   </ul>
  )
}

export default PokemonList;