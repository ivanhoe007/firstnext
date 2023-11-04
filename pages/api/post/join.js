import { connectDB } from '@/util/database';

export default async function handler(요청, 응답) {
    console.log(요청.body);
    if (요청.method == 'POST') {
        if (요청.body.perId == '') {
            return 응답.status(500).json('너 왜 아이디 입력 안하냐');
        } else if (요청.body.perPass1 == '') {
            return 응답.status(500).json('너 왜 비밀번호 입력 안하냐');
        } else if (요청.body.perPass1 != 요청.body.perPass2) {
            return 응답.status(500).json('너 왜 비밀번호 두개 다르게 입력하냐');
        }
        const client = await connectDB;
        const db = client.db('forum');
        let result = await db.collection('customer').insertOne(요청.body);
        return 응답.redirect(302, '/');
    }
}
