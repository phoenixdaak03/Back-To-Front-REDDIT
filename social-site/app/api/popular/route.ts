import { connectToDB } from '../db';

export async function GET(){
    const { db } = await connectToDB();
    const posts = await db.collection('posts').find().sort({ upvotes: 1 }).toArray();

    return new Response(JSON.stringify(posts), {
        status: 200,
        headers:{
            'Content-Type': 'application/json'
        }
    })
}