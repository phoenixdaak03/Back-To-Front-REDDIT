'use client'
import Link from 'next/link';
import { useState } from 'react'

type Comment = {
    text: string,
    postedBy: string
}


type Post = {
    _id: string,
    title: string,
    text: string,
    postedBy: string,
    upvotes: number,
    comments: Comment[]
}


export default function GetChat({ chat }: { chat: Post}){
    const [text, setText] = useState('');
    const [postedBy, setPostedBy] = useState('');
    const [upvotes, setUpVotes] = useState<number>(chat.upvotes);


    async function createComment(_id: string, text: string, postedBy: string){
        const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/comment/' + chat._id, {
            method: 'POST',
            body: JSON.stringify({
                _id,
                text,
                postedBy,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        setText('');
        setPostedBy('');
    }

    async function handUpovoteClick(_id: string){
        const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/upvote/' + _id, {
            method: 'POST',
            body: JSON.stringify({
                _id,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setUpVotes(prev => prev+1);

    }
    async function handleDownvoteClick(_id: string){
        const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/downvote/' + _id, {
            method: 'POST',
            body: JSON.stringify({
                _id,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        setUpVotes(prev => prev-1);

    }

    return(
        <>
            <div className='flex flex-col w-full justify-start items-start h-full aspect-square'>
                <div className='flex text-3xl font-extrabold mb-5 pb-1 justify-center items-center bg-green-300 rounded-full h-15 w-15 transition duration-700 hover:bg-green-400 hover:scale-125 active:scale-100'>
                    <Link href={'/home'}>
                        <button className='cursor-pointer'>
                                ←
                        </button>
                    </Link>
                </div>
                <div className='w-full h-auto'>
                    <div className='transition duration-1000 p-2'>
                        <div className='flex items-center space-x-5'>
                            <h2 className='text-4xl font-bold my-3'>{chat.title}</h2>
                            <p className='text-sm w-5'>{upvotes}</p>
                            <div className='flex space-x-1'>
                                <button className='text-sm bg-gray-300 w-7 rounded-full h-7 cursor-pointer transition duration-300 active:scale-90' onClick={(e) => {handUpovoteClick(chat._id)}}>↑</button>
                                <button className='text-sm bg-gray-300 w-7 rounded-full h-7 cursor-pointer transition duration-300 active:scale-90'onClick={(e) => {handleDownvoteClick(chat._id)}}>↓</button>
                            </div>
                            
                        </div>
                        <p className='text-sm text-justify'>{chat.text}</p>
                        <p className='mb-2 text-sm'>{chat.postedBy}</p>
                        <div className='border-b-1 border-b-gray-400 mx-20 my-5'></div>
                        
                        <div className='flex items-center'>
                            <h1 className='text-3xl font-bold mr-20'>Comments</h1>
                            <p className='text-sm'>Add Comment:</p>
                            <input type="text" placeholder='Commenter...' value={postedBy} onChange={(e) => {setPostedBy(e.target.value)}} className='text-sm w-25 ml-5 border-1 pl-1'/>
                            <input type="text" placeholder='Comment...' value={text} onChange={(e) => {setText(e.target.value)}} className='text-sm w-50 pl-1 border-t-1 border-r-1 border-b-1' />
                            <Link href={'/chat/' + chat._id}>
                                <button className='ml-2 bg-green-300 h-7 rounded-3xl w-auto px-2 transition ease-in-out duration-700 hover:bg-green-400 cursor-pointer text-sm font-bold active:scale-90 disabled:bg-gray-300 disabled:text-gray-500 disbaled:cursor-not-allowed' onClick={(e) => {createComment(chat._id, text, postedBy)}} disabled={!postedBy || !text}>Comment</button>
                            </Link>
                        </div>
                        {Array.isArray(chat.comments) && chat.comments.map(comment => (
                            <div key={comment.text} className='my-5 text-sm flex'>
                                <h1 className='font-bold mr-1'>{comment.postedBy}:</h1>
                                <p>{comment.text}</p>
                            </div>
                        ))}
                    </div>

                    
                </div>
                
                
            </div>
        </>
    )
}