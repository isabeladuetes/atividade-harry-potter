import express from "express";

//Importar dados
import dados from "./src/data/dados.js";

//Puxei a variavel de dentro de dados
const { bruxos, casas, varinhas, animais, pocoes } = dados;

const serverPort = 3000;

const app = express();
app.use(express.json());

//Rota principal
app.get("/", (req,res) => {
    res.send("Vamos de Harry Potter");
});

//Rota dos Bruxos
app.get("/bruxos", (req, res) => {
    if (bruxos.length > 0) {
        res.status(200).json(bruxos);
    } else {
        res.status(404).json({
            mensagem: "Nenhum bruxo encontrado!"
        })
    }
});

//Rota dos Casas
app.get("/casas", (req, res) => {
    if (casas.length > 0) {
        res.status(200).json(casas);
    } else {
        res.status(404).json({
            mensagem: "Nenhuma casa encontrada!"
        })
    }
});

//Rota das Varinhas
app.get("/varinhas", (req, res) => {
    if (varinhas.length > 0) {
        res.status(200).json(varinhas);
    } else {
        res.status(404).json({
            mensagem: "Nenhuma varinha encontrada!"
        })
    }
});

//Rota dos Animais
app.get("/animais", (req, res) => {
    if (animais.length > 0) {
        res.status(200).json(animais);
    } else {
        res.status(404).json({
            mensagem: "Nenhum animal encontrado!"
        })
    }
});

//Rota das Poções
app.get("/pocoes", (req, res) => {
    if (pocoes.length > 0) {
        res.status(200).json(pocoes);
    } else {
        res.status(404).json({
            mensagem: "Nenhuma poção encontrada!"
        })
    }
});

//Criar a rota do GetById - Varinha
app.get("/varinhas/:id", (req, res) => {
    let id = req.params.id;
    id = parseInt(id)
    const varinha = varinhas.find(v => v.id === id);

    if(varinha) {
        res.status(200).json(varinha);
    } else {
        res.status(404).json({
            mensagem: "Varinha não encontrada!"
        })
    }
});

//Criar a rota do GetById - Animais
app.get("/animais/:id", (req, res) => {
    let id = req.params.id;
    id = parseInt(id)
    const animal = animais.find(a => a.id === id);

    if(animal) {
        res.status(200).json(animal);
    } else {
        res.status(404).json({
            mensagem: "Animal não encontrado!"
        })
    }
});

//Criar a rota do GetById - Poçôes
app.get("/pocoes/:id", (req, res) => {
    let id = req.params.id;
    id = parseInt(id)
    const pocao = pocoes.find(p => p.id === id);

    if(pocao) {
        res.status(200).json(pocao);
    } else {
        res.status(404).json({
            mensagem: "Poção não encontrada!"
        })
    }
});

//Outra atividade
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
});

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
//Fim da outra atividade

//Iniciar Servidor
app.listen(serverPort, () => {
    console.log(`⚡ Servidor Hogwarts iniciado em: http://localhost:${serverPort}`);
    console.log(`🏰 Pronto para receber novos bruxos!`);
  });