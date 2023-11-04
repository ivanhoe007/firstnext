import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import NaverProvider from 'next-auth/providers/naver';
import KakaoProvider from 'next-auth/providers/kakao';

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: '8a310a04856bdb546e3f',
            clientSecret: '3fd4703d5d94776884aea434d6e2ecbbb6299403',
        }),
        NaverProvider({
            clientId: 'De9YYm5gtDhOb_kiinOk',
            clientSecret: '8_PCex0Aye',
        }),
        KakaoProvider({
            clientId: '1e1fbc7664732d0cdfe519a266252865',
            clientSecret: 'qweasd123123',
        }),
    ],
    secret: '1q2w3e4__',
};
export default NextAuth(authOptions);
