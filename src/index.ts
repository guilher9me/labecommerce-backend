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
import { error } from "console";
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

// Get All Users
app.get("/users", (req: Request, res: Response) => {
  try {
    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);

    if (res.statusCode === 200) {
      res.status(500);
    }
    res.send(error.message);
  }
});

// Get All Products
app.get("/products", (req: Request, res: Response) => {
  try {
    const name = req.query.name as string;

    if (name == undefined) {
      res.status(200).send(products);
    }

    if (name.length < 1) {
      res.status(400);
      throw new Error("Name precisa conter pelo menos um caractere");
    }
    const result = products.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );
    res.status(200).send(result);
  } catch (error: any) {
    console.log(error);

    if (res.statusCode === 200) {
      res.status(500);
    }
    res.send(error.message);
  }
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

// Create User

app.post("/users", (req: Request, res: Response) => {
  try {
    const id = req.body.id as string;
    const name = req.body.name as string;
    const email = req.body.email as string;
    const password = req.body.password as string;

    const result: string = createUser(id, name, email, password);

    const idIsUsed = users.find((user) => {
      return user.id === id;
    });

    if (idIsUsed) {
      res.status(400);
      throw new Error("Id já cadastrado!");
    }

    const emailIsUsed = users.find((user) => {
      return user.email === email;
    });

    if (emailIsUsed) {
      res.status(400);
      throw new Error("Email já cadastrado!");
    }

    if (typeof id !== "string") {
      throw new Error("'id' deve ser uma string");
    }
    if (id.length < 1) {
      throw new Error("'id' deve possuir no mínimo 1 caractere");
    }
    if (typeof name !== "string") {
      throw new Error("'name' deve ser uma string");
    }
    if (name.length < 1) {
      throw new Error("'name' deve possuir no mínimo 1 caractere");
    }
    if (typeof email !== "string") {
      throw new Error("'email' deve ser uma string");
    }
    if (email.length < 1) {
      throw new Error("'email' deve possuir no mínimo 1 caractere");
    }
    if (typeof password !== "string") {
      throw new Error("'password' deve ser uma string");
    }
    if (password.length < 1) {
      throw new Error("'password' deve possuir no mínimo 1 caractere");
    }

    res.status(201).send(result);
  } catch (error: any) {
    console.log(error);
    if (res.statusCode === 200) {
      res.status(500);
    }
    res.send(error.message);
  }
});

// Create Product

app.post("/products", (req: Request, res: Response) => {
  try {
    const id = req.body.id as string;
    const name = req.body.name as string;
    const price = req.body.price as number;
    const description = req.body.description as string;
    const imageUrl = req.body.imageUrl as string;

    const result: string = createProducts(
      id,
      name,
      price,
      description,
      imageUrl
    );

    const idIsUsed = products.find((product) => {
      return product.id === id;
    });

    if (idIsUsed) {
      res.status(400);
      throw new Error("Id já cadastrado!");
    }

    if (typeof id !== "string") {
      throw new Error("'id' deve ser uma string");
    }
    if (id.length < 1) {
      throw new Error("'id' deve possuir no mínimo 1 caractere");
    }
    if (typeof name !== "string") {
      throw new Error("'name' deve ser uma string");
    }
    if (name.length < 1) {
      throw new Error("'name' deve possuir no mínimo 1 caractere");
    }
    if (typeof price !== "number") {
      throw new Error("'price' deve ser um number");
    }
    if (price <= 0) {
      throw new Error("'price' deve ser maior que zero");
    }
    if (typeof description !== "string") {
      throw new Error("'description' deve ser uma string");
    }
    if (description.length < 1) {
      throw new Error("'description' deve possuir no mínimo 1 caractere");
    }
    if (typeof imageUrl !== "string") {
      throw new Error("'imageUrl' deve ser uma string");
    }
    if (imageUrl.length < 1) {
      throw new Error("'imageUrl' deve possuir no mínimo 1 caractere");
    }

    res.status(201).send(result);
  } catch (error: any) {
    console.log(error);
    if (res.statusCode === 200) {
      res.status(500);
    }
    res.send(error.message);
  }
});

//Delete User By Id
app.delete("/users/:id", (req: Request, res: Response) => {
  try {
    const idToDelete = req.params.id;

    const userExist = users.find((user) => {
      return user.id === idToDelete;
    });

    if (!userExist) {
      res.status(404);
      throw new Error("Id não encontrado!");
    }

    const userIndex = users.findIndex((user) => user.id === idToDelete);
    if (userIndex >= 0) {
      users.splice(userIndex, 1);
    }
    res.status(200).send("User apagado com sucesso");
  } catch (error: any) {
    console.log(error);
    res.send(error.message);
  }
});

//Delete Product By Id
app.delete("/products/:id", (req: Request, res: Response) => {
  try {
    const idToDelete = req.params.id;

    const productExist = products.find((product) => {
      return product.id === idToDelete;
    });

    if (!productExist) {
      res.status(404);
      throw new Error("Id não encontrado");
    }

    const productsIndex = products.findIndex(
      (product) => product.id === idToDelete
    );
    if (productsIndex >= 0) {
      products.splice(productsIndex, 1);
    }
    res.status(200).send("Produto apagado com sucesso");
  } catch (error: any) {
    console.log(error);
    res.send(error.message);
  }
});

//Edit Product
app.put("/products/:id", (req: Request, res: Response) => {
  try {
    const idToEdit = req.params.id;

    const product = products.find((product) => {
      return product.id === idToEdit;
    });

    if (!product) {
      res.status(404);
      throw new Error("Produto não encontrado");
    }

    const newId = req.body.id as string;
    const newName = req.body.name as string | undefined;
    const newPrice = req.body.price as number;
    const newDescription = req.body.description as string | undefined;
    const newImageUrl = req.body.imageUrl as string | undefined;

    if (newName !== undefined) {
      if (typeof newName !== "string") {
        res.status(400);
        throw new Error("'Nome' deve ser uma string");
      }
    }

    if (newDescription !== undefined) {
      if (typeof newDescription !== "string") {
        res.status(400);
        throw new Error("'Description' deve ser uma string");
      }
    }

    if (newImageUrl !== undefined) {
      if (typeof newImageUrl !== "string") {
        res.status(400);
        throw new Error("'ImageUrl' deve ser uma string");
      }
    }

    product.id = newId || product.id;
    product.name = newName || product.name;
    product.price = isNaN(newPrice) ? product.price : newPrice;
    product.description = newDescription || product.description;
    product.imageUrl = newImageUrl || product.imageUrl;

    res.status(200).send("Produto atualizado com sucesso");
  } catch (error: any) {
    console.log(error);
    res.send(error.message);
  }
});
