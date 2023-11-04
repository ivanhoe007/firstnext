'use client';

import Link from 'next/link';

export default function ListItem({ result }) {
    return (
        <div>
            {result.map((a, i) => {
                return (
                    <div className="list-item" key={i}>
                        <Link prefetch={false} href={`/board/${result[i]._id.toString()}`} style={{ textDecoration: 'none', color: '#000' }}>
                            <h4>{result[i].title}</h4>
                        </Link>
                        <Link href={`/edit/${result[i]._id.toString()}`} style={{ textDecoration: 'none', color: '#000' }}>
                            🖊수정{'  '}
                        </Link>
                        <span
                            onClick={(e) => {
                                fetch('/api/post/delete', { method: 'DELETE', body: result[i]._id })
                                    .then((r) => r.json())
                                    .then(() => {
                                        e.target.parentElement.style.opacity = 0;
                                        setTimeout(() => {
                                            e.target.parentElement.style.display = 'none';
                                        }, 1000);
                                    });
                            }}
                        >
                            🗑삭제
                        </span>
                        <p>{result[i].content}</p>
                    </div>
                );
            })}
        </div>
    );
}
