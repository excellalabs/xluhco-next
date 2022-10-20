import { deleteLink } from '../../../lib/db'

export default async function handler(req, res){
    if (req.method === 'DELETE'){
        const {slug} = req.query
        const response = await deleteLink(slug);
        res.status(200).json(response)
    } else if (req.method === 'PUT'){
        // const linkUrl = req.body.linkUrl
        // const slug = req.body.slug
        // const newLink = await createLink(linkUrl, slug)
        // res.status(200).json({newLink})  
    }
}