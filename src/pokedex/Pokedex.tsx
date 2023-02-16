import React, { useState } from "react";
import { listPokemon, PokemonListInterface } from "../pokemon/services/listPokemons";
import {  Box, CircularProgress, Container,  Grid} from "@mui/material";
import PokedexCard from "./components/PokedexCard";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

interface PokedexProps {
    
}


export const Pokedex: React.FC<PokedexProps> = () => {

    const { data, isLoading } = useQuery(`listPokemon`, listPokemon)
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();
    function handleClick() {
    }

    return(
        <div>
            <Container className="container">
                {!isLoading? ( <>
                <div className="searchBar">
                    <input type="text"
                    placeholder="Search..."
                    className="busca"
                    onChange={(event) => {
                        setSearchTerm(event.target.value)
                    }}
                    style={{marginTop:"2px", width:"60%"}}>
                        
                    </input>
                    <button onClick={handleClick}> Monte seu time já! </button>
                </div>
                <Box mt={10}>
                    <Grid container spacing={2}>
                        {data?.results.map((pokemon) => (
                             <>
                                {pokemon.name.includes(searchTerm)? 
                                <Grid item xs={6} lg={3}>
                                    <PokedexCard pokemon={pokemon} />
                                </Grid> : ''
                                }
                            </>
                        ))}
                    </Grid>
                </Box>
                </>
                ) : (<div><CircularProgress /></div>)}
            </Container>
        </div>
    )
}