import {
  users,
  products,
  createUser,
  getAllUsers,
  createProducts,
  getAllProducts,
  searchProductsByName,
} from "./database";
console.log(users);
console.log(products);

createUser("user03", "Zac Farro", "zacfarro@emo.com", "paramore");
console.table(getAllUsers());

createProducts(
  "prod003",
  "Pedalboard",
  3500.0,
  "The best of pedalboards",
  "https://images.unsplash.com/photo-1565052168411-f958235a7972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
);
console.table(getAllProducts());
console.table(searchProductsByName("pro mic"));