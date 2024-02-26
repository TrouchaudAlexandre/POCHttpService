<script setup lang="ts">
import {pokemonService} from "../services/pokemonService";
import {usePokemon} from "../composables/pokemon";
import {onMounted, ref} from "vue";
import {Pokemon, PokemonList} from "../entities/pokemon.type";
import {tap} from "rxjs/operators";

const {getIdForUrl} = usePokemon();

const {pokemon} = defineProps<{
  pokemon: PokemonList,
}>();

const pokemonDetails = ref<Pokemon>();
const loading = ref<boolean>(false);

onMounted(() => {
  initializeData();
});

function initializeData(): void {
  loading.value = true;
  const pokemonId = getIdForUrl(pokemon.url);
  pokemonService.get(pokemonId).pipe(
      tap(() => loading.value = false),
  ).subscribe(pokemonResult => pokemonDetails.value = pokemonResult);
}
</script>

<template>
  <div class="pokemon-card">
    <div v-if="loading && pokemonDetails == null" class="loader">Chargement...</div>

    <div v-else>
      <img :src="pokemonDetails?.sprite" alt="Sprite de Pokémon" class="pokemon-image"/>
      <div class="pokemon-info">
        <span class="pokemon-name">{{ pokemonDetails?.name }}</span>
        <span class="pokemon-order">#{{ pokemonDetails?.order }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pokemon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 200px;
  margin: auto;
  text-align: center;
  height: 200px;
}

.pokemon-image {
  width: 100%;
  display: block;
}

.pokemon-info {
  padding: 10px;
}

.pokemon-name {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.pokemon-order {
  font-size: 14px;
  color: #666;
}

.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 20px;
  color: #999;
}
</style>
