'use client'
import { useState } from 'react';
import Link from 'next/link';

type Post = {
    _id: string;
    title: string;
    text: string;
    postedBy: string;
    upvotes: any;
}

export default function Posts({ posts }: {posts: Post[]}){
    const [postsList, setPosts] = useState(posts);

    return(
            <div className='flex flex-col w-full'>
                {postsList.map(post => (
                    <div key={post._id} className=''>
                        <div className='transition duration-500 hover:bg-gray-200 hover:scale-101 active:scale-100 rounded-lg my-5 p-2'>
                            <Link href={'/chat/' + post._id}>
                                <div className='flex items-center mb-3 space-x-2'>
                                    <h3 className='text-2xl font-bold'>{post.title}</h3>
                                    <p className='text-sm'>{post.upvotes}</p>
                                    
                                </div>
                                <p className='text-sm text-justify'>{post.text.slice(0, 1000)}...</p>
                                <p className='text-xs mt-3 text-gray-400'>Posted by: {post.postedBy}</p>
                            </Link>
                        </div>
                        
                        <div className='flex justify-center items-center border-b-1 mx-10'></div>
                        
                    </div>
                )).reverse()}
            </div>
    )
}