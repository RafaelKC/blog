import React from 'react';
import PropTypes from 'prop-types';

function Footer({ children, className }) {
    return (
        <footer className={className}>
            {children}
        </footer>
    );
}

Footer.propTypes = {
    children: PropTypes.node,
}

export default Footer;