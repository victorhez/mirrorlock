import {NextResponse} from 'next/server'; export async function POST(req:Request){const b=await req.json();return NextResponse.json({id:crypto.randomUUID(),payload:b,public:true})}
