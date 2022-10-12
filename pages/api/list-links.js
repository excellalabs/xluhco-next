import { getLinks } from '../../lib/db'

export default async function handler(req, res) {
  const linksList = await getLinks();
  res.status(200).json({
    data: { linksList },
    message: "Links listed",
  });
}