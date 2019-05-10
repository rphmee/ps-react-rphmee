import React from 'react';
import PropTypes from 'prop-types';

const bottom = {
    left: '50%',
    transform: 'translate(-50%,0%)'
}

const top = {
    left: '50%',
    transform: 'translate(-50%,0%)'
}

const left = {
    top: '0%',
    transform: 'translate(-100%, 0%)'
}

const right = {
    top: '50%',
    transform: 'translate(50%, -50%)'
}

function getLocation(dir) {
    switch(dir) {
        case "left":
            return left;
        case "right":
            return right;
        case "top":
            return top;
        case "bottom":
            return bottom;
        default:
            return right;
    }
}
class Tooltip extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { color, tip, direction } = this.props;
        return (
            <div id="tooltip" style ={{
                display: 'inline-block',
                backgroundColor: color,
                padding: '5px 5px 5px 5px',
                color: 'white',
                fontWeight: 'bold',
                fontSize: 10,
                borderRadius: '5px',
                position: 'relative',
                zIndex: 100,
                ...getLocation(direction)
            }}>
                {tip}
            </div>
        )
    }
}

Tooltip.propTypes = {
    /** Tooltip Color */
    color: PropTypes.string,

    /** Tooltip Message */
    tip: PropTypes.string,

    /** Direction of Arrow */
    direction: PropTypes.string
}

Tooltip.defaultProps = {
    /** Default IX Tooltip Color */
    color: "#445160",

    /** Placeholder Tip */
    tip: "TOOLTIP",

    /** Direction of Arrow */
    direction: 'right'
}

export default Tooltip;