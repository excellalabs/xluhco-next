import { updateLink } from '../../lib/db'

export default async function handler(req, res) {
  const { shortId, linkUrl } = req.body;
  const updatedLink = await updateLink(shortId, linkUrl);
  res.status(200).json({
    data: { updatedLink },
    message: "Link updated successfully",
  });
}