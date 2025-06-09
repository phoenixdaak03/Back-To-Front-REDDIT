import { connectToDB } from '../../db';
import  { ObjectId } from 'mongodb';
import { NextRequest } from 'next/server';


export async function GET(request: NextRequest, { params }: { params: {id: string} }){
    const { db } = await connectToDB();
    const data = await params;
    const id = await new ObjectId(data.id)
    const post = await db.collection('posts').findOne({ _id: id });

    return new Response(JSON.stringify(post), {
        status: 200,
        headers:{
            'Content-Type': 'application/json'
        }
    })
}