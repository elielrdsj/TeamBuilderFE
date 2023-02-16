import { PokemonListInterface } from './listPokemons';
import axios from 'axios';
import PokemonDetail from '../interfaces/PokemonDetail';


export async function GetPokemonDetailsId(id: number): Promise<PokemonDetail> {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${id}`;
    
    const response = await axios.get<PokemonDetail>(endpoint);

    return response.data;
}