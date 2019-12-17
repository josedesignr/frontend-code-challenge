import { Component, OnInit } from "@angular/core";


const URL_PATH =
  "https://gist.githubusercontent.com/bar0191/fae6084225b608f25e98b733864a102b/raw/dea83ea9cf4a8a6022bfc89a8ae8df5ab05b6dcc/pokemon.json";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  title = "react-code-challenge";

  allPokemon = [];
  pokemonListResult = [];
  constructor() {}

  ngOnInit() {
    this.getAllPokemon();
  }

  getAllPokemon() {
    fetch(URL_PATH).then(res => res.json())
    .then((data) => {
      this.allPokemon = data;
      this.pokemonListResult = data;
    })
    .catch(err => { throw err });
  }

  searchPokemon( search:string ) {
    if (search) {
      let pokemonArr = [];
      search = search.toLowerCase();

      for (let pokemon of this.allPokemon ) {
        let pokeName = pokemon.Name.toLowerCase();

        if (pokeName.indexOf( search ) >= 0) {
          pokemonArr.push(pokemon)
        }
      }
      this.pokemonListResult = pokemonArr.slice(0, 4);
    }
    else {
      this.pokemonListResult = this.allPokemon;
    }
  }
}
