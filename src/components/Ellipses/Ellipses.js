import React from 'react';
import PropTypes from 'prop-types';

class Ellipses extends React.Component {
    render() {

        const { color, size, direction } = this.props;

        return (
            <div style={{ display: 'flex', flexDirection: direction, float: 'left' }}>
                <div style={{margin: '2px 2px 2px 2px', height: size, width: size, backgroundColor: color, borderRadius: '50%' }} />
                <div style={{margin: '2px 2px 2px 2px', height: size, width: size, backgroundColor: color, borderRadius: '50%' }} />
                <div style={{margin: '2px 2px 2px 2px', height: size, width: size, backgroundColor: color, borderRadius: '50%' }} />
            </div>
        )
    };
}

Ellipses.propTypes = {
    color: PropTypes.string,

    size: PropTypes.number,

    direction: PropTypes.string
}

Ellipses.defaultProps = {
    color: "#0d47a1",

    size: 3,

    direction: 'row'
}

export default Ellipses;