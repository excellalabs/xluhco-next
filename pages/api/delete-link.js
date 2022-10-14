import { deleteLink } from '../../lib/db'

export default async function handler(req, res) {
  const { slug } = req.body;
  await deleteLink(slug);
  res.status(200).json({
    data: {},
    message: "Link deleted successfully",
  });
}