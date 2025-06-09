import Link from 'next/link';

export default function SideNavBar() {
    return (
        <nav className="fixed left-0 flex border-r-1 border-r-gray-400 w-75 justify-left h-screen bg-white">
            <ul className='text-sm font-semibold flex flex-col items-center w-full'>
                <li>
                    <button>
                        <Link href={'/home'}>
                            <div className='w-60 h-10 flex items-center mt-3 rounded-xl pl-5 transition duration-700 hover:bg-gray-300'>
                                <p>🏠 Home</p>
                            </div>
                        </Link>
                    </button>
                </li>
                <li>
                    <button>
                        <Link href={'/popular'}>
                            <div className='w-60 h-10 flex items-center rounded-xl px-5 transition duration-700 hover:bg-gray-300'>
                                <p>🌟 Popular</p>
                            </div>
                        </Link>
                    </button>
                </li>
                <li>
                    <button>
                        <Link href={'/chattrBot'}>
                            <div className='w-60 h-10 flex items-center rounded-xl px-5 transition duration-700 hover:bg-gray-300'>
                                <p>🤖 Chattr Bot</p>
                            </div>
                        </Link>
                    </button>

                </li>
                <li className='my-5'>
                    <button>
                        <Link href={'/create-post'}>
                            <div className='w-60 h-10 border border-1 border-green-400 flex items-center rounded-xl px-5 transition duration-1000 hover:bg-green-400'>
                                <p>± Create Post</p>
                            </div>
                        </Link>
                    </button>

                </li>
            </ul>
        </nav>
    )
}