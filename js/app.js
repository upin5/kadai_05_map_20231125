// alert(1);
const data = {
    hito: "もりた",
    age: "34",
    hako: ["1", "2", "3"],
};

console.log(data);

const pokemonNum = 30;

const fetchPokemons = async () => {
    for(let i = 1; i  <= pokemonNum; i++){
        await getPokemon(i);
    } 
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
    let pokemonName = "";

    if(pokemon.id === 1){
        pokemonName = "フシギダネ";
    
    }else if(pokemon.id === 2){
        pokemonName = "フシギソウ";
    
    }else if(pokemon.id === 3){
        pokemonName = "フシギバナ";
    
    }else if(pokemon.id === 4){
        pokemonName = "ヒトカゲ";
    
    }else if(pokemon.id === 5){
        pokemonName = "リザード";
    
    }else if(pokemon.id === 6){
        pokemonName = "リザードン";
    
    }else if(pokemon.id === 7){
        pokemonName = "ゼニガメ";
    
    }else if(pokemon.id === 8){
        pokemonName = "カメール";
    
    }else if(pokemon.id === 9){
        pokemonName = "カメックス";
    
    }else if(pokemon.id === 10){
        pokemonName = "キャタピー";
    
    }else if(pokemon.id === 11){
        pokemonName = "トランセル";

    }else if(pokemon.id === 12){
        pokemonName = "バタフリー";
    
    }else if(pokemon.id === 13){
        pokemonName = "ビードル";
    
    }else if(pokemon.id === 14){
        pokemonName = "コクーン";

    }else if(pokemon.id === 15){
        pokemonName = "スピアー";

    }else if(pokemon.id === 16){
        pokemonName = "ポッポ";

    }else if(pokemon.id === 17){
        pokemonName = "ピジョン";

    }else if(pokemon.id === 18){
        pokemonName = "ピジョット";
    
    }else if(pokemon.id === 19){
        pokemonName = "コラッタ";

    }else if(pokemon.id === 20){
        pokemonName = "ラッタ";

    }else if(pokemon.id === 21){
        pokemonName = "オニスズメ";

    }else if(pokemon.id === 22){
        pokemonName = "オニドリル";

    }else if(pokemon.id === 23){
        pokemonName = "アーボ";

    }else if(pokemon.id === 24){
        pokemonName = "アーボック";

    }else if(pokemon.id === 25){
        pokemonName = "ピカチュウ";

    }else if(pokemon.id === 26){
        pokemonName = "ライチュウ";

    }else if(pokemon.id === 27){
        pokemonName = "サンド";

    }else if(pokemon.id === 28){
        pokemonName = "サンドパン";

    }else if(pokemon.id === 29){
        pokemonName = "ニドラン";
    
    }else if(pokemon.id === 30){
        pokemonName = "ニドリーナ";


    }else {
        pokemonName = pokemon.name;
    }

    const poke =`
    <div id="zukan">
     NO:${pokemon.id}
     洋名:${pokemon.name}
     大きさ:${pokemon.height}
     </div>
     <div id="gazou">
     <img src="${pokemon.sprites.front_default}"/>
     <img src="${pokemon.sprites.front_shiny}"/>
     </div>
     <div id="wamei">
     和名：${pokemonName}
     </div>
     `;
     $(".list").append(poke);
}

//``で囲うのはテンプレートリテラルという

//code

fetchPokemons();

$(document).ready(function(){
    $("#to_quiz").click(function(){
        window.location.href = "quiz.html";
    })
})


// １．フシギダネ
// ２．フシギソウ
// ３．フシギバナ
// ４．ヒトカゲ
// ５．リザード
// ６．リザードン
// ７．ゼニガメ
// ８．カメール
// ９．カメックス
// １０．キャタピー
// １１．トランセル
// １２．バタフリー
// １３．ビードル
// １４．コクーン
// １５．スピアー
// １６．ポッポ
// １７．ピジョン
// １８．ピジョット
// １９．コラッタ
// ２０．ラッタ
// ２１．オニスズメ
// ２２．オニドリル
// ２３．アーボ
// ２４．アーボック
// ２５．ピカチュウ
// ２６．ライチュウ
// ２７．サンド
// ２８．サンドパン
// ２９．ニドラン
// ３０．ニドリーナ

