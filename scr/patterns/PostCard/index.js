import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import Head from 'next/head';
import PropTypes from 'prop-types';


function PostCard({href, rel, small, p, children }) {
    return (
        <PostCardWrapper>
            <header>
                <Title><Link rel={rel} href={href}>
                    <a>
                    {children}
                    </a>
                </Link></Title>
                <small>{p} - {small}</small>
            </header>
        </PostCardWrapper>
    );
}

Head.propTypes = {
    children: PropTypes.node,
}

export default PostCard;

const PostCardWrapper = styled.article`
    padding: ${({ theme }) => theme.spacing[3]}px;
    padding-left: 750px;
    padding-right: 160px;
    padding-top: 16px;
    padding-button: 160px;
`;

const fontSize = 40;

const Title = styled.h3`

    font-size: ${fontSize}px;
    
    a {
        color: inherit;
        text-decoration: none;
        color: ${({ theme }) => {
            return theme.colors.primary;
        }};
        &:hover {
            color: #255000
        }
    }
    `;