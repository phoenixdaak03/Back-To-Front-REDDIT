import Posts from './Posts'
export const dynamic = 'force-dynamic';

export default async function HomePage(){
    const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/popular', {
        cache: 'no-cache',
    });

    const posts = await response.json();

    return(
        <div className='mx-10 mt-5 w-full'>
            <h3 className='text-7xl font-extrabold mb-3'>Popular</h3>
            <Posts posts={posts}/>
        </div>
        
    )

}