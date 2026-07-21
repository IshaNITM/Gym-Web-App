

import mongoose from "mongoose";

export async function connectDB(uri) {
  const mongoUri = uri || process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error("MONGODB_URI environment variable is missing");
  }

  mongoose.set("strictQuery", true);
  await mongoose.connect(mongoUri, {
    maxPoolSize: 50,
  });

  console.log("✅ MongoDB Connected");
}
export function isConnected() {
  return mongoose.connection.readyState === 1;
}