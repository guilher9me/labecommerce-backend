import {
  users,
  products,
  createUser,
  getAllUsers,
  createProducts,
  getAllProducts,
  searchProductsByName,
} from "./database";

import express, { Request, Response } from "express";
import cors from "cors";
import { TProducts, TUsers } from "./types";
const app = express();

createUser("user03", "Zac Farro", "zacfarro@emo.com", "paramore");
// console.table(getAllUsers());

createProducts(
  "prod003",
  "Pedalboard",
  3500.0,
  "The best of pedalboards",
  "https://images.unsplash.com/photo-1565052168411-f958235a7972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
);
// console.table(getAllProducts());
// console.table(searchProductsByName("pro mic"));

app.use(express.json());
app.use(cors());
app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong!");
});

app.get("/users", (req: Request, res: Response) => {
  res.send(getAllUsers());
});

app.get("/products", (req: Request, res: Response) => {
  res.send(getAllProducts());
});

app.get("/product", (req: Request, res: Response) => {
  const nameToFind = req.query.name as string;

  if (nameToFind) {
    const result: TProducts[] = products.filter((product) =>
      product.name.toLowerCase().includes(nameToFind.toLowerCase())
    );
    res.status(200).send(result);
  } else {
    res.status(200).send(products);
  }
});

app.post("/users", (req: Request, res: Response) => {
  const id = req.body.id as string;
  const name = req.body.name as string;
  const email = req.body.email as string;
  const password = req.body.password as string;

  const result: string = createUser(id, name, email, password);
  res.status(201).send(result);
});

app.post("/products", (req: Request, res: Response) => {
  const id = req.body.id as string;
  const name = req.body.name as string;
  const price = req.body.price as number;
  const description = req.body.description as string;
  const imageUrl = req.body.imageUrl as string;

  const result: string = createProducts(id, name, price, description, imageUrl);
  res.status(201).send(result);
});
