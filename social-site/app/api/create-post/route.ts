import { NextRequest } from "next/server";
import { connectToDB } from "@/app/api/db";

type Params = {
    title: string;
    text: string;
    postedBy: string;
    comments: [{
        text: string,
        postedBy: string
    }];
}


export async function POST(request: NextRequest){
    const { db } = await connectToDB();

    const data = await request.json();

    const title =  data.title;
    const text =  data.text;
    const postedBy = data.postedBy
    const comments = data.comments

    const post = await db.collection('posts').insertOne({
            "title": title,
            "text": text,
            "postedBy": postedBy,
            "comments": [],
            "upvotes": 0
        })

    const posts = await db.collection('posts').find().toArray();

    return new Response(JSON.stringify(posts), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}