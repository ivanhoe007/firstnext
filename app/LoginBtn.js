'use client';

import { signIn } from 'next-auth/react';
import { Button } from 'react-bootstrap';

export default function LoginBtn() {
    return (
        <Button
            variant="primary"
            onClick={() => {
                signIn();
            }}
        >
            소셜 로그인
        </Button>
    );
}
