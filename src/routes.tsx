import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Pokedex } from './pokedex/Pokedex';
import { PokemonDetails } from './pokemon/PokemonDetails';
import { Team } from './team/team';

interface RoutesProps {

}

export const PageRoutes: React.FC<RoutesProps> = () => {
  return (
    <Routes>
      <Route path='/pokemon/:name' element={<PokemonDetails />}>
      </Route>
      <Route path='/' element={<Pokedex />}>
      </Route>
      <Route path='/teams' element={<Team></Team>}> 
      </Route>
    </Routes>
  );
}
export default PageRoutes;