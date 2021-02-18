import React from 'react';
import PropType from 'prop-types';


function Typography({ children }) {
    return (
        <p>
            {children}
        </p>
    );
}

Typography.propTypes = {
    children: PropType.node,
}

export default Typography