

const pokemonNum = 30;

const fetchRandomPokemons = async () => {
   const randomId = Math.floor(Math.random() * pokemonNum) + 1;
        await getPokemon(randomId);
    };

   

//code
const getPokemon = async (id) => {
    const url =`https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    // console.log(res,"resの中身");
    const pokemon = await res.json();
    console.log(pokemon);
    createPokemon(pokemon);
    //関数型 処理を分ける
    //async 同期処理
    //await 重要処理を保障、処理が終わるまで次の処理に行かない fetch データ持ってくる
    //json jsで使える形にコンバート
    //res レスポンス通称
}



function createPokemon(pokemon){
    // let pokemonName = "";

    const poke =`
    <div id="set">
    <div id="zukan">
     NO:${pokemon.id}
     大きさ:${pokemon.height}
     </div>
     <div id="gazou">
     <img src="${pokemon.sprites.front_default}"/>
     <img src="${pokemon.sprites.front_shiny}"/>
     </div>
     <div id="wamei">
     </div>
     </div>
     `;
     $(".list").append(poke);
}
//``で囲うのはテンプレートリテラルという


//code

    fetchRandomPokemons();

     
   
     