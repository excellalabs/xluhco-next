import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../libs/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  // Update link Data
  const { shortKey, linkUrl, userId, id } = req.body;
  // Update the link with the given id
  await db.collection("links").updateOne(
    { _id: ObjectId(id) },
    {
      $set: {
        linkUrl,
        shortKey,
        userId
      },
    }
  );
  // Send a response
  res.status(200).json({
    data: await db.collection("links").findOne({ _id: ObjectId(id) }),
    message: "Link updated successfully",
  });
}