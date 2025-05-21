import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    const res = await fetch('https://dbapiservice.onrender.com/dbapis/v1/categories?extended=true');

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch categories' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: unknown) {
    let message = 'Unknown error';
    if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

