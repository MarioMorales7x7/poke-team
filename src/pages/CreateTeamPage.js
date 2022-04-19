import { useEffect } from 'react/cjs/react.production.min';
import PokeAPI from '../api/PokeAPI';
import PokemonList from '../components/pokemons/PokemonList'

const SAMPLE_POKEMON = [
  {
    id: 'p1',
    poke_name: 'Cyndaquil',
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png",
    type: 'Fire',
    description: 'It is timid, and\nalways curls it­\nself up in a ball.\fIf attacked, it\nflares up its back\nfor protection.'
  },
  {
    id: 'p2',
    poke_name: 'Totodile',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/158.png',
    type: 'Water',
    description: "Its well-developed\njaws are powerful\nand capable of\fcrushing anything.\nEven its trainer\nmust be careful."
  },
  {
    id: 'p3',
    poke_name: 'Chikorita',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png',
    type: 'Grass',
    description: "A sweet aroma\ngently wafts from\nthe leaf on its\fhead. It is docile\nand loves to soak\nup the sun's rays."
  },
  {
    id: 'p4',
    poke_name: 'Kyogre',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/382.png',
    type: 'Water',
    description: "That's a big fuckin fish"
  }
];




function CreateTeamPage(){

  // states
  const [pokemonData, setPokemonData] = useState([])

  const loadPokemon = async () => {
    const data = await PokeAPI.getAllPokemon()
    if (data) {
      console.log(data)
      setPokemonData(data)
    }
  }

  useEffect(() => {
    loadPokemon()
  }, [])

  return (
    <div>
      <h1>Create Team Page</h1>
      <h3>Choose your Pokemon!</h3>
      <PokemonList pokemons={pokemonData} />
    </div>
  );
}

export default CreateTeamPage;