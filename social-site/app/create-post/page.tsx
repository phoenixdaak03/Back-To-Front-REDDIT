'use client'
import React, { useState } from 'react';
import Link from 'next/link';


export default function CreatePost(){
    const [postTitle, setPostTitle] = useState('');
    const [postText, setPostText] = useState('');
    const [postedBy, setPostedBy] = useState('');

    async function createPost(title: string, text: string, postedBy: string){
        const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/create-post', {
            method: 'POST',
            body: JSON.stringify({
                title,
                text,
                postedBy,
                comments: []
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    
    return(
        <> 
        <div className='flex flex-col w-full h-screen items-center justify-center pb-25'>
            <h1 className='text-9xl font-bold'>Create Chattr</h1>
            <div className='flex flex-col w-full h-auto mt-10 items-center'>
                <input type="text" placeholder="Title" value={postTitle} onChange={(e) => {setPostTitle(e.target.value)}} className='px-1 text-3xl border border-1 border-gray-300 rounded-sm w-200'/>
                <textarea placeholder='Make some Chattr...' value={postText} onChange={(e) => {setPostText(e.target.value)}} className='px-1 text-xl my-3 border border-1 border-gray-300 rounded-sm w-200 h-50'></textarea>
                <input type="text" placeholder="Chattr's name..."  value={postedBy} onChange={(e) => {setPostedBy(e.target.value)}} className='px-1 text-3xl border border-1 border-gray-300 rounded-sm w-200'/>
                <Link href={'/home'}>
                    <button className='mt-5 bg-green-300 h-15 rounded-3xl w-auto px-5 transition ease-in-out duration-700 hover:bg-green-400 cursor-pointer text-2xl font-bold active:scale-90 disabled:bg-gray-300 disabled:text-gray-500 disbaled:cursor-not-allowed' onClick={(e) => {createPost(postTitle, postText, postedBy)}} disabled={!postedBy}>Submit Post</button>
                </Link>
                
            </div>
            
        </div>
        </>
    )
}