import { connectToDatabase } from "../../libs/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  // Take user input
  const { shortKey, linkUrl, userId } = req.body;
  // Insert a document into the collection
  const response = db.collection("links").insertOne({
    shortKey,
    linkUrl,
    userId,
    createdAt: new Date(),
  });
  // Send a response
  res.status(200).json({
    data: await db.collection("links").findOne({ id: response.insertedId }),
    message: "Link added successfully",
  });
}