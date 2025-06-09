import Link from 'next/link';
import Image from 'next/image';

export default function NavBar(){
    return(
        <nav className='fixed top-0 left-0 bg-white'>
            <div className='border-b-1 border-b-gray-400 h-20 w-screen flex items-center'>
                <ul className='flex justify-between items-center w-full mx-5'>
                    <li className=''>
                        <Link href='/home' className='flex items-center font-extrabold text-2xl tracking-tight'>
                            <Image src={'/chattrLogo.png'} alt='Chattr Logo' width={70} height={60}></Image>
                            <p>Chattr</p>
                        </Link>
                    </li>
                    <li className=''>
                        <input type="text" placeholder='🔍 Search Chattr' className='bg-gray-200 w-150 h-10 rounded-3xl pl-5 transition duration-700 hover:bg-gray-300'/>
                    </li>
                    <div className='flex justify-between space-x-4 text-sm font-semibold'>
                        <li>
                            <Link href={"/get-app"}>
                                <button className='bg-gray-200 h-full rounded-3xl w-full px-5 transition duration-700 hover:bg-gray-300 cursor-pointer'>📲 Get App</button>
                            </Link>
                        </li>
                        <li>
                            <Link rel="stylesheet" href="/log-in">
                                <button className='bg-green-300 h-10 rounded-3xl w-auto px-5 transition duration-700 hover:bg-green-400 cursor-pointer'>Log In</button>
                            </Link>
                        </li>
                    </div>
                    
                </ul>
            </div>
        </nav>
    )
}