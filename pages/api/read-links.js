import { connectToDatabase } from "../../libs/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  // Send all the links
  const links = await db.collection("links").find({}).toArray();
  res.status(200).json(links);
}