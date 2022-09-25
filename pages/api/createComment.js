import { sanityClient } from "../../sanity"


export default async function handler(
    req,
    res
) {
    const { _id, name, email, comment } = JSON.parse(req.body)
    try {
        await sanityClient.create({
            _type: 'comment',
            post: {
                _type: 'reference',
                _ref: _id
            },
            name,
            email,
            comment
        })
    } catch (err) {
        return res.status(500).json({ message: "Couldn't submit comment ", err })
    }
    res.status(200).json({ message: "Comment submitted" })
}
