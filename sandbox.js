const { async } = require("@firebase/util");
const crud = require("./crud"); //local  para fazer testes

// async function salvarDado(){
//     const savedData = await crud.save("pessoas","4GfSOj9GX27MjQlfspLj",{nome:"Matheus",sobrenome:"Franzener",idade:17}); // se a funcao tiver await devemos colocar asny na frente
//     console.log(savedData);
// }

// salvarDado();

async function buscarDados(){
    const dados = await crud.get("pessoas");
    console.log(dados);
}

async function buscarDadoId(){
    const dados = await crud.getById("pessoas","4GfSOj9GX27MjQlfspLj");
    console.log(dados);
}

async function deletar(){
    const dados = await crud.remove("pessoas","4GfSOj9GX27MjQlfspLj");
    console.log(dados);
}

deletar();
