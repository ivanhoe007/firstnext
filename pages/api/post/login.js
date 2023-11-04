import { connectDB } from '@/util/database';

export default async function handler(요청, 응답) {
    console.log(요청.body);
    if (요청.method == 'POST') {
        if (요청.body.perId == '') {
            return 응답.status(500).json('너 왜 아이디 입력 안하냐');
        } else if (요청.body.perPass == '') {
            return 응답.status(500).json('너 왜 비밀번호 입력 안하냐');
        }

        const client = await connectDB;
        const db = client.db('forum');
        let result = await db.collection('customer').find().toArray();
        console.log(응답.body);
        const response = result.map((a, i) => {
            if (요청.body.perId == result[i].perId && 요청.body.perPass == result[i].perPass) {
                return 응답.redirect(302, '/');
            } else {
                return 응답.status(500).json('아이디 또는 비밀번호 확인 요망');
            }
        });
    }
}
