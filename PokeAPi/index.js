fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(responce => responce.json())
    .then(data => {
        console.log(data.name, " ID: ", data.id, " Korkeus: ", data.height, " Paino: ", data.weight );
        document.getElementById("PokemonName").innerText = data.name;
        document.getElementById("PokemonID").innerText = "ID: " + data.id;
        document.getElementById("PokemonType").innerText = "Tyyppi: " + data.types.map(typeInfo => typeInfo.type.name).join(", ");
        document.getElementById("PokemonAbilities").innerText = "Voimat: " + data.abilities.map(abilityInfo => abilityInfo.ability.name).join(", ");


    })
    .catch(error => {
        console.error("Virhe haettaessa:", error)
    });