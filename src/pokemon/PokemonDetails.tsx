import { AppBar, Card, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonDetail from "./interfaces/PokemonDetail";
import { GetPokemonDetails } from "./services/getPokemonDetails";

interface PokemonDetailsProps {

}

type PokemonQueryParams = {
    name: string;
}

export const PokemonDetails: React.FC<PokemonDetailsProps> = () => {
    const {name} = useParams<PokemonQueryParams>();
    const [selectedPokemonDetails, setSelectedPokemonDetails] = useState< PokemonDetail | undefined>(undefined)

    useEffect(() => {
        if(!name) return;

        GetPokemonDetails(name).then((response) => setSelectedPokemonDetails(response));
    }, [name]);

    return(
        <div>
            <Container maxWidth="lg">
                    <Box mt={2}>
                        <img width='100%' height='auto' src={selectedPokemonDetails?.sprites.front_default} alt={selectedPokemonDetails?.name}></img>
                    </Box>
                    <Typography variant="h2">
                        {selectedPokemonDetails?.name.charAt(0).toUpperCase().concat(selectedPokemonDetails?.name.slice(1))}
                    </Typography>
                        {selectedPokemonDetails?.types.map((type) => 
                                <Typography>{type.type.name.charAt(0).toUpperCase().concat(type.type.name.slice(1))} </Typography>                      
                        )}
                        <Box display="flex" flexDirection="row">
                            <Typography>
                                Species: 
                            </Typography>
                            <Typography>
                            {selectedPokemonDetails?.species.name.charAt(0).toUpperCase().concat(selectedPokemonDetails?.species.name.slice(1))}
                            </Typography>
                        </Box>
                        <Box display="flex" flexDirection="row">
                            <Typography>
                                Height: 
                            </Typography>
                            <Typography>
                                {selectedPokemonDetails?.height}
                            </Typography>
                        </Box>
                        <Box display="flex" flexDirection="row">
                            <Typography>
                                Weight: 
                            </Typography>
                            <Typography>
                                {selectedPokemonDetails?.weight}
                            </Typography>
                        </Box>
                        <Typography>
                            Abilities:
                        </Typography>
                        {selectedPokemonDetails?.abilities.map((ability) => <Typography>{ability.ability.name.charAt(0).toUpperCase().concat(ability.ability.name.slice(1))}</Typography>)}
            </Container>
        </div>
    )
}