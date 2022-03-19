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
                pokeNombre(pokeName);

                let pokeType = "";
                data.types.forEach(elemento => {
                    pokeType += ", " + elemento.type.name;
                });
                pokeType = pokeType.substring(2);
                pokeTipo(pokeType);

                let pokeHeigth = data.height;
                pokeAltura(pokeHeigth);

                let pokeWeight = data.weight;
                pokePeso(pokeWeight);

                let pokeHp = data.stats[0].base_stat;
                pokeSalud(pokeHp);

                let pokeAttack = data.stats[1].base_stat;
                pokeAtaque(pokeAttack);

                let pokeDefense = data.stats[2].base_stat;
                pokeDefensa(pokeDefense);

                let pokeSpecial_atack = data.stats[3].base_stat;
                pokeAtaque_especial(pokeSpecial_atack);

                let pokeSpecial_defense = data.stats[4].base_stat;
                pokeDefensa_especial(pokeSpecial_defense);

                let pokeSpeed = data.stats[5].base_stat;
                pokeVelocidad(pokeSpeed);
            } else {
                let pokeImg = "img/pokebola.png";
                pokeImagen(pokeImg);
                let pokeName = "--";
                pokeNombre(pokeName);
                let pokeType = "--";
                pokeTipo(pokeType);
                let pokeHeigth = "--";
                pokeAltura(pokeHeigth);
                let pokeWeight = "--";
                pokePeso(pokeWeight);
                let pokeHp = "--";
                pokeSalud(pokeHp);
                let pokeAttack = "--";
                pokeAtaque(pokeAttack);
                let pokeDefense = "--";
                pokeDefensa(pokeDefense);
                let pokeSpecial_atack = "--";
                pokeAtaque_especial(pokeSpecial_atack);
                let pokeSpecial_defense = "--";
                pokeDefensa_especial(pokeSpecial_defense);
                let pokeSpeed = "--";
                pokeVelocidad(pokeSpeed);
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

const pokeNombre = nombre => {
    const pokeDato = document.getElementById("pokeNombre");
    pokeDato.innerText = nombre;
};

const pokeTipo = tipo => {
    const pokeDato = document.getElementById("type");
    pokeDato.innerText = tipo;
};

const pokeAltura = altura => {
    const pokeDato = document.getElementById("heigth");
    pokeDato.innerText = altura;
};

const pokePeso = peso => {
    const pokeDato = document.getElementById("weight");
    pokeDato.innerText = peso;
};

const pokeSalud = salud => {
    const pokeDato = document.getElementById("hp");
    pokeDato.innerText = salud;
};

const pokeAtaque = ataque => {
    const pokeDato = document.getElementById("attack");
    pokeDato.innerText = ataque;
};

const pokeDefensa = defensa => {
    const pokeDato = document.getElementById("defense");
    pokeDato.innerText = defensa;
};

const pokeAtaque_especial = ataque_especial => {
    const pokeDato = document.getElementById("special-attack");
    pokeDato.innerText = ataque_especial;
};

const pokeDefensa_especial = defensa_especial => {
    const pokeDato = document.getElementById("special-defense");
    pokeDato.innerText = defensa_especial;
};

const pokeVelocidad = velocidad => {
    const pokeDato = document.getElementById("speed");
    pokeDato.innerText = velocidad;
};
