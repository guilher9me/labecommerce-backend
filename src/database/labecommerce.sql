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

SELECT * FROM products