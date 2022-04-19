import axios from 'axios'

const tryCatchFetch = async (axiosCall) => {
  try{
    const response = await axiosCall() //returns promise (tell us if we succeeded or failed), wait for promise to resolve
    return response.data
  }
  catch (e){
    console.error("tryCatchFetch ERROR:", e)
    return null
  }
}
//helper function, passing in a function 'axiosCall()'


const BASE_URL = "https://pokeapi.co/api/v2/"

const PokeAPI = { }

PokeAPI.getAllPokemon = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}pokemon?limit=150&offset=0`))
}

PokeAPI.getPokemonByName = async (name) => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}pokemon/${name}`))
}

export default PokeAPI;