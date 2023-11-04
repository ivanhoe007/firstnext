import Link from 'next/link';
import { Button } from 'react-bootstrap';

export default function Join() {
    return (
        <div className="wrap">
            <div className="header">
                <div className="header_center">
                    <Link href={`/`}>
                        <img src="https://school.use.go.kr/hosts/sinjeong-m/M01/logo.png" />
                    </Link>
                </div>
            </div>
            <div id="gray_line"></div>
            <div className="main">
                <div className="sidebar">
                    <div className="sidebar_categories">
                        <div className="sidebar_category">
                            <Button variant="primary">
                                <span>로그인</span>
                            </Button>
                        </div>
                        <div className="sidebar_category hide">
                            <Button variant="primary">
                                <span>로그아웃</span>
                            </Button>
                        </div>
                        <div className="sidebar_category">
                            <Link href={`/detail`}>
                                <Button variant="primary">
                                    <span>게시판</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="main_content page_into">
                    <h1>처음이신가요?</h1>
                    <form action={`/api/post/join`} method="POST" class="join">
                        <input className="joinInput" type="text" name="perId" placeholder="아이디를 입력해주세요" />
                        <input className="joinInput" type="password" name="perPass1" placeholder="비밀번호를 입력해주세요" />
                        <input className="joinInput" type="password" name="perPass2" placeholder="비밀번호를 다시 입력해주세요" />
                        <Button type="submit" variant="success" id="new_user">
                            회원가입 하기
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
