fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
    .then(responce => responce.json())
    .then(data => {
        // console.log(data.name, " ID: ", data.id, " Korkeus: ", data.height, " Paino: ", data.weight);
        const img = document.getElementById("PokemonImage");
        img.src = data.sprites.other["official-artwork"].front_default;
        document.getElementById("PokemonName").innerText = capitalizeFirstLetter(data.name);
        const pokemonName = data.name
        const displayName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
        searchInput.value = pokemonName;

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        function spaceBetweenWords(string) {
            return string.replace(/-/g, ' ');
        }

    

        document.getElementById("PokemonID").innerText = "ID: " + data.id;

        document.getElementById("PokemonType").innerText = "Type: " + data.types.map(typeInfo => typeInfo.type.name).join(", ");

        document.getElementById("PokemonAbilities").innerText = spaceBetweenWords("Ability: " + data.abilities.map(abilityInfo => abilityInfo.ability.name).join(", "));
    })
    .catch(error => {
        console.error("Virhe haettaessa:", error)
    });