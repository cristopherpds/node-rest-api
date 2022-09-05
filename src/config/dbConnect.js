import mongoose from "mongoose";

mongoose.connect("mongodb+srv://cristopherpds:root@cluster0.jtzak8b.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;