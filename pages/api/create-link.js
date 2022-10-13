import { createLink } from '../../lib/db'

export default async function handler(req, res) {
  const { linkUrl, shortId } = req.body;
  const createdLink = await createLink(linkUrl, shortId);
  res.status(200).json({
    data: { createdLink },
    message: "Link created successfully",
  });
}