import { TUsers, TProducts } from "./types";

//data e hora atual/região
let data = new Date();

// O data.valueOf() vai retornar a data em milissegundos, entao precisa converter o GMT também em milissegundos: data.getTimezoneOffset() * 60000
let newDate = new Date(data.valueOf() - data.getTimezoneOffset() * 60000);

export const users: TUsers[] = [
  {
    id: "user01",
    name: "Hayley Williams",
    email: "hayleywilliams@emo.com",
    password: "paramore",
    createdAt: newDate.toISOString(),
  },
  {
    id: "user02",
    name: "Taylor York",
    email: "tayloryork@emo.com",
    password: "paramore",
    createdAt: newDate.toISOString(),
  },
];

export const products: TProducts[] = [
  {
    id: "prod001",
    name: "PRO Mic",
    price: 3500.0,
    description: "The best microphone",
    imageUrl:
      "https://images.unsplash.com/photo-1485579149621-3123dd979885?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
  },
  {
    id: "prod002",
    name: "Guitar",
    price: 5000.0,
    description: "The best guitar",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1664194584355-25196f114804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
];
