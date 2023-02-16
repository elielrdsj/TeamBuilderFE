import { PokemonDetail } from './../interfaces/PokemonDetail';
import axios from 'axios';
import { GetPokemonDetails } from './getPokemonDetails';

export interface ListPokemonsInterface {
    count: number;
    next: null | string;
    previous: null | string;
    results: PokemonDetail[]
}

export interface PokemonListInterface {
    name: string;
    url: string;
}

export async function listPokemon(): Promise<ListPokemonsInterface> {
    var aux: number = 1008;

    const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${aux}`;
    
    const response = await axios.get<ListPokemonsInterface>(endpoint);

    const promiseArr = response.data.results.map(( { name }) => GetPokemonDetails(name));

    const resultsPromise = await Promise.all(promiseArr)

    return {
        ...response.data,
        results: resultsPromise
    }
}