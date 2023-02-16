import React from "react";
import axios from "axios";
import { GetPokemonDetails } from "../../pokemon/services/getPokemonDetails";
import { GetPokemonDetailsId } from "../../pokemon/services/getPokemonDetailsId";

export interface Poketeam {
    teamId: number;
    pokeIds: number[];
}
export interface PokemonTeamInterface {
    count: number;
    next: null | string;
    previous: null | string;
    results: Poketeam[]
}

export async function getTeam () {
    const endpoint = 'http://localhost:4000';

    const response = await axios.get<PokemonTeamInterface>(endpoint);

    const promiseArr = response.data.results.map(( {pokeIds}) => {
        for (var cont=0; cont<=pokeIds.length-1; cont++) {
            GetPokemonDetailsId(pokeIds[cont])
        }
    })
   
    const resultsPromise = await Promise.all(promiseArr)

    return {
        ...response.data,
        results: resultsPromise
    }
}