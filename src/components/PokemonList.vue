<script setup lang="ts">
  import {pokemonService} from "../services/pokemonService";
  import {onMounted, ref} from "vue";
  import PokemonCard from "./PokemonCard.vue";
  import {PokemonList} from "../entities/pokemon.type";
  import {tap} from "rxjs/operators";

  const pokemons = ref<PokemonList[]>([]);
  const loading = ref<boolean>(false);

  onMounted(() => {
    initializePokemonList();
  });

  function initializePokemonList(): void {
    loading.value = true;
    pokemonService.getAll().pipe(
     tap(() => loading.value = false),
    ).subscribe(pokemonResults => pokemons.value = pokemonResults);
  }
</script>

<template>
  <section class="pokemon-list">
    <div v-if="loading" class="loader">Chargement de la liste des Pokémon...</div>

    <article v-else v-for="pokemon in pokemons" :key="pokemon.id">
      <PokemonCard :pokemon="pokemon" />
    </article>
  </section>
</template>


<style scoped>
.pokemon-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.loader {
  width: 100%;
  text-align: center;
  margin: 20px 0;
  font-size: 20px;
  color: #999;
}
</style>
