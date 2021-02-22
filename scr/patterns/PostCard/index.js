import React from 'react';
import Link from 'next/link';

export default function PostCard({ GlobalStyle, articleKey, href, linkText, p, img}) {
    return (
        <div>
        <GlobalStyle />
        <article key={articleKey} className="postContainer__post" >
            <h2>
                <Link href={href}>
                    <a className="a">
                        {linkText}
                    </a>
                </Link>
            </h2>
            <p>
                {p}
            </p>
            <img src={img} />
        </article>
        </div>
    );
}

