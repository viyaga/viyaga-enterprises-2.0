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

        console.log({ body });

        const createdAIProducts = await Promise.all(
            body.map(async (product) => {
                product.thumbnail = "683e42baeacb159ea1c829c1"

                return payload.create({
                    collection: 'products',
                    data: product,
                })
            })
        )

        return NextResponse.json({ success: true, created: createdAIProducts })
    } catch (error) {
        console.error('Bulk create error:', error)
        return NextResponse.json(
            { success: false, error: (error as Error).message },
            { status: 500 }
        )
    }
}