import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://atlas:japan69teen@cluster0.vwcz5ar.mongodb.net/hero-tickets"
    );
    console.log("Conectado");
  } catch (error) {
    console.log(error, "Erro de conexão");
  }
}
