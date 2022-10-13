import { createLink } from '../../lib/db'

export default async function handler(req, res) {
  const { linkUrl, slug } = req.body;
  const createdLink = await createLink(linkUrl, slug);
  res.status(200).json({
    data: { createdLink },
    message: "Link created successfully",
  });
}