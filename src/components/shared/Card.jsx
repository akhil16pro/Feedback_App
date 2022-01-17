import PropTypes from 'prop-types'
import React from 'react';
function Card({children, invert, adClass}) {
  
    return (
        <div className={`card ${adClass} ${(invert === true)? 'invert' : '' }`}>{children}</div>
    )
}

Card.defaultProps = {
    invert : false
}

Card.propTypes = {
    children : PropTypes.node.isRequired,
    adClass : PropTypes.string,
    invert : PropTypes.bool
}
export default Card
