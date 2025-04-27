import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const token = searchParams.get('token');
  const path = searchParams.get('path');
  const tag  = searchParams.get('tag');

  if (token !== process.env.PAYLOAD_SECRET) {
    return NextResponse.json(
      { message: 'Invalid token' },
      { status: 403 }
    );
  }

  try {
    if (tag) {
      // Revalidate by tag
      revalidateTag(tag);
      return NextResponse.json(
        { message: `Revalidated by tag: ${tag}` },
        { status: 200 }
      );
    } else if (path) {
      // Revalidate by path
      revalidatePath(path);
      return NextResponse.json(
        { message: `Revalidated by path: ${path}` },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: 'Missing either tag or path for revalidation' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error during revalidation:', error);
    return NextResponse.json(
      { message: 'Error during revalidation' },
      { status: 500 }
    );
  }
}
