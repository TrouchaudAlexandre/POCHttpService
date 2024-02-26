import {Observable} from "rxjs";
import httpService from "../http/httpService";
import {map} from "rxjs/operators";
import {Pokemon, PokemonList} from "../entities/pokemon.type";

class PokemonService {
    public getAll(): Observable<PokemonList[]> {
        return httpService.getAndSavedInBrowser('/pokemon?limit=10').pipe(
            map(results => results.results as PokemonList[]),
        );
    }

    public get(id: string): Observable<Pokemon> {
        return httpService.getAndSavedInBrowser(`/pokemon/${id}`).pipe(
            map(pokemon => ({
                name: pokemon.name,
                order: pokemon.order,
                sprite: pokemon.sprites.front_default,
            }))
        );
    }
}

export const pokemonService = new PokemonService();