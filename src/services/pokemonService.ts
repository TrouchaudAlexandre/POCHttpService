import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Pokemon, PokemonList} from "../entities/pokemon.type";
import {useHttpService} from "../http/httpService";

class PokemonService {
    public getAll(): Observable<PokemonList[]> {
        return useHttpService().get('/pokemon?limit=10').pipe(
            map(results => results.results as PokemonList[]),
        );
    }

    public get(id: string): Observable<Pokemon> {
        return useHttpService().getAndSavedInBrowser(`/pokemon/${id}`).pipe(
            map(pokemon => ({
                name: pokemon.name,
                order: pokemon.order,
                sprite: pokemon.sprites.front_default,
            }))
        );
    }
}

export const pokemonService = new PokemonService();
