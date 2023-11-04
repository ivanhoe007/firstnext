//다이나믹 라우트 문법으로 페이지별 폴더를 여러개 만들지 않고 하나만 만들어서 작성이 가능함

import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import LoginBtn from '@/app/LoginBtn';
import LogoutBtn from '@/app/LogoutBtn';

export default async function Detail(props) {
    const client = await connectDB;
    const db = client.db('forum');
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) });
    let session = await getServerSession(authOptions);
    console.log(props.params.id);
    let loginComplete
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
                <div className="page_into">
                    <h4>상세페이지</h4>
                    <h4>{result.title}</h4>
                    <p>{result.content}</p>
                    <img>{result.image}</img>
                </div>
            </div>
        </div>
    );
}
