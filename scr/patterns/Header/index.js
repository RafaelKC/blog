import PropTypes from 'prop-types';
import React from 'react';

function Header({ children }) {
    return(
        <header>
            This is the Header
        </header>
    );
}

Header.propTypes = {
    children: PropTypes.node,
}

export default Header;