import PropTypes from 'prop-types';
import React from 'react';

function Header({ children, className }) {
    return(
        <header className={className}>
            {children}
        </header>
    );
}

Header.propTypes = {
    children: PropTypes.node,
}

export default Header;