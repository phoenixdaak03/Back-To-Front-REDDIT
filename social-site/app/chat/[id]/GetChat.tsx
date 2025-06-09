'use client'
import Link from 'next/link';

type Post = {
    title: string,
    text: string,
}


export default function GetChat({ chat }: { chat: Post}){
    return(
        <>
            <div className='flex flex-col w-full justify-start items-start h-full aspect-square'>
                <div className='flex text-3xl font-extrabold m-5 pb-1 justify-center items-center bg-green-300 rounded-full h-15 w-15 transition duration-700 hover:bg-green-400 hover:scale-125 active:scale-100'>
                    <Link href={'/home'}>
                        <button className='cursor-pointer'>
                                ←
                        </button>
                    </Link>
                </div>
                <div className='border-b-1 border-b-gray-400 mx-20 w-auto h-auto'>
                    <div className='transition duration-1000 p-2'>
                        <div className='flex'>
                            <h2 className='text-4xl font-bold my-3'>{chat.title}</h2>
                        </div>
                        <p className='text-sm mb-2'>{chat.text}</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}