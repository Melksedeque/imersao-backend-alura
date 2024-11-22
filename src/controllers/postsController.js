import fs from "fs";
import {getTodosPosts, postar} from "../models/postsModel.js";

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