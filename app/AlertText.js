'use client';

import { Button } from 'react-bootstrap';

export default function AlertText({text}) {
    return (
        <Button
            variant="primary"
            onClick={() => {
                alert("너님 왜 로그인 안함 ??")
                return false;
            }}
        >
            {text}
        </Button>
    );
}