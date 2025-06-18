import GetChat from "./GetChat";
export const dynamic = 'force-dynamic';

export default async function Chat({ params }: { params: {id: string}}){

    const data = await params;

    const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/get-chat/' + data.id, {
        cache: 'no-cache',
    })
    
    const info = await response.json();

    return(
        <div className="mx-10 mt-5 w-full">
            <GetChat chat={info}/>
        </div>
        
    )
}