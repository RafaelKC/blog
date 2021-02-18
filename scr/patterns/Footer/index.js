import React from 'react';
import PropTypes from 'prop-types';

function Footer({ title }) {
    return (
        <footer>
            This is the footer
        </footer>
    );
}

Footer.propTypes = {
    children: PropTypes.node,
}

export default Footer;