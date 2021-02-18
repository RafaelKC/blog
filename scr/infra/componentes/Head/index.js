import NextHead from "next/head";
import React from 'react';
import PropTypes from 'prop-types';

function Head({ title }) {
    return (
        <NextHead>
            <title>
                {title}
            </title>
        </NextHead>
    );
}

Head.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Head;