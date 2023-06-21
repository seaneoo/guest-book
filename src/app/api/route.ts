import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(_request: Request) {
  const guests = await prisma.guest.findMany()
  return NextResponse.json({ guests }, { status: 200 })
}

export async function POST(request: Request) {
  const res: { name: string } = await request.json()
  if (!res.name)
    return NextResponse.json(
      { error: 'property `name` is required' },
      { status: 400 }
    )
  try {
    const guest = await prisma.guest.create({ data: { name: res.name } })
    return NextResponse.json(guest, { status: 201 })
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 })
  }
}
