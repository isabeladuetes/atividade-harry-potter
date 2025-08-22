import express from "express";
import bruxos from "./src/data/bruxos.js";

const serverPort = 3000;

const app = express();
app.use(express.json());

//Rota principal
app.get("/", (req,res) => {
    res.send("Vamos de Harry Potter");
});

//Roata dos Bruxos
app.get("/bruxos", (req, res) => {
    res.json(bruxos);
});

//Criar a rota do GetByName
app.get("/bruxos/nome/:nome", (req, res) => {
    let nome = req.params.nome;
    nome = nome.toLocaleLowerCase();

    const nomesFiltrados = bruxos.filter(b => b.nome.toLocaleLowerCase().includes(nome));

    if(nomesFiltrados) {
        res.status(200).json(nomesFiltrados);
    } else {
        res.status(404).json({
            mensagem: "Bruxo(a) não encontrado!"
        })
    }
})

//Criar a rota do GetById
app.get("/bruxos/:id", (req, res) => {
    let id = req.params.id;
    id = parseInt(id)
    const bruxo = bruxos.find(b => b.id === id);

    if(bruxo) {
        res.status(200).json(bruxo);
    } else {
        res.status(404).json({
            mensagem: "Bruxo não encontrado!"
        })
    }
});

//Iniciar Servidor
app.listen(serverPort, () => {
    console.log(`⚡ Servidor Hogwarts iniciado em: http://localhost:${serverPort}`);
    console.log(`🏰 Pronto para receber novos bruxos!`);
  });