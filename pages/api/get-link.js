import { getLink } from '../../lib/db'

export default async function handler(req, res) {
  const { linkUrl, slug } = req.body;
  const link = await getLink(slug);
  res.status(200).json({
    data: { link },
    message: "Link loaded successfully",
  });
}