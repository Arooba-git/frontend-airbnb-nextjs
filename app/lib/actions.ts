'use server';

import { cookies } from "next/headers";

export async function handleLogin(user_id: string, access_token: string, refresh_token: string) {
    cookies().set('session_user_id', user_id, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
    });

    cookies().set('session_access_token', access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 60,
        path: '/'
    });

    cookies().set('session_refresh_token', refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
    });
}

export async function handleRefreshToken() {
    let refreshToken = await getRefreshToken();

    const token = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/auth/token/refresh/`, {
        method: 'POST',
        body: JSON.stringify(refreshToken),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then((response) => response.json())
        .then((json) => {
            if (json?.access) {
                cookies().set('session_access_token', json?.access, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    maxAge: 60 * 60 * 60,
                    path: '/'
                });


                return json.access
            } else {
                resetAuthCookies();
            }
        })
        .catch((error) => {
            console.log(error);
            resetAuthCookies()
        });

    return token;
}

export async function resetAuthCookies() {
    cookies().set('session_user_id', '');
    cookies().set('session_access_token', '');
    cookies().set('session_refresh_token', '');
}

export async function getUserId() {
    return cookies().get('session_user_id')?.value;
}

export async function getAccessToken(){
    let accessToken = cookies().get('session_access_token')?.value;

    if (!accessToken) {
        accessToken = await handleRefreshToken();
    }

    return accessToken;
}

export async function getRefreshToken() {
    return cookies().get('session_refresh_token')?.value;
}
