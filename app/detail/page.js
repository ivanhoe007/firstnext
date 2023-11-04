import { connectDB } from '@/util/database';
import ListItem from './ListItem';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import '../globals.css';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import LoginBtn from '@/app/LoginBtn';
import LogoutBtn from '@/app/LogoutBtn';

export default async function Detail() {
    const client = await connectDB;
    const db = client.db('forum');
    let result = await db.collection('post').find().toArray();
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
                        {session ? (
                            <div className="sidebar_category logoutBtn">
                                <LogoutBtn />
                            </div>
                        ) : (
                            <div className="sidebar_category SNSLoginBtn">
                                <LoginBtn />
                            </div>
                        )}
                        
                        <div className="sidebar_category">
                            <Link href={`/detail`}>
                                <Button variant="primary">
                                    <span>게시판</span>
                                </Button>
                            </Link>
                        </div>

                        {session ? (
                            <div className="sidebar_category">
                                <Link href={`/detail`}>
                                    <Button variant="primary">
                                        <span>공지사항</span>
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <div className="sidebar_category">
                                <AlertText text="공지사항" />
                            </div>
                        )}
                                                      
                        {session ? (
                            <div className="sidebar_category">
                                <Link href={`/detail`}>
                                    <Button variant="primary">
                                        <span>청소구역</span>
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <div className="sidebar_category">
                                <AlertText text="청소구역" />
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="detail">
                    <Link href={`/write`}>
                        <Button variant="success">게시글 작성</Button>
                    </Link>
                    <ListItem result={result} />
                </div>
            </div>
        </div>
    );
}
