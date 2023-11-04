import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import LoginBtn from '@/app/LoginBtn';
import LogoutBtn from '@/app/LogoutBtn';

export default async function Edit(props) {
    const client = await connectDB;
    const db = client.db('forum');
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) });
    let session = await getServerSession(authOptions);
    return ( <
        div className = "wrap" >
        <
        div className = "header" >
        <
        div className = "header_center" >
        <
        Link href = { `/` } >
        <
        h1 > logo < /h1> <
        /Link> <
        /div> <
        /div> <
        div id = "gray_line" > < /div> <
        div className = "main" >
        <
        div className = "sidebar" >
        <
        div className = "sidebar_categories" >
        <
        div className = "sidebar_category LoginBtn hide" >
        <
        Link href = { `/login` } >
        <
        Button variant = "primary" >
        <
        span > 로그인 < /span> <
        /Button> <
        /Link> <
        /div>

        {
            session ? ( <
                div className = "sidebar_category logoutBtn" >
                <
                LogoutBtn / >
                <
                /div>
            ) : ( <
                div className = "sidebar_category SNSLoginBtn" >
                <
                LoginBtn / >
                <
                /div>
            )
        } <
        div className = "sidebar_category" >
        <
        Link href = { `/detail` } >
        <
        Button variant = "primary" >
        <
        span > 게시판 < /span> <
        /Button> <
        /Link> <
        /div> {
            session ? ( <
                div className = "sidebar_category" >
                <
                Link href = { `/detail` } >
                <
                Button variant = "primary" >
                <
                span > 공지사항 < /span> <
                /Button> <
                /Link> <
                /div>
            ) : ( <
                div className = "sidebar_category" >
                <
                AlertText text = "공지사항" / >
                <
                /div>
            )
        }

        {
            session ? ( <
                div className = "sidebar_category" >
                <
                Link href = { `/detail` } >
                <
                Button variant = "primary" >
                <
                span > 청소구역 < /span> <
                /Button> <
                /Link> <
                /div>
            ) : ( <
                div className = "sidebar_category" >
                <
                AlertText text = "청소구역" / >
                <
                /div>
            )
        }

        <
        /div> <
        /div> <
        div className = "p-20 page_into" >
        <
        h4 > 수정페이지 < /h4> <
        form action = "/api/post/edit"
        method = "POST" >
        제목 <
        input name = "title"
        defaultValue = { result.title }
        style = {
            { width: 800 } }
        /> <
        br / >
        내용 <
        input name = "content"
        defaultValue = { result.content }
        style = {
            { width: 800, height: 500 } }
        /> <
        br / >
        <
        input name = "_id"
        defaultValue = { result._id.toString() }
        className = "hide" / >
        <
        Button type = "submit"
        variant = "success" >
        작성 <
        /Button> <
        /form> <
        /div> <
        /div> <
        /div>
    );
}