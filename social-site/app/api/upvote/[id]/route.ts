import { NextRequest } from "next/server";
import { connectToDB } from "@/app/api/db";
import { ObjectId } from "mongodb";


export async function POST(request: NextRequest){
    const { db } = await connectToDB();

    const data = await request.json();

    
    const postID = data._id



    const posts = await db.collection('posts').updateOne(
        { _id: new ObjectId(postID) },
        { $inc: { upvotes: 1 } } as any
    );

    return new Response(JSON.stringify(posts), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}