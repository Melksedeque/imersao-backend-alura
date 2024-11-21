import express from "express";
import routes from "./src/routes/postsRoutes.js";

// const posts = [
//     {
//         id: 1,
//         descricao: "Uma foto",
//         imagem: "https://placecats.com/millie/300/150"
//     },
//     {
//         id: 2,
//         descricao: "Um lindo pôr do sol",
//         imagem: "https://picsum.photos/seed/picsum/300/200"
//     },
//     {
//         id: 3,
//         descricao: "Minha receita favorita de bolo",
//         imagem: "https://loremflickr.com/300/200/food"
//     },
//     {
//         id: 4,
//         descricao: "Um gatinho adorável",
//         imagem: "https://placekitten.com/300/200"
//     },
//     {
//         id: 5,
//         descricao: "Paisagem montanhosa",
//         imagem: "https://source.unsplash.com/random/300x200/?mountain"
//     },
//     {
//         id: 6,
//         descricao: "Citação inspiradora",
//         imagem: "https://picsum.photos/seed/quote/300/200"
//     },
//     {
//         id: 7,
//         descricao: "Um desenho que fiz",
//         imagem: "https://placeimg.com/300/200/art"
//     }
// ];

const app = express();
routes(app);

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

// function buscarPostPorID(id) {
//     return posts.findIndex((post) => {
//         return post.id === Number(id);
//     });
// }

// app.get("/posts/:id", (req, res) => {
//     const index = buscarPostPorID(req.params.id);
//     res.status(200).json(posts[index]);
// });