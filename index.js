const express = require("express"); // arquivos de bibliotecas instaladas primeiro 

const router = require("./router"); 

const app = express();
app.use(express.json());

app.use("/api",router); // sempre que tiver uma requisisao com /api ele vai entrar no arquivo router

app.listen(8080, () =>{
    console.log("App listen on http://localhost: 8080");
});