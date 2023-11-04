'use client';

import { signOut } from 'next-auth/react';
import { Button } from 'react-bootstrap';

export default function LogoutBtn() {
    return (
        <Button
            href={`/`}
            variant="primary"
            onClick={() => {
                signOut();
            }}
            style={{"width" : 180 + "px", 
                    "height" : 50 + "px", 
                    "vertical-align" : "middle",
                    "padding" : 6 + "px " + 12 + "px"}}>
            로그아웃
        </Button>
    );
}