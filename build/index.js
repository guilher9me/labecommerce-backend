"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
console.log(database_1.users);
console.log(database_1.products);
(0, database_1.createUser)("user03", "Zac Farro", "zacfarro@emo.com", "paramore");
console.table((0, database_1.getAllUsers)());
(0, database_1.createProducts)("prod003", "Pedalboard", 3500.0, "The best of pedalboards", "https://images.unsplash.com/photo-1565052168411-f958235a7972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80");
console.table((0, database_1.getAllProducts)());
console.table((0, database_1.searchProductsByName)("pro mic"));
//# sourceMappingURL=index.js.map