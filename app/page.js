import Link from 'next/link';
import { Button } from 'react-bootstrap';
import LoginBtn from './LoginBtn';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import LogoutBtn from './LogoutBtn';
import AlertText from './AlertText';

export default async function Home() {
    let session = await getServerSession(authOptions);
    console.log(session);
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

                        {session ? (
                            <div className="sidebar_category">
                              <Link href={`/detail`}>
                                    <Button variant="primary">
                                       <span>게시판</span>
                                    </Button>
                             </Link>
                            </div>
                        ) : (
                            <div className="sidebar_category">
                                    <AlertText text="게시판" />
                            </div>
                        )}
                        {/* <div className="sidebar_category logoutBtn hide">
                                <Button variant="primary">
                                    <span>로그아웃</span>
                                </Button>
                            </div> */}
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
                <div className="main_content">
                        <div className="info1">
                         <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MDdfNTIg%2FMDAxNjYyNTU3MTQ1Mzg1.AO3EV0yO7HdVxMLuTtYzSrLJI69nVl0NN3PJQrQoq6og.axOWhi6wy9dAU3qIciQl4hoqLNTDNlPXpVsKzVmG8Ikg.JPEG.renapark99%2FScreenshot%25A3%25DF20220905%25A3%25AD083017%25A3%25DFSchoolBell%25A3%25ADe.jpg&type=sc960_832'/>
                        </div>

                        <div className="info1">
                           <img src='https://m.fobworld.com/web/product/big/201805/249_shop1_498652.jpg'/>
                        </div>       
                </div>
            </div>
        </div>
    );
}
