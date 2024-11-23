import fs from "fs";
import {atualizar, getTodosPosts, postar} from "../models/postsModel.js";
import gerarDescricaoComGemini from "../services/geminiServices.js";

export async function listarPosts(req, res) {
    const posts = await getTodosPosts();
    res.status(200).json(posts);
}

export async function uploadImagem(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await postar(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.jpg`;
        fs.renameSync(req.file.path, imagemAtualizada);
        res.status(200).json(postCriado);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro" : "Falha na requisição"})
    }
}

export async function criarPost(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await postar(novoPost);
        res.status(200).json(postCriado);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro" : "Falha na requisição"})
    }
}

export async function atualizarPost(req, res) {
    const id = req.params.id;
    const urlImagem = `http://localhost:3000/${id}.jpg`;
    try {
        const imgBuffer = fs.readFileSync(`uploads/${id}.jpg`);
        const descricao = await gerarDescricaoComGemini(imgBuffer);
        const post = {
            imgUrl: urlImagem,
            descricao: descricao,
            alt: req.body.alt
        }
        const postAtualizado = await atualizar(id, post);
        res.status(200).json(postAtualizado);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro" : "Falha na requisição"})
    }
}