# Projet Vue 3 + RxJS avec l'API Pokémon

Ce projet illustre l'intégration de RxJS dans une application Vue 3 pour consommer des données de manière asynchrone via l'API publique Pokémon. Une "librairie" HTTP personnalisée a été développée pour encapsuler la gestion de la communication avec le backend, utilisant les Observables RxJS pour une gestion efficace des flux de données asynchrones.

## Objectifs

- Démontrer l'intégration de RxJS avec Vue 3 pour le traitement asynchrone des données.
- Afficher des informations sur les Pokémon via l'API publique Pokémon, soulignant l'efficacité des Observables pour gérer des requêtes HTTP.
- Introduire une "librairie" HTTP personnalisée pour centraliser et simplifier la communication avec le backend.

## Librairie HTTP

La librairie HTTP du projet encapsule la logique des appels réseau, fournissant une interface cohérente pour effectuer des requêtes HTTP.


## Technologies Utilisées

- **Vue 3** : Un framework progressif pour construire des interfaces utilisateur.
- **RxJS** : Une bibliothèque pour composer des programmes asynchrones et basés sur les événements en utilisant des séquences observables.
- **Axios** : Un client HTTP basé sur les promesses pour le navigateur et node.js, utilisé pour faire des requêtes HTTP.
- **Vite** : Un outil de build moderne qui offre une expérience de développement plus rapide grâce au rechargement à chaud et à une configuration minimale.
- **API Pokémon** : Une API publique gratuite qui fournit des données détaillées sur les Pokémon.

## Installation

Pour installer le projet, suivez ces étapes :

```bash
git clone https://github.com/TrouchaudAlexandre/POCHttpService.git
cd POCHttpService
npm install
```

## Lancement de l'Application

Pour lancer l'application en mode développement, exécutez :

```bash
npm run dev
```

Cela démarrera le serveur de développement Vite.

## Fonctionnalités

- **Liste de Pokémon** : Affiche une liste de Pokémon avec leur nom et image en utilisant l'API Pokémon.
- **Détails du Pokémon** : En cliquant sur un Pokémon, l'utilisateur peut voir plus de détails comme le type, les statistiques et les mouvements.