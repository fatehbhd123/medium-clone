import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { urlFor } from '../sanity'
function Posts({ posts }) {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 p-2 md:p-8 '>
            {posts && posts.map((post, i) => {
                console.log(post.slug)
                return (
                    <Link key={post._id} href={`/post/${post.slug.current}`}>
                        <div className='group cursor-pointer border rounded-lg overflow-hidden' >
                            <img className='w-full object-cover h-60 group-hover:scale-105 duration-200 transition ease-in-out' src={urlFor(post.mainImage).url()} layout='fill' alt={post.slug} />
                            <div className='flex justify-between p-5 bg-white'>
                                <div>
                                    <p className='font-bold text-lg'>{post.title}</p>
                                    <p>{post.description} By {post.author.name}</p>
                                </div>
                                <img src={urlFor(post.author.image).url()} alt="Author"
                                    className='h-12 w-12 rounded-full'
                                />
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Posts
