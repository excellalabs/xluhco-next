import { NextApiRequest, NextApiResponse } from "next";

export default async function getTestRequest(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: "API test for Xluh.co successful!" });
}