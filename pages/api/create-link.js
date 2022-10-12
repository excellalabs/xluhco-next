import { createLink } from '../../lib/db'

export default async function handler(req, res) {
  const { linkUrl, userId } = req.body;
  const createdLink = await createLink(linkUrl, userId);
  res.status(200).json({
    data: { createdLink },
    message: "Link created successfully",
  });
}