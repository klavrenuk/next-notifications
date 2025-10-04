// src/app/api/fetch-notifications/route.ts
export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const notifType = searchParams.get('type');
    const targetId = searchParams.get('target');

    console.log('searchParams', searchParams)

    if (!notifType || !targetId) {
        return NextResponse.json(
            { error: 'Требуются параметры: type и target' },
            { status: 400 }
        );
    }

    const url = `https://test-api.krascatalog.ru/notifications/group/${notifType}/${targetId}`;

    try {
        const response = await axios.get(url, {
            params: {
                limit: 20,
                offset: 0,
            },
        });
        return NextResponse.json(response.data);
    } catch (error: any) {
        console.error('Ошибка при запросе к API:', error.message || error);
        return NextResponse.json(
            { error: 'Не удалось загрузить уведомления', url },
            { status: error.response?.status || 500 }
        );
    }
}