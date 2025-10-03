import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get('https://test-api.krascatalog.ru/notifications', {
      params: {
        limit: 10
      }
    });

    return NextResponse.json(response.data);
    
  } catch (error: any) {
    console.error(error.message);
    
    return NextResponse.json(
      { error: 'Не удалось загрузить уведомления' },
      { status: 500 }
    );
  }
}