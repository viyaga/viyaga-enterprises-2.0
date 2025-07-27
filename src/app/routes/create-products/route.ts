import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { NextResponse } from 'next/server'

export const POST = async (req: Request) => {
  const payload = await getPayload({ config: configPromise })

  try {
    const body = await req.json()

    if (!Array.isArray(body)) {
      return NextResponse.json({ success: false, error: 'Expected an array of products' }, { status: 400 })
    }

    console.log({body});
    
    const createdProducts = await Promise.all(
      body.map(async (product) => {
        

        return payload.create({
          collection: 'products',
          data: product,
        })
      })
    )

    return NextResponse.json({ success: true, created: createdProducts })
  } catch (error) {
    console.error('Bulk create error:', error)
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    )
  }
}