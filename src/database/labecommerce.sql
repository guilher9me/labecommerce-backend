-- Active: 1689009334166@@127.0.0.1@3306
CREATE TABLE users (
  id TEXT PRIMARY KEY UNIQUE NOT NULL,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at TEXT NOT NULL
);

INSERT INTO users (id, name, email, password, created_at)
VALUES
('user1', 'Hayley', 'hayley@emo.com', 'paramore', DATE('now')),
('user2', 'Taylor', 'taylor@emo.com', 'paramore1', DATE('now')),
('user3', 'Zac', 'zac@emo.com', 'paramore2', DATE('now'));


CREATE TABLE products (
  id TEXT PRIMARY KEY UNIQUE NOT NULL,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL
);

INSERT INTO products (id, name, price, description, image_url)
VALUES
('prod1', 'Boneco de vudu', 170, 'Bonequinhos de vudu', 'https://i.pinimg.com/564x/dd/c3/c7/ddc3c72d26e7416d0c32897a677c8c2c.jpg'),
('prod2', 'Vela preta', 10, 'Vela preta pra macumba', 'https://i.pinimg.com/564x/02/23/d3/0223d3c12ee883d6606dfd89b01acca6.jpg'),
('prod3', 'Galinha de pano', 80, 'Galinha de pano muito bonitinha', 'https://i.pinimg.com/564x/32/4a/43/324a43c8e9af3a45e08cd44b8e42afdc.jpg'),
('prod4', 'Musgo verde', 300, 'Herbácea perene', 'https://i.pinimg.com/564x/a3/b2/d8/a3b2d88ea3b79ccfd019d45711a8d815.jpg'),
('prod5', 'Rosa', 15, 'Rosa', 'https://i.pinimg.com/564x/24/c2/09/24c20950a57f01f51ca66f0c12aca32a.jpg');


-- RETORNA TODAS AS PESSOAS CADASTRADAS
SELECT * FROM users;
-- RETORNA TODOS OS PRODUTOS CADASTRADOS
SELECT * FROM products;
-- RETORNA SOMENTE OS PRODUTOS QUE POSSUEM EM SEU NOME O TERMO "INHA" NO MEIO DA PALAVRA
SELECT * FROM products
WHERE name LIKE '%inha%';
-- CRIA UMA NOVA PESSOA NA TABELA USERS
INSERT INTO users (id, name, email, password, created_at)
VALUES
('user4', 'Gui', 'gui@emo.com', 'paramore3', DATE('now'));
-- CRIA UM NOVO PRODUTO NA TABELA PRODUCTS
INSERT INTO products (id, name, price, description, image_url)
VALUES
('prod6', 'Coisa aleatória', 111, 'Alguma coisa aleatória', 'https://i.pinimg.com/564x/95/21/b1/9521b155169b9f53c294f1e38c86d87a.jpg');
-- DELETA UM USER POR ID
DELETE FROM users
WHERE id = 'user1';
-- DELETA UM PRODUTO POR ID
DELETE FROM products
WHERE id = 'prod1';
-- EDITA UM PRODUTO POR ID
UPDATE products
SET name = 'Tsc tsc'
WHERE id = 'prod6';

-- CRIAÇÃO DA TABELA DE PEDIDOS
CREATE TABLE purchases (
  id TEXT PRIMARY KEY UNIQUE NOT NULL,
  buyer TEXT NOT NULL,
  total_price REAL NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY (buyer) REFERENCES users(id)
);

-- CRIAÇÃO DE PRODUTOS PRA TABELA PURCHASE
INSERT INTO purchases (id, buyer, total_price, created_at)
VALUES ('purchase01', 'user2', 150, DATE('now')),
('purchase02', 'user3', 231, DATE('now'));

SELECT * FROM purchases
INNER JOIN users
ON purchases.buyer = users.id;