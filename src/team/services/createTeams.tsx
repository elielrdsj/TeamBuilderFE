import React, { useState } from "react";
import axios from "axios";
import { GetPokemonDetails } from "../../pokemon/services/getPokemonDetails";
import { GetPokemonDetailsId } from "../../pokemon/services/getPokemonDetailsId";
import { stringify } from "querystring";

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
const [body, setBody] = useState('')

export async function postTeam (ids: number[]) {
    const endpoint = 'http://localhost:4000';

    const response = await axios.post<PokemonTeamInterface>(endpoint, body);

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