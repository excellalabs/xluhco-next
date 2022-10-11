import {createLink} from '../../lib/db'

export default async function handler(req, res) {
    
    // const { db } = await connectToDatabase();
    // // Update link Data
    // const { shortKey, linkUrl, userId, id } = req.body;
    // await db.collection("links").updateOne(
    //   { _id: ObjectId(id) },
    //   {
    //     $set: {
    //       linkUrl,
    //       shortKey,
    //       userId
    //     },
    //   }
    // );
    // // Send a response
    createLink();
    res.status(200).json({
      data: await db.collection("links").findOne({ _id: ObjectId(id) }),
      message: "Link updated successfully",
    });
  }