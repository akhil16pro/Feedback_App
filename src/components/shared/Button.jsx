import PropTypes from 'prop-types'
import React  from 'react';

function Button({children , adClass,type, isDisabled}) {
    return (
        <button type={type} disabled={isDisabled} className={`more-btn ${adClass}`}>
            {children}
        </button>
    )
} 

Button.defaultProps = {
    adClass : '',
    type : 'button',
    isDisabled : false
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    adClass: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool

}

export default Button
