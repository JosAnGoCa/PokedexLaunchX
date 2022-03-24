const fetchPokemon = () => {
    const pokename = document.getElementById("pokeName");
    let pokeInput = pokename.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url)
        .then(res => {
            if (res.status != 200) {
                pokeImagen("img/pokebola.png");
            } else {
                return res.json();
            }
        })
        .then(data => {
            if (data) {
                let pokeImg = data.sprites.front_default;
                pokeImagen(pokeImg);

                let pokeName = data.name;
                pokeContenido(pokeName, "pokeNombre");

                let pokeType = "";
                data.types.forEach(elemento => {
                    pokeType += ", " + elemento.type.name;
                });
                pokeType = pokeType.substring(2);
                pokeContenido(pokeType, "type");

                let pokeHeigth = data.height;
                pokeContenido(pokeHeigth, "heigth");

                let pokeWeight = data.weight;
                pokeContenido(pokeWeight, "weight");

                let pokeHp = data.stats[0].base_stat;
                pokeContenido(pokeHp, "hp");

                let pokeAttack = data.stats[1].base_stat;
                pokeContenido(pokeAttack, "attack");

                let pokeDefense = data.stats[2].base_stat;
                pokeContenido(pokeDefense, "defense");

                let pokeSpecial_atack = data.stats[3].base_stat;
                pokeContenido(pokeSpecial_atack, "special-attack");

                let pokeSpecial_defense = data.stats[4].base_stat;
                pokeContenido(pokeSpecial_defense, "special-defense");

                let pokeSpeed = data.stats[5].base_stat;
                pokeContenido(pokeSpeed, "speed");
            } else {
                let pokeImg = "img/pokebola.png";
                pokeImagen(pokeImg);
                let pokeName = "--";
                pokeContenido(pokeName, "pokeNombre");
                let pokeType = "--";
                pokeContenido(pokeType, "type");
                let pokeHeigth = "--";
                pokeContenido(pokeHeigth, "heigth");
                let pokeWeight = "--";
                pokeContenido(pokeWeight, "weight");
                let pokeHp = "--";
                pokeContenido(pokeHp, "hp");
                let pokeAttack = "--";
                pokeContenido(pokeAttack, "attack");
                let pokeDefense = "--";
                pokeContenido(pokeDefense, "defense");
                let pokeSpecial_atack = "--";
                pokeContenido(pokeSpecial_atack, "special-attack");
                let pokeSpecial_defense = "--";
                pokeContenido(pokeSpecial_defense, "special-defense");
                let pokeSpeed = "--";
                pokeContenido(pokeSpeed, "speed");
            }
        });
};

function buscarPokemon(e) {
    tecla = true ? e.keyCode : false;
    if (tecla == 13) {
        fetchPokemon();
    }
}

const pokeImagen = imagen => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = imagen;
};

pokeContenido = (contenido, id) => {
    const pokeDato = document.getElementById(id);
    pokeDato.innerText = contenido;
};
