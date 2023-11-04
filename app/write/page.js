import Link from 'next/link';
import { Button } from 'react-bootstrap';
import LoginBtn from '../LoginBtn';
import LogoutBtn from '../LogoutBtn';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function Write() {
    let session = await getServerSession(authOptions);
    return (
        <div className="wrap">
            <div className="header">
                <div className="header_center">
                    <Link href={`/`}>
                       <h1>logo</h1>
                    </Link>
                </div>
            </div>
            <div id="gray_line"></div>
            <div className="main">
                <div className="sidebar">
                    <div className="sidebar_categories">
                        <div className="sidebar_category LoginBtn hide">
                            <Link href={`/login`}>
                                <Button variant="primary">
                                    <span>로그인</span>
                                </Button>
                            </Link>
                        </div>
                        <div className="sidebar_category SNSLoginBtn">
                            <LoginBtn />
                        </div>
                        {session ? (
                            <div className="sidebar_category logoutBtn">
                                <LogoutBtn />
                            </div>
                        ) : (
                            <div className="sidebar_category logoutBtn hide">
                                <Button variant="primary">
                                    <span>로그아웃</span>
                                </Button>
                            </div>
                        )}
                        <div className="sidebar_category">
                            <Link href={`/detail`}>
                                <Button variant="primary">
                                    <span>게시판</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="p-20 page_into">
                    <h4>글 작성</h4>
                    <form action="/api/post/new" method="POST">
                        <input className="article" name="title" placeholder="글제목" />
                        <input className="article_content" name="content" placeholder="글내용" typeof='text' />
                        <input type="file" name="" id=""/>
                        <Button variant="success" type="submit">
                            작성
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
