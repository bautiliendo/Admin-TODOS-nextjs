import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

  return NextResponse.json({
    HOLA: 'MUNDO',
  })
}

export async function POST(request: Request) { 

  return NextResponse.json({
    HOLA: 'MUNDO',
  })
}