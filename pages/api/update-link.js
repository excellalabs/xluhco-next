import { updateLink } from '../../lib/db'

export default async function handler(req, res) {
  const { slug, linkUrl } = req.body;
  const updatedLink = await updateLink(slug, linkUrl);
  res.status(200).json({
    data: { updatedLink },
    message: "Link updated successfully",
  });
}