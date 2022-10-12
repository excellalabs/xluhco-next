import { deleteLink } from '../../lib/db'

export default async function handler(req, res) {
  const { shortId } = req.body;
  await deleteLink(shortId);
  res.status(200).json({
    data: {},
    message: "Link deleted successfully",
  });
}