import express from "express";
import bruxos from "./src/data/bruxos.js";

const serverPort = 3000;

const app = express();
app.use(express.json());

//Rota principal
app.get("/", (req,res) => {
    res.send("Vamos de Harry Potter");
})

//Roata dos Bruxos
app.get("/bruxos", (req, res) => {
    res.json(bruxos);
});

//Iniciar Servidor
app.listen(serverPort, () => {
    console.log(`⚡ Servidor Hogwarts iniciado em: http://localhost:${serverPort}`);
    console.log(`🏰 Pronto para receber novos bruxos!`);
  });