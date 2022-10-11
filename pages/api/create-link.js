import {createLink} from '../../lib/db'

export default async function handler(req, res) {
    const { linkUrl, userId} = req.body;
    await createLink(linkUrl, userId);
    res.status(200).json({
      data: {},
      message: "Link updated successfully",
    });
}