import { Chip } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import PokemonDetail from "../../pokemon/interfaces/PokemonDetail";
import "./PokedexCard.css";

interface PokedexCardProps {
    pokemon: PokemonDetail;
}
/* const Card = styled.section`
    padding: 3em;
    background: papayawhip;
    border-radius: .5em;
` */


export const PokedexCard: React.FC<PokedexCardProps> = ( { pokemon } ) => {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/pokemon/${pokemon.name}`)
    }
    return(
    <div onClick={handleClick} className="pokemonCard">
        <img style={{objectFit: "fill", paddingTop:'5px'}}
        src={pokemon.sprites.front_default}
        alt={pokemon.name.charAt(0).toUpperCase().concat(pokemon.name.slice(1))}></img>
        <div> 
            <h2>{pokemon.name.charAt(0).toUpperCase().concat(pokemon.name.slice(1))}</h2>
        <div className="types">
            {pokemon.types.map((type) => <Chip label={type.type.name.charAt(0).toUpperCase().concat(type.type.name.slice(1))} className={type.type.name}
            style={{marginBottom:'5px'}}></Chip>)}</div>
         </div>
    </div>
)}
export default PokedexCard;