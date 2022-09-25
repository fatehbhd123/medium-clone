import { groq } from 'next-sanity'
import { sanityClient } from "../../sanity"

const feedQuery = groq`
*[_type == "post"  ]{
    _id,
   title,
   author->{
     name,
     image
   },
   description,
   mainImage,
   slug
  } | order(_createdAt desc)
`



export default async function handler(
    req,
    res
) {
    const posts = await sanityClient.fetch(feedQuery);
    res.status(200).json({ posts })
}
