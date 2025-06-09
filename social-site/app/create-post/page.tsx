'use client'
import React, { useState } from 'react';
import Link from 'next/link';


export default function CreatePost(){
    const [postTitle, setPostTitle] = useState('');
    const [postText, setPostText] = useState('');

    async function createPost(title: string, text: string){
        const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/create-post', {
            method: 'POST',
            body: JSON.stringify({
                title,
                text
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
                <textarea placeholder='Make some Chattr...' value={postText} onChange={(e) => {setPostText(e.target.value)}} className='px-1 text-xl mt-3 border border-1 border-gray-300 rounded-sm w-200 h-50'></textarea>
                <Link href={'/home'}>
                    <button className='mt-5 bg-green-300 h-15 rounded-3xl w-auto px-5 transition ease-in-out duration-700 hover:bg-green-400 cursor-pointer text-2xl font-bold active:scale-90' onClick={(e) => {createPost(postTitle, postText)}}>Submit Post</button>
                </Link>
                
            </div>
            
        </div>
        </>
    )
}