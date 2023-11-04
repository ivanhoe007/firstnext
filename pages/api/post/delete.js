import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(요청, 응답) {
    if (요청.method == 'DELETE') {
        console.log(요청.body);
        const db = (await connectDB).db('forum');
        let result = await db.collection('post').deleteOne({ _id: new ObjectId(요청.body) });
        if (result.deletedCount == 1) {
            return 응답.status(200).json('삭제완료');
        } else if (result.deletedCount == 0) {
            return 응답.status(500).json('삭제안됨');
        }
    }
}
