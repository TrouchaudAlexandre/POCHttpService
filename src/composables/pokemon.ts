interface PokemonComposable {
    getIdForUrl: (url: string) => string;
}

export function usePokemon(): PokemonComposable {
    function getIdForUrl(url: string): string {
        const parts = url.trim().split('/');
        return parts[parts.length - 2];
    }

    return {getIdForUrl};
}