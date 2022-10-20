import { getLinks, createLink } from '../../../lib/db'

export default async function handler(req, res){
    if (req.method === 'GET'){
        const linksList = await getLinks();
        res.status(200).json(linksList)
    } else if (req.method === 'POST'){
        const linkUrl = req.body.linkUrl
        const slug = req.body.slug
        const newLink = await createLink(linkUrl, slug)
        res.status(200).json({newLink})
       
    }
}
