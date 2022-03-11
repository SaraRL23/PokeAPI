const pokeURL = 'https://pokeapi.co/api/v2/pokemon';
const numMaxPokemon = 151; // número de poquemons que vamos a utilizar.
const gallery$$ = document.querySelector(".gallery");


function getPokemons() {
    for (let index = 1; index < numMaxPokemon; index++) {
        buscarPokemon(index)
    }
    
}
function buscarPokemon(index) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
        .then((res) => res.json())
        .then((resParsedToJson) => {
            console.log(resParsedToJson);
            printCards(resParsedToJson);
        })

}
const printCards=(card)=> {
    const figure$$ = document.createElement("figure");
    const title$$ = document.createElement("h2");
    const image$$ = document.createElement("img");
    const type$$ = document.createElement("p");
    const type2$$ = document.createElement("p");
    title$$.textContent = card.name;
    image$$.src = card.sprites.other['official-artwork'].front_default;
    type$$.textContent=card.weight + ' Kg';
    type2$$.textContent=card.types.map((item)=>item.type.name);
    figure$$.appendChild(title$$);
    figure$$.appendChild(image$$);
    figure$$.appendChild(type$$);
    figure$$.appendChild(type2$$);
    gallery$$.appendChild(figure$$);
    
}
getPokemons()