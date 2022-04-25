database name = 'pokemon_db' 

//CreateTeamPage.js/////////

import react, { useEffect, useState } from 'react';
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
    description: "That's a big fish"
  }
];




function CreateTeamPage(){

  // states
  const [pokemonData, setPokemonData] = useState()
  const [pokemonFlavorTextArr, setPokemonFlavorTextArr] = useState()

  const loadPokemon = async () => {
    const data = await PokeAPI.getAllPokemon()
    if (data) {
      console.log(data)
      return setPokemonData(data)
    }
    else{
      console.log('NO DATA FROM API')
    }
  }

  const loadFlavorText = async () => {
    for (let i = 0; i < pokemonData?.results.length; i++) {
      const url = pokemonData.results[i].url
      const pokemonVersion = await PokeAPI.getPokemonData(url)
      // console.log(pokemonVersion.species.url)
      const speciesUrl = pokemonVersion.species.url
      const pokemonSpeciesData = await PokeAPI.getPokemonData(speciesUrl)
      // console.log(pokemonSpeciesData)
      const flavorText = pokemonSpeciesData.flavor_text_entries[0].flavor_text
      setPokemonFlavorTextArr(flavorText)
    }
    //NOTE// async function with loop. make state value creating an array, each array has urls
  }


  useEffect(() => {
    loadPokemon()
    loadFlavorText()
  }, [])

  return (
    <div>
      <h1>Create Team Page</h1>
      <h3>Choose your Pokemon!</h3>
      <PokemonList pokemonData={pokemonData} pokemonFlavorTextArr={pokemonFlavorTextArr} />
    </div>
  );
}

export default CreateTeamPage;


//////PokemonList.js////////
import classes from "./PokemonList.module.css"
import PokeAPI from '../../api/PokeAPI';
import React, {useState, useEffect} from 'react';

const PokemonList =  (props) => {
  console.log(props)
const { pokemonData, pokemonFlavorTextArr } = props; //destructure an object (dont have to type 'props.xxxx.xxx' everytime)

  let pokeData = []

  for (let i = 0; i < pokemonData?.length; i++) {
    const pokeDataObj = {
      name: pokemonData[i].name,
      flavorText: pokemonFlavorTextArr[i]
    }
    pokeData.push(pokeDataObj)
  }

  return(
    <div>
      <ul className={classes.list}>
        {pokemonData?.results.map((pokemon)=>(
          <li key={pokemon.name}>
            {pokemon.name}
            <p>
              {pokemon.flavorText}
            </p>
            </li>
          ))}
      </ul>
      <ul className={classes.list}>
        {pokemonFlavorTextArr?.map((text)=>(
          <li key={text}>
            {text}
          </li>
          ))}
      </ul>
    </div>
  )
}

export default PokemonList;

