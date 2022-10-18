import { createLink } from '../../lib/db'

export default async function handler(req, res) {
  const { linkUrl, slug } = req.body;
  const createdLink = await createLink(linkUrl, slug);
  res.redirect('/');
}