import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../libs/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  // Delete link ID
  const { id } = req.body;
  // Delete the link with the given id
  const response = await db
    .collection("links")
    .deleteOne({ _id: ObjectId(id) });
  // Send a response
  res.status(200).json({
    data: await db.collection("links").findOne({ _id: ObjectId(id) }),
    message: "Link deleted successfully",
  });
}