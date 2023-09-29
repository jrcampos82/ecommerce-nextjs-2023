import { connectDB } from '@/configs/dbConfig';
import { NextRequest, NextResponse } from 'next/server';

connectDB();

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, email, password } = await req.json();
    return NextResponse.json({
      success: true,
      message: 'user created!',
      data: { name, email, password },
    });
  } catch (error) {}
}
