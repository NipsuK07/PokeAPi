fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(responce => responce.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Virhe haettaessa:", error)
    });